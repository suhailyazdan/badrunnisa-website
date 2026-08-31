import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  const highlightItems = ["Healthcare", "Community care", "Dialysis support"];

  return (
    <section className="relative isolate overflow-hidden bg-[#f5efe6]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(2, 81, 145, 0.8), rgba(175, 239, 255, 0.3)), url("/banner-Baderunnisa-Foundation.png")',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,195,138,0.28),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(35,135,150,0.24),_transparent_30%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
          <div className="flex flex-col justify-center py-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/25 bg-white/10 p-2 shadow-[0_16px_40px_rgba(4,15,18,0.2)] backdrop-blur-sm">
                <Image src="/logo.png" alt="Baderunissa Foundation logo" width={90} height={90} className="h-full w-full object-contain" />
              </div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#f1e7d2]/40 bg-[#f7f1e7]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f5e9d2] shadow-[0_8px_18px_rgba(0,0,0,0.12)] backdrop-blur-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d9c38a]" aria-hidden="true" />
                {eyebrow ?? "Baderunissa Foundation"}
              </div>
            </div>

            <h1 className="max-w-[560px] text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-[4.25rem]">
              {title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-3">
              {highlightItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/8 px-3 py-1.5 text-xs font-medium text-[#f5f2ee] backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-100/90">{description}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0d75a3] via-[#1a9cc9] to-[#72d1d9] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(19,82,104,0.35)] transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/12"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          </div>

          {/* <div className="relative flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[28rem] rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-[0_24px_80px_rgba(11,22,21,0.36)] backdrop-blur-md">
              <div className="rounded-[1.6rem] border border-[#edf1ee] bg-white/95 p-5 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0d75a3]">
                      Mission
                    </p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                      Compassion in action
                    </p>
                  </div>
                  <span className="rounded-full bg-[#edf8f6] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0d75a3]">
                    Community first
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Serving underprivileged communities with dignity, practical support and hope when it matters most.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.2rem] bg-[#edf7fb] p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0d75a3]">
                      Care
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-900">Healthcare support</p>
                  </div>
                  <div className="rounded-[1.2rem] bg-gradient-to-br from-[#0d75a3] to-[#8f84d9] p-4 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e8edf6]">
                      Priority
                    </p>
                    <p className="mt-2 text-base font-semibold">Dialysis support</p>
                  </div>
                </div>

                <div className="mt-4 rounded-[1.2rem] border border-[#ece4d6] bg-[#fffaf4] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Sponsorship focus
                    </p>
                    <span className="rounded-full bg-[#efe5c8] px-2 py-1 text-[11px] font-semibold text-[#5b4b21]">
                      ₹1,700/session
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Approximate dialysis cost per session, subject to hospital charges and treatment conditions.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
