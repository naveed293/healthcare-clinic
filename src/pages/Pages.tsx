import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { Icon } from "../lib/Icons";
import { doctors } from "../lib/data";
import {
  BlogSection,
  BlueCta,
  FaqSection,
  ProcessSection,
  ServicesSection,
  TestimonialsSection,
  VisionSection,
  WhyChoose,
} from "../components/Sections";
import { Badge, Button, Card, Reveal, Section, SectionHead, Stars } from "../components/ui";

/* ------------------------------------------------------------------ */
/* Shared page header                                                  */
/* ------------------------------------------------------------------ */
function PageHead({ badge, title, sub }: { badge: string; title: string; sub: string }) {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-8 sm:px-8 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.14),transparent_70%)] blur-2xl" />
      </div>
      <div className="mx-auto w-full max-w-[1180px]">
        <SectionHead badge={badge} title={title} sub={sub} />
      </div>
    </section>
  );
}

function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <p className="mx-auto mt-7 flex max-w-[1180px] items-center justify-center gap-2 text-[12.5px] font-semibold text-slate-400">
      {items.map((it, i) => (
        <span key={it.label} className="flex items-center gap-2">
          {it.to ? (
            <Link to={it.to} className="transition-colors hover:text-brand-600">
              {it.label}
            </Link>
          ) : (
            <span className="text-brand-600">{it.label}</span>
          )}
          {i < items.length - 1 && <span>/</span>}
        </span>
      ))}
    </p>
  );
}

/* ================================================================== */
/* ABOUT                                                               */
/* ================================================================== */
export function AboutPage() {
  return (
    <>
      <PageHead
        badge="About VitalFlow"
        title="Care that starts with people, powered by technology"
        sub="Founded in 2011, VitalFlow has grown from a single neighborhood clinic into a network of 14 hospitals and a 24/7 virtual care platform."
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />

      <Section pad="py-12">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { v: "200K+", l: "Cured satisfied patients" },
            { v: "180+", l: "Certified specialists" },
            { v: "14", l: "Clinics worldwide" },
            { v: "24/7", l: "Virtual care access" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 80}>
              <Card hover={false} className="flex h-full flex-col justify-between gap-6 p-7">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/[0.09] text-brand-500">
                  <Icon name={["users", "stethoscope", "map-pin", "clock"][i]} className="h-4.5 w-4.5" />
                </span>
                <div>
                  <p className="text-[clamp(2rem,3.5vw,2.6rem)] leading-none font-bold text-ink">{s.v}</p>
                  <p className="mt-2.5 text-[12.5px] font-medium text-muted">{s.l}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <WhyChoose />
      <VisionSection />

      {/* team strip */}
      <Section>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            center={false}
            badge="Leadership"
            title="The people behind the platform"
            sub="Clinicians and operators united by one simple belief: healthcare should feel human."
          />
          <Reveal delay={150}>
            <Button to="/doctors" variant="outline" icon="arrow-right" className="shrink-0">
              Meet all doctors
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {doctors.slice(0, 4).map((d, i) => (
            <Reveal key={d.name} delay={i * 80}>
              <Card className="overflow-hidden">
                <img src={d.photo} alt={d.name} loading="lazy" className="h-56 w-full object-cover object-top" />
                <div className="p-5">
                  <p className="text-[15px] font-bold text-ink">{d.name}</p>
                  <p className="mt-1 text-[12px] font-semibold text-brand-500">{d.role}</p>
                  <div className="mt-3.5 flex items-center justify-between border-t border-line pt-3.5">
                    <Stars rating={Math.round(d.rating)} starClass="h-3.5 w-3.5" />
                    <span className="text-[11px] font-semibold text-slate-400">{d.reviews} reviews</span>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <BlueCta />
    </>
  );
}

/* ================================================================== */
/* SERVICES                                                            */
/* ================================================================== */
export function ServicesPage() {
  return (
    <>
      <PageHead
        badge="Our services"
        title="Every department, under one record"
        sub="Six core specialties with same-day appointments, transparent pricing and virtual care options for every service."
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
      <ServicesSection />
      <ProcessSection />
      <BlueCta />
    </>
  );
}

/* ================================================================== */
/* DOCTORS                                                             */
/* ================================================================== */
export function DoctorsPage() {
  const [role, setRole] = useState("All specialties");
  const roles = ["All specialties", ...Array.from(new Set(doctors.map((d) => d.role)))];
  const filtered = role === "All specialties" ? doctors : doctors.filter((d) => d.role === role);

  return (
    <>
      <PageHead
        badge="Our specialists"
        title="Meet the doctors of VitalFlow"
        sub="Filter by specialty and book directly with the clinician you want — availability updates in real time."
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Doctors" }]} />

      <Section pad="py-12">
        <Reveal>
          <div className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-2">
            {roles.map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={cn(
                  "snap-start rounded-full px-4 py-2.5 text-[12.5px] font-bold whitespace-nowrap transition-all duration-300",
                  role === r
                    ? "bg-ink text-white"
                    : "border border-line bg-white text-muted hover:border-brand-400 hover:text-brand-600",
                )}
              >
                {r}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((d, i) => (
            <Reveal key={d.name} delay={(i % 4) * 70}>
              <Card className="overflow-hidden">
                <div className="relative">
                  <img src={d.photo} alt={d.name} loading="lazy" className="h-64 w-full object-cover object-top" />
                  <span
                    className={cn(
                      "absolute top-3 left-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10.5px] font-bold",
                      d.available ? "bg-white text-emerald-600" : "bg-ink/80 text-white/85",
                    )}
                  >
                    <span className={cn("h-1.5 w-1.5 rounded-full", d.available ? "bg-emerald-400" : "bg-white/50")} />
                    {d.available ? "Available today" : "Fully booked"}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[15.5px] font-bold text-ink">{d.name}</p>
                      <p className="mt-1 text-[12px] font-semibold text-brand-500">{d.role}</p>
                    </div>
                    <span className="rounded-lg bg-brand-50 px-2 py-1 text-[11px] font-bold text-brand-600">
                      {d.experience}
                    </span>
                  </div>
                  <div className="mt-3.5 flex items-center justify-between border-t border-line pt-3.5">
                    <Stars rating={Math.round(d.rating)} starClass="h-3.5 w-3.5" />
                    <span className="text-[11.5px] font-semibold text-slate-400">
                      {d.rating.toFixed(1)} · {d.reviews}
                    </span>
                  </div>
                  <Button to="/contact" size="sm" className="mt-4 w-full">
                    Book {d.name.split(" ")[0]}
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <TestimonialsSection />
      <BlueCta />
    </>
  );
}

/* ================================================================== */
/* BLOG                                                                */
/* ================================================================== */
export function BlogPage() {
  return (
    <>
      <PageHead
        badge="Health journal"
        title="Insights and tips for better healthcare decisions"
        sub="Evidence-based articles written and reviewed by VitalFlow clinicians, updated every week."
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />
      <BlogSection />
      <BlueCta />
    </>
  );
}

/* ================================================================== */
/* CONTACT                                                             */
/* ================================================================== */
export function ContactPage() {
  const [sent, setSent] = useState(false);
  const cards: { icon: string; label: string; value: string; note: string }[] = [
    { icon: "phone", label: "Call us", value: "+1 (800) 555-0199", note: "24/7 urgent care line" },
    { icon: "mail", label: "Email", value: "care@vitalflow.co", note: "Replies within 2 hours" },
    { icon: "map-pin", label: "Visit us", value: "45 Beacon Street", note: "Amsterdam · New York · London" },
    { icon: "clock", label: "Hours", value: "Mon–Sat · 7am–9pm", note: "Virtual care runs 24/7" },
  ];

  return (
    <>
      <PageHead
        badge="Contact"
        title="Let's talk about your health"
        sub="Book a call with our care team, ask a question, or plan your first visit — we reply fast."
      />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

      <Section pad="py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <h3 className="text-[26px] font-bold tracking-tight text-ink">
                Get more information
                <br />&amp; get started
              </h3>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-muted">
                Whether you need a same-day appointment or a second opinion, our patient
                advocates are ready to help — in person or over a secure video call.
              </p>
            </Reveal>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {cards.map((c, i) => (
                <Reveal key={c.label} delay={140 + i * 70}>
                  <Card hover={false} className="p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/[0.09] text-brand-500">
                      <Icon name={c.icon} className="h-4.5 w-4.5" />
                    </span>
                    <p className="mt-4 text-[11px] font-bold tracking-wide text-slate-400 uppercase">{c.label}</p>
                    <p className="mt-1.5 text-[14.5px] font-bold text-ink">{c.value}</p>
                    <p className="mt-1 text-[12px] font-medium text-muted">{c.note}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120} y={36}>
            <Card hover={false} className="p-7 sm:p-9">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="relative grid h-16 w-16 place-items-center rounded-full bg-brand-500 text-white">
                    <Icon name="check" className="h-7 w-7" strokeWidth={2.4} />
                    <span className="absolute inset-0 rounded-full bg-brand-500/35 anim-pulse-ring" />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-ink">You're on our calendar</h3>
                  <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-muted">
                    A care coordinator will call you within 15 minutes to confirm your visit.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-7 text-[13px] font-bold text-brand-600 underline decoration-brand-300 underline-offset-4 hover:decoration-brand-600"
                  >
                    Book another call
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e: FormEvent) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {[
                      { id: "name", l: "Full Name", type: "text", ph: "Jane Smith" },
                      { id: "email", l: "Email Address", type: "email", ph: "jane@email.com" },
                    ].map((f) => (
                      <div key={f.id}>
                        <label htmlFor={f.id} className="text-[13px] font-bold text-ink">
                          {f.l}
                        </label>
                        <input
                          id={f.id}
                          type={f.type}
                          required
                          placeholder={f.ph}
                          className="mt-2.5 w-full border-b border-slate-200 bg-transparent pb-2.5 text-[13.5px] font-medium text-muted placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:outline-none"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="dept" className="text-[13px] font-bold text-ink">
                        Department
                      </label>
                      <select
                        id="dept"
                        className="mt-2.5 w-full appearance-none border-b border-slate-200 bg-transparent pb-2.5 text-[13.5px] font-medium text-muted transition-colors focus:border-brand-500 focus:outline-none"
                        defaultValue="General care"
                      >
                        {["General care", "Pediatrics", "Cardiology", "Orthopedics", "Neurology", "Gastroenterology"].map(
                          (d) => (
                            <option key={d}>{d}</option>
                          ),
                        )}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="text-[13px] font-bold text-ink">
                        Preferred date
                      </label>
                      <input
                        id="date"
                        type="date"
                        className="mt-2.5 w-full border-b border-slate-200 bg-transparent pb-2.5 text-[13.5px] font-medium text-muted transition-colors focus:border-brand-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="msg" className="text-[13px] font-bold text-ink">
                      Message or additional details
                    </label>
                    <textarea
                      id="msg"
                      rows={4}
                      placeholder="Tell us how we can help…"
                      className="mt-2.5 w-full resize-none border-b border-slate-200 bg-transparent pb-2.5 text-[13.5px] font-medium text-muted placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button type="submit" size="lg">
                      Book a call
                    </Button>
                    <span className="flex items-center gap-2 text-[12px] font-semibold text-slate-400">
                      <Icon name="shield-check" className="h-4 w-4 text-brand-500" />
                      Your details stay private
                    </span>
                  </div>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </Section>

      <FaqSection />
      <BlueCta />
    </>
  );
}

/* ================================================================== */
/* 404                                                                 */
/* ================================================================== */
export function NotFoundPage() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center sm:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.14),transparent_70%)] blur-2xl" />
      </div>

      <Reveal>
        <Badge>Error 404</Badge>
      </Reveal>
      <Reveal delay={80}>
        <h1 className="mt-8 text-[clamp(4rem,14vw,8.5rem)] leading-none font-bold tracking-tight text-ink">
          4<span className="text-brand-500">0</span>4
        </h1>
      </Reveal>
      <Reveal delay={150}>
        <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
          The page you're looking for was moved, renamed or doesn't exist. Let's get you back
          to feeling better.
        </p>
      </Reveal>
      <Reveal delay={220}>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg" icon="arrow-right">
            Back to home
          </Button>
          <Button to="/contact" size="lg" variant="outline">
            Contact support
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
