import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { Icon } from "../lib/Icons";
import {
  doctors,
  faqs,
  features,
  heroAvatars,
  img,
  posts,
  services,
  steps,
  testimonials,
} from "../lib/data";
import { Badge, Button, Card, Reveal, Section, SectionHead, Stars } from "./ui";

/* ================================================================== */
/* HERO                                                                */
/* ================================================================== */
export function HomeHero() {
  return (
    <section className="relative overflow-hidden px-5 pt-14 pb-10 sm:px-8 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-32 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_68%)] blur-2xl" />
        <div className="absolute top-10 -right-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,196,253,0.28),transparent_68%)] blur-2xl" />
        <div className="absolute inset-x-0 top-0 h-[420px] text-brand-500/[0.05] grid-dots [mask-image:radial-gradient(ellipse_60%_60%_at_70%_20%,black,transparent)]" />
      </div>

      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* left */}
        <div>
          <Reveal>
            <div className="flex items-center gap-2.5">
              <Stars rating={5} />
              <span className="text-[13px] font-semibold text-ink">
                5.0 <span className="text-slate-400">(980 Reviews)</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 max-w-[13ch] text-[clamp(2.8rem,6vw,4.4rem)] leading-[0.99] font-bold text-ink">
              Partner in health and wellness
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-[26rem] text-[15.5px] leading-relaxed text-muted">
              Providing advanced healthcare solutions with a compassionate touch for every patient.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Button to="/contact" size="lg">
                Book a call
              </Button>
              <Link
                to="/services"
                className="group flex items-center gap-3 text-[13.5px] font-bold text-ink transition-colors hover:text-brand-600"
              >
                <span className="relative grid h-9 w-9 place-items-center rounded-full bg-ink text-white transition-colors duration-300 group-hover:bg-brand-600">
                  <Icon name="play-filled" className="ml-0.5 h-3 w-3" />
                  <span className="absolute inset-0 rounded-full bg-brand-500/40 anim-pulse-ring" />
                </span>
                Watch Video
              </Link>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-11 flex items-center gap-4">
              <div className="flex items-center">
                {heroAvatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Patient"
                    loading="lazy"
                    className={cn(
                      "h-11 w-11 rounded-full border-[3px] border-white object-cover shadow-sm",
                      i > 0 && "-ml-3.5",
                    )}
                  />
                ))}
              </div>
              <div>
                <p className="text-[15px] font-bold text-ink">5000+ Appointments</p>
                <p className="mt-0.5 text-[12.5px] font-medium text-slate-400">
                  Patients booked already
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* right image */}
        <Reveal delay={140} y={40} scale={0.97}>
          <div className="relative mx-auto max-w-[500px]">
            <div className="absolute -top-5 -right-5 -z-10 h-full w-full rounded-[40px] border-2 border-brand-100" />
            <div className="absolute -bottom-8 -left-10 -z-10 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_70%)] blur-xl" />
            <img
              src={img.hero}
              alt="VitalFlow doctor"
              className="h-[430px] w-full rounded-[36px] object-cover object-top shadow-[0_50px_90px_-55px_rgba(14,27,51,0.6)] sm:h-[520px]"
            />
            <div className="anim-float absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-line bg-white/95 p-3.5 pr-5 shadow-[0_26px_50px_-30px_rgba(14,27,51,0.5)] backdrop-blur sm:-left-12">
              <img src={doctors[1].photo} alt={doctors[1].name} className="h-11 w-11 rounded-xl object-cover" />
              <div>
                <p className="text-[13px] leading-none font-bold text-ink">{doctors[1].name}</p>
                <p className="mt-1 text-[11px] font-medium text-slate-400">{doctors[1].role}</p>
              </div>
              <span className="ml-2 grid h-7 w-7 place-items-center rounded-full bg-brand-50 text-brand-500">
                <Icon name="video" className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================================================================== */
/* VIRTUAL CONSULT + STAT                                              */
/* ================================================================== */
export function VirtualStrip() {
  const [sent, setSent] = useState(false);

  return (
    <Section pad="py-10 sm:py-14">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.65fr_1fr]">
        {/* consultation form */}
        <Reveal>
          <Card hover={false} className="p-7 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-[24px] font-bold tracking-tight text-ink sm:text-[27px]">
                Virtual Consultation
              </h3>
              <div className="flex items-center gap-2.5">
                <Stars rating={5} />
                <span className="text-[12.5px] font-semibold text-ink">
                  5.0 <span className="text-slate-400">(980 Reviews)</span>
                </span>
              </div>
            </div>

            {sent ? (
              <div className="mt-9 flex items-center gap-4 rounded-2xl border border-brand-200 bg-white px-6 py-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                  <Icon name="check" className="h-5 w-5" strokeWidth={2.4} />
                </span>
                <div>
                  <p className="text-[15px] font-bold text-ink">Consultation request received</p>
                  <p className="mt-0.5 text-[13px] text-muted">
                    Our care team will call you back within 15 minutes.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e: FormEvent) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="mt-9 grid grid-cols-1 items-end gap-6 sm:grid-cols-[1fr_1fr_1fr_auto]"
              >
                <div>
                  <label className="text-[12.5px] font-bold text-ink">Name</label>
                  <input
                    required
                    placeholder="Jane Smith"
                    className="mt-2.5 w-full border-b border-slate-200 bg-transparent pb-2.5 text-[13.5px] font-medium text-muted placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[12.5px] font-bold text-ink">Doctor</label>
                  <select
                    className="mt-2.5 w-full appearance-none border-b border-slate-200 bg-transparent pb-2.5 text-[13.5px] font-medium text-muted transition-colors focus:border-brand-500 focus:outline-none"
                    defaultValue="Dr Maria Clevon"
                  >
                    <option>Dr Maria Clevon</option>
                    {doctors.map((d) => (
                      <option key={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[12.5px] font-bold text-ink">Location</label>
                  <select
                    className="mt-2.5 w-full appearance-none border-b border-slate-200 bg-transparent pb-2.5 text-[13.5px] font-medium text-muted transition-colors focus:border-brand-500 focus:outline-none"
                    defaultValue="Amsterdam"
                  >
                    <option>Amsterdam</option>
                    <option>New York</option>
                    <option>London</option>
                    <option>Berlin</option>
                  </select>
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Submit
                </Button>
              </form>
            )}
          </Card>
        </Reveal>

        {/* stat */}
        <Reveal delay={120}>
          <Card hover={false} className="flex h-full flex-col justify-center gap-4 p-7 sm:p-8">
            <p className="text-[clamp(3rem,5vw,4rem)] leading-none font-bold tracking-tight text-ink">
              200K<span className="text-brand-500">+</span>
            </p>
            <p className="max-w-[16rem] text-[15px] leading-relaxed text-muted">
              Cured satisfied patients around the globe
            </p>
            <div className="mt-1 flex items-center gap-2">
              <Stars rating={5} starClass="h-3.5 w-3.5" />
              <span className="text-[11.5px] font-semibold text-slate-400">4.9 average</span>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

/* ================================================================== */
/* WHY CHOOSE                                                          */
/* ================================================================== */
export function WhyChoose() {
  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-12">
        <div>
          <Reveal>
            <Badge>Why us</Badge>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 max-w-md text-[clamp(1.9rem,4vw,2.7rem)] leading-[1.08] font-bold text-ink">
              Why choose VitalFlow for your healthcare?
            </h2>
          </Reveal>

          <div className="mt-10 space-y-8">
            {[
              {
                n: "01",
                t: "Experienced Professionals",
                b: "Our team of dedicated healthcare providers brings years of experience and expertise to deliver care.",
              },
              {
                n: "02",
                t: "Advanced Technology",
                b: "We utilize cutting-edge medical technology to provide accurate diagnoses and effective treatments.",
              },
            ].map((item, i) => (
              <Reveal key={item.n} delay={130 + i * 90}>
                <div className="flex gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-200 text-[13px] font-bold text-slate-400">
                    {item.n}
                  </span>
                  <div>
                    <h4 className="text-[16.5px] font-bold text-ink">{item.t}</h4>
                    <p className="mt-2.5 max-w-sm text-[14px] leading-relaxed text-muted">
                      {item.b}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={340}>
            <div className="mt-10">
              <Button to="/about" size="lg">
                Get Started
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} y={40} scale={0.98}>
          <div className="relative">
            <img
              src={img.whyChoose}
              alt="VitalFlow clinician with a patient"
              loading="lazy"
              className="h-[440px] w-full rounded-[36px] object-cover shadow-[0_50px_90px_-55px_rgba(14,27,51,0.6)] sm:h-[520px]"
            />

            {/* available doctors overlay */}
            <div className="anim-float absolute bottom-6 left-4 w-[264px] rounded-3xl border border-line bg-white/95 p-5 shadow-[0_36px_70px_-40px_rgba(14,27,51,0.6)] backdrop-blur sm:left-8">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[14px] font-bold text-ink">Available Doctors</p>
                <Link to="/doctors" className="text-[11.5px] font-semibold text-brand-500 hover:text-brand-700">
                  Choose Doctors
                </Link>
              </div>

              <div className="mt-4 space-y-3">
                {doctors.slice(0, 2).map((d) => (
                  <div key={d.name} className="flex items-center gap-3 border-t border-line pt-3 first:border-0 first:pt-0">
                    <img src={d.photo} alt={d.name} className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <p className="text-[13px] font-bold text-ink">{d.name}</p>
                      <p className="text-[11.5px] font-medium text-slate-400">{d.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/doctors"
                className="group mt-4 flex items-center gap-3 border-t border-line pt-4"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-400 text-white transition-transform duration-300 group-hover:rotate-90">
                  <Icon name="plus" className="h-4 w-4" strokeWidth={2.4} />
                </span>
                <span className="text-[12.5px] font-bold text-ink">Meet Our Experts</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ================================================================== */
/* SERVICES                                                            */
/* ================================================================== */
export function ServicesSection() {
  return (
    <Section>
      <SectionHead
        badge="Services"
        title="Personalized solutions for better oral health"
        sub="From pediatrics to mental health, every VitalFlow service is delivered by board certified specialists with transparent pricing."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 70}>
            <Card className="flex h-full flex-col p-8">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/[0.08] text-brand-500">
                <Icon name={s.icon} className="h-7 w-7" strokeWidth={1.3} />
              </span>
              <h3 className="mt-7 text-[20px] font-bold text-ink">{s.title}</h3>
              <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-muted">{s.body}</p>
              <Link
                to="/services"
                className="group mt-7 inline-flex items-center gap-2 text-[13.5px] font-bold text-ink transition-colors hover:text-brand-600"
              >
                View Services
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 text-brand-500 transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ================================================================== */
/* VISION                                                              */
/* ================================================================== */
export function VisionSection() {
  return (
    <Section className="bg-paper">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal y={40} scale={0.98}>
          <img
            src={img.vision}
            alt="VitalFlow clinical team in the operating theatre"
            loading="lazy"
            className="h-[380px] w-full rounded-[32px] object-cover shadow-[0_50px_90px_-55px_rgba(14,27,51,0.6)] sm:h-[440px]"
          />
        </Reveal>

        <div>
          <Reveal>
            <Badge>About us</Badge>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 max-w-md text-[clamp(1.9rem,4vw,2.7rem)] leading-[1.08] font-bold text-ink">
              Vision for a healthier and brighter tomorrow
            </h2>
          </Reveal>

          <div className="mt-10 space-y-6">
            {[
              {
                icon: "calendar-check",
                t: "Our Mission",
                b: "Our mission is to deliver compassionate and high-quality healthcare services.",
              },
              {
                icon: "sparkles",
                t: "Our Vision",
                b: "Leading healthcare provider, recognized for innovative practices and care.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={130 + i * 90}>
                <div className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/[0.09] text-brand-500">
                    <Icon name={item.icon} className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <h4 className="text-[15.5px] font-bold text-ink">{item.t}</h4>
                    <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-muted">{item.b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={330}>
            <div className="mt-10">
              <Button to="/about" size="lg">
                What we do
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ================================================================== */
/* FEATURES                                                            */
/* ================================================================== */
export function FeaturesSection() {
  return (
    <Section>
      <SectionHead
        badge="Features"
        title="Innovative solutions to enhance medical service"
        sub="Thoughtful technology and human-centered design, built into every step of your care journey."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 70}>
            <Card className="flex h-full flex-col items-center p-8 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/[0.08] text-brand-500">
                <Icon name={f.icon} className="h-6.5 w-6.5" strokeWidth={1.4} />
              </span>
              <h3 className="mt-6 text-[18px] font-bold text-ink">{f.title}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{f.body}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ================================================================== */
/* PROCESS                                                             */
/* ================================================================== */
export function ProcessSection() {
  return (
    <Section className="bg-paper">
      <SectionHead
        badge="How it works"
        title="Step-by-step process for seamless user experience"
      />

      <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 110}>
            <div className={cn(i === 1 && "sm:mt-8")}>
              <span className="text-[13px] font-bold text-slate-300">{s.num}</span>
              <h3 className="mt-2.5 text-[17.5px] font-bold text-ink">{s.title}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{s.body}</p>
              <div className="mt-6 overflow-hidden rounded-[22px]">
                <img
                  src={s.image}
                  alt={s.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ================================================================== */
/* TESTIMONIALS                                                        */
/* ================================================================== */
export function TestimonialsSection() {
  return (
    <Section>
      <SectionHead
        badge="Testimonials"
        title="What our satisfied and happy clients have to say"
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 70}>
            <Card hover={false} className="flex h-full flex-col p-7">
              <div className="flex items-center gap-3.5">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <p className="text-[15px] font-bold text-ink">{t.name}</p>
              </div>
              <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-muted">
                "{t.quote}"
              </p>
              <Stars rating={t.rating} className="mt-5" starClass="h-4 w-4" />
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ================================================================== */
/* BLOG                                                                */
/* ================================================================== */
export function BlogSection({ compact = false }: { compact?: boolean }) {
  const list = compact ? posts.slice(0, 3) : posts;
  return (
    <Section>
      <SectionHead
        badge="Blog"
        title="Insights and tips for better healthcare decisions"
        sub="Written and reviewed by our clinicians — practical medicine, without the jargon."
      />

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {list.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <Link to="/blog" className="group block">
              <div className="overflow-hidden rounded-[24px]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                />
              </div>
              <h3 className="mt-5 max-w-[26rem] text-[17px] leading-snug font-bold text-ink transition-colors duration-300 group-hover:text-brand-600">
                {p.title}
              </h3>
              <div className="mt-4 flex items-center gap-5">
                <span className="flex items-center gap-1.5 text-[12px] font-semibold text-muted">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-500/[0.09] text-brand-500">
                    <Icon name="calendar" className="h-3.5 w-3.5" />
                  </span>
                  {p.date}
                </span>
                <span className="flex items-center gap-1.5 text-[12px] font-semibold text-muted">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-brand-500/[0.09] text-brand-500">
                    <Icon name="clock" className="h-3.5 w-3.5" />
                  </span>
                  {p.read}
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ================================================================== */
/* FAQ                                                                 */
/* ================================================================== */
export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section>
      <div className="mx-auto max-w-[760px]">
        <SectionHead badge="FAQ's" title="Frequently asked questions for quick answers" />

        <div className="mt-12">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className="border-b border-line first:border-t">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={cn(
                        "text-[14.5px] font-semibold transition-colors duration-300",
                        isOpen ? "text-brand-600" : "text-ink",
                      )}
                    >
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-400",
                        isOpen
                          ? "rotate-45 bg-ink text-white"
                          : "bg-brand-500 text-white shadow-[0_10px_20px_-10px_rgba(59,130,246,0.9)]",
                      )}
                    >
                      <Icon name="plus" className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-6 text-[14px] leading-relaxed text-muted">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

/* ================================================================== */
/* BLUE CTA                                                            */
/* ================================================================== */
export function BlueCta() {
  const [sent, setSent] = useState(false);

  return (
    <section className="relative overflow-hidden bg-brand-500 px-5 py-20 sm:px-8 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-700/40 blur-3xl" />
        <div className="absolute inset-0 text-white/10 grid-dots [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <Badge light>Contact</Badge>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 max-w-md text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.06] font-bold text-white">
              Get more information &amp; get started
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-white/70">
              Have a question or need to book quickly? Send us a message and a member of our
              care team will get back to you within 15 minutes.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-8 flex items-center gap-3">
              <Stars rating={5} />
              <span className="text-[13px] font-semibold text-white">
                5.0 <span className="text-white/60">(980 Reviews)</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 grid max-w-md grid-cols-3 gap-4">
              {[
                { icon: "phone", label: "Call us", value: "+1 800 555-0199" },
                { icon: "mail", label: "Email", value: "care@vitalflow.co" },
                { icon: "clock", label: "Open", value: "24/7 support" },
              ].map((c) => (
                <div key={c.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <Icon name={c.icon} className="h-4.5 w-4.5 text-white" />
                  <p className="mt-3 text-[10.5px] font-semibold tracking-wide text-white/55 uppercase">
                    {c.label}
                  </p>
                  <p className="mt-1 text-[12.5px] leading-snug font-bold text-white">{c.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* form */}
        <Reveal delay={140} y={40}>
          {sent ? (
            <div className="flex h-full min-h-[380px] flex-col items-center justify-center rounded-[28px] border border-white/20 bg-white/10 p-10 text-center backdrop-blur">
              <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white text-brand-600">
                <Icon name="check" className="h-7 w-7" strokeWidth={2.4} />
                <span className="absolute inset-0 rounded-full bg-white/40 anim-pulse-ring" />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-white">Message sent</h3>
              <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-white/70">
                Thank you for reaching out. A VitalFlow care coordinator will respond shortly.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-7 text-[13px] font-bold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-[28px] border border-white/15 bg-white/8 p-7 backdrop-blur sm:p-9"
            >
              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                <div>
                  <label className="text-[13px] font-bold text-white">Full Name</label>
                  <input
                    required
                    placeholder="Jane Smith"
                    className="mt-3 w-full border-b border-white/25 bg-transparent pb-2.5 text-[13.5px] font-medium text-white placeholder:text-white/40 transition-colors focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[13px] font-bold text-white">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@email.com"
                    className="mt-3 w-full border-b border-white/25 bg-transparent pb-2.5 text-[13.5px] font-medium text-white placeholder:text-white/40 transition-colors focus:border-white focus:outline-none"
                  />
                </div>
              </div>
              <div className="mt-7">
                <label className="text-[13px] font-bold text-white">Message or additional details</label>
                <textarea
                  rows={3}
                  placeholder="Tell us how we can help…"
                  className="mt-3 w-full resize-none border-b border-white/25 bg-transparent pb-2.5 text-[13.5px] font-medium text-white placeholder:text-white/40 transition-colors focus:border-white focus:outline-none"
                />
              </div>
              <div className="mt-8">
                <Button type="submit" variant="white" size="lg">
                  Submit
                </Button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
