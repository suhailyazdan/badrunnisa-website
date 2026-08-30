"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navGroups = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Our Work",
    href: "/our-work",
    children: [
      { label: "Our Work", href: "/our-work" },
      { label: "Dialysis Support", href: "/dialysis-support" },
      { label: "Impact", href: "/impact" },
      { label: "Humanity & Compassion", href: "/humanity-compassion" },
    ],
  },
  {
    label: "Impact",
    href: "/impact",
  },
  {
    label: "Get Involved",
    href: "/get-involved",
  },
  {
    label: "Updates",
    href: "/updates",
  },
  {
    label: "More",
    children: [
      { label: "Humanity & Compassion", href: "/humanity-compassion" },
      { label: "Dialysis Support", href: "/dialysis-support" },
      { label: "Updates", href: "/updates" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e0d6] bg-[#fffdf9]/85 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Baderunissa Foundation home">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white/80 shadow-sm ring-1 ring-[#dfeaf1]">
              <Image
                src="/logo.png"
                alt="Baderunissa Foundation logo"
                width={92}
                height={92}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-base font-semibold tracking-tight text-slate-900">
                Baderunissa Foundation
              </p>
              <p className="text-[10px] uppercase tracking-[0.26em] text-slate-500">
                Serving Humanity
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 xl:flex" aria-label="Main navigation">
            {navGroups.map((item) => {
              const hasChildren = Boolean(item.children?.length);

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href ?? "/"}
                    className="rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#edfaff] hover:text-[#0d75a3]"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown((current) => (current === item.label ? null : item.label))
                    }
                    className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#edfaff] hover:text-[#0d75a3]"
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <span aria-hidden="true">▾</span>
                  </button>

                  {openDropdown === item.label ? (
                    <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-[#e8e1d7] bg-white p-2 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#edfaff] hover:text-[#0d75a3]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="whitespace-nowrap rounded-full border border-[#d8eaf2] bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-[#8fcfe0] hover:text-[#0d75a3]"
            >
              Contact Us
            </Link>
            <Link
              href="/get-involved"
              className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#1a9cc9] to-[#f35aaa] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            >
              Donate Now
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dfe8e4] bg-[#f7f4ee] text-slate-800 xl:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </div>
          </button>
        </div>
      </div>

      <div className="px-4 pb-4 xl:hidden">
        <div className="overflow-hidden rounded-2xl border border-[#e7e0d6] bg-white/90 shadow-sm">
          <div className={`transition-all duration-300 ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}>
            <nav className="space-y-1 p-3">
              {navGroups.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="rounded-xl border border-[#eef2ee] bg-[#f9faf8] p-2">
                      <p className="px-2 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {item.label}
                      </p>
                      <div className="mt-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-[#0d75a3]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href ?? "/"}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#edfaff] hover:text-[#0d75a3]"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex gap-2 border-t border-[#ece5dc] p-3">
              <Link
                href="/contact"
                className="flex-1 whitespace-nowrap rounded-full border border-[#d8eaf2] bg-white px-4 py-2.5 text-center text-sm font-semibold text-slate-800"
              >
                Contact Us
              </Link>
              <Link
                href="/get-involved"
                className="flex-1 whitespace-nowrap rounded-full bg-gradient-to-r from-[#1a9cc9] to-[#f35aaa] px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
