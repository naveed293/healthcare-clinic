import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { Icon, type IconName } from "../lib/Icons";

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  y = 26,
  scale = 1,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  className?: string;
  as?: ElementType;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={cn("reveal", inView && "is-visible", className)}
      style={{
        transitionDelay: `${delay}ms`,
        ["--ry" as string]: `${y}px`,
        ["--rs" as string]: `${scale}`,
      }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */
type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "dark" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: IconName;
  type?: "button" | "submit";
};

export function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  icon,
  type = "button",
}: BtnProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-tight transition-all duration-300 active:scale-[0.97] whitespace-nowrap";
  const sizes = {
    sm: "px-4 py-2 text-[13px]",
    md: "px-6 py-3 text-[13.5px]",
    lg: "px-7 py-3.5 text-sm",
  } as const;
  const variants = {
    primary:
      "bg-brand-500 text-white shadow-[0_14px_30px_-14px_rgba(59,130,246,0.85)] hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_-14px_rgba(37,99,235,0.9)]",
    dark: "bg-ink text-white hover:bg-ink-soft hover:-translate-y-0.5",
    outline:
      "border border-slate-200 bg-white text-ink hover:border-brand-400 hover:text-brand-600 hover:-translate-y-0.5",
    white:
      "bg-white text-brand-600 shadow-[0_14px_30px_-16px_rgba(0,0,0,0.35)] hover:bg-slate-50 hover:-translate-y-0.5",
  } as const;

  const content = (
    <>
      {children}
      {icon && (
        <Icon
          name={icon}
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );
  const cls = cn(base, sizes[size], variants[variant], className);

  if (to) return <Link to={to} className={cls}>{content}</Link>;
  if (href) return <a href={href} className={cls}>{content}</a>;
  return (
    <button type={type} onClick={onClick} className={cls}>
      {content}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Section badge + heading                                             */
/* ------------------------------------------------------------------ */
export function Badge({
  children,
  light = false,
  className,
}: {
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[12px] font-semibold",
        light
          ? "border-white/30 bg-white/10 text-white backdrop-blur"
          : "border-line bg-white text-muted shadow-[0_4px_14px_-8px_rgba(14,27,51,0.25)]",
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", light ? "bg-white" : "bg-brand-500")} />
      {children}
    </span>
  );
}

export function SectionHead({
  badge,
  title,
  sub,
  center = true,
  className,
}: {
  badge: string;
  title: string;
  sub?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        center ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Reveal>
        <Badge>{badge}</Badge>
      </Reveal>
      <Reveal delay={70}>
        <h2 className="max-w-xl text-[clamp(1.9rem,4vw,2.7rem)] leading-[1.08] font-bold text-ink">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={130}>
          <p className={cn("max-w-lg text-[15px] leading-relaxed text-muted", center && "mx-auto")}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Star rating                                                         */
/* ------------------------------------------------------------------ */
export function Stars({
  rating = 5,
  className,
  starClass = "h-4 w-4",
}: {
  rating?: number;
  className?: string;
  starClass?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon
          key={i}
          name="star"
          className={cn(starClass, i < rating ? "text-amber-400" : "text-slate-200")}
        />
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Section shell                                                       */
/* ------------------------------------------------------------------ */
export function Section({
  children,
  className,
  pad = "py-20 sm:py-24",
}: {
  children: ReactNode;
  className?: string;
  pad?: string;
}) {
  return (
    <section className={cn("relative px-5 sm:px-8", pad, className)}>
      <div className="mx-auto w-full max-w-[1180px]">{children}</div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */
export function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[26px] border border-line bg-paper",
        hover &&
          "transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:bg-white hover:shadow-[0_32px_60px_-40px_rgba(14,27,51,0.35)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
