import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#e7e0d6] bg-[#f7f2ea]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a9cc9] via-[#72d1d9] to-[#f35aaa] text-lg font-semibold text-white shadow-md shadow-[#dfeaf1]/80">
                B
              </div>
              <div>
                <p className="text-base font-semibold text-slate-900">{siteConfig.name}</p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-slate-500">
                  {siteConfig.motto}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              A grassroots humanitarian organization grounded in compassion, dignity and practical care for people facing health, survival and social vulnerabilities.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-[#0d75a3]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {siteConfig.phoneNumbers.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="transition hover:text-[#0d75a3]">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[#0d75a3]">
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#e7e0d6] pt-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Baderunissa Foundation.</p>
          <p>Serving Humanity with Compassion</p>
        </div>
      </div>
    </footer>
  );
}
