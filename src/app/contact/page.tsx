import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { EmergencyNumbers } from "@/components/EmergencyNumbers";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMeta, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: pageMeta.contact.title,
  description: pageMeta.contact.description,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="We are here to listen, support and respond"
        description="For enquiries related to volunteering, support, partnerships, sponsorship or community concerns, please contact the Foundation via phone or email."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="rounded-[2rem] border border-[#e8e1d7] bg-[#fffaf4] p-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d75a3]">Reach us</p>
          <ul className="mt-6 space-y-4 text-slate-700">
            {siteConfig.phoneNumbers.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="text-lg font-medium text-slate-800 hover:text-[#0d75a3]">
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${siteConfig.email}`} className="text-lg font-medium text-slate-800 hover:text-[#0d75a3]">
                {siteConfig.email}
              </a>
            </li>
            <li className="text-base text-slate-600">{siteConfig.address}</li>
          </ul>
        </div>

        <ContactForm />
      </div>

      <div className="mt-16">
        <EmergencyNumbers />
      </div>
    </div>
  );
}
