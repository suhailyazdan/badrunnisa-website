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
  return (
    <section className="relative isolate overflow-hidden bg-[#f5efe6]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(13, 32, 30, 0.72), rgba(13, 32, 30, 0.46)), url("https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1600&q=80")',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(215,185,109,0.22),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(49,116,100,0.28),_transparent_30%)]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center py-8">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-white/25 bg-white/10 p-2 backdrop-blur-sm">
              <Image src="/logo.png" alt="Baderunissa Foundation logo" width={90} height={90} className="h-full w-full object-contain" />
            </div>
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#f2e8d1]">
                {eyebrow}
              </p>
            ) : null}
          </div>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-100/90">{description}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a9cc9] to-[#72d1d9] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0d201e]/20 transition hover:-translate-y-0.5 hover:opacity-95"
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

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-md rounded-[2rem] border border-white/20 bg-white/10 p-5 shadow-[0_24px_80px_rgba(11,22,21,0.35)] backdrop-blur-md">
            <div className="rounded-[1.4rem] bg-white/95 p-5 shadow-sm ring-1 ring-[#edf1ee]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.3rem] bg-[#f1f7f5] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#0d75a3]">Mission</p>
                  <p className="mt-3 text-xl font-semibold text-slate-900">Compassion in action</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Serving underprivileged communities with practical support, dignity and hope.
                  </p>
                </div>
                <div className="rounded-[1.3rem] bg-gradient-to-br from-[#1a9cc9] to-[#8f84d9] p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#dfece8]">Priority</p>
                  <p className="mt-3 text-xl font-semibold">Dialysis support</p>
                  <p className="mt-2 text-sm leading-6 text-[#ebf4f1]">
                    regular treatment support for life-dependent care needs.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-[1.3rem] border border-[#e7dfd0] bg-[#fffaf4] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                    Sponsorship focus
                  </p>
                  <span className="rounded-full bg-[#efe5c8] px-2 py-1 text-[11px] font-semibold text-[#5b4b21]">
                    ₹1,700/session
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Approximate dialysis cost per session, subject to hospital charges and change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
