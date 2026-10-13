import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../lib/Icons";
import { footerColumns, socialLinks } from "../lib/data";
import { Logo } from "./Navbar";
import { Button } from "./ui";

function Newsletter() {
  const [done, setDone] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-500 text-white">
          <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <p className="text-[13.5px] font-semibold text-ink">
          You're subscribed — see you on Friday.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        placeholder="name@email.com"
        className="w-full min-w-0 flex-1 rounded-xl border border-line bg-paper px-4 py-3 text-sm font-medium text-ink placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:bg-white focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-600 active:scale-[0.97]"
      >
        Subscribe
      </button>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,320px)_1fr]">
          {/* left brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-[280px] text-[14px] leading-relaxed text-muted">
              Creative healthcare template to launch your site quick and easily
            </p>
            <div className="mt-7">
              <Button to="/contact" icon="arrow-right">
                Book a call
              </Button>
            </div>
          </div>

          {/* right */}
          <div>
            <div className="max-w-lg">
              <h4 className="text-[17px] font-bold text-ink">Stay up to date</h4>
              <div className="mt-4">
                <Newsletter />
              </div>
              <p className="mt-3 text-[11.5px] text-slate-400">
                By subscribing you will agree to privacy and policy
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {footerColumns.map((col) => (
                <div key={col.title}>
                  <p className="text-[13.5px] font-bold text-ink">{col.title}</p>
                  <ul className="mt-4 space-y-2.5">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          to={l.href}
                          className="text-[13px] font-medium text-muted transition-colors duration-200 hover:text-brand-600"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                <p className="text-[13.5px] font-bold text-ink">Follow us</p>
                <ul className="mt-4 space-y-2.5">
                  {socialLinks.map((s) => (
                    <li key={s.label}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-2 text-[13px] font-medium text-muted transition-colors duration-200 hover:text-brand-600"
                      >
                        <Icon name={s.icon} className="h-4 w-4 text-brand-500" />
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-7 sm:flex-row">
          <p className="text-[12px] font-medium text-slate-400">
            © {new Date().getFullYear()} Vital+Flow. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy policy", "Terms of service", "Cookies"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-[12px] font-medium text-slate-400 transition-colors hover:text-ink"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
