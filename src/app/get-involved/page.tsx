import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMeta } from "@/data/site";

export const metadata: Metadata = {
  title: pageMeta.getInvolved.title,
  description: pageMeta.getInvolved.description,
};

export default function GetInvolvedPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Get involved"
        title="There are many ways to serve with compassion"
        description="From direct volunteering to skill-sharing, sponsorship and advocacy, every form of support strengthens the Foundation’s ability to serve people with dignity."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Become a Volunteer",
            description: "Join field-level and community support initiatives that respond to immediate humanitarian needs.",
          },
          {
            title: "Share Your Skills",
            description: "Support advocacy, awareness, outreach and practical project work with your expertise and time.",
          },
          {
            title: "Partner or Sponsor a Cause",
            description: "Help cover urgent needs, including dialysis support and community healthcare assistance.",
          },
          {
            title: "Become a Community Ambassador",
            description: "Help spread awareness and mobilise local compassion within your network and community.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-[1.75rem] border border-[#e7e2d8] bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edfaff] text-lg text-[#0d75a3] ring-1 ring-[#dfeaf1]">
              ✦
            </div>
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[2rem] border border-[#e8e1d7] bg-[linear-gradient(135deg,#f7f0e7_0%,#eef8f5_100%)] p-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d75a3]">Volunteer request</p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            We welcome volunteers who are ready to serve with sincerity, humility and care. Share your time, knowledge and support in ways that strengthen the lives of vulnerable people and families.
          </p>
          <p className="mt-6 text-base leading-8 text-slate-700">
            We are also open to partnerships and sponsorships for urgent humanitarian needs, especially to support dialysis care and health-related assistance.
          </p>
        </div>

        <ContactForm />
      </div>

      <div className="mt-20">
        <SectionHeading
          eyebrow="Make a Donation"
          title="Support us through secure payment"
          description="Scan the QR code below or use the payment details to make a direct donation. Every contribution helps us serve those in need with compassion and dignity."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#5c7fd9] bg-gradient-to-br from-[#5c7fd9] to-[#4a6ac7] p-8 shadow-[0_20px_50px_rgba(92,127,217,0.2)]">
            <h3 className="text-2xl font-semibold text-white">Quick Donate</h3>
            <p className="mt-4 text-sm leading-6 text-blue-50">
              Scan the QR code below with your mobile device to make a quick payment via Yes Bank's secure payment gateway.
            </p>
            <div className="mt-8 flex justify-center rounded-[1.5rem] bg-white p-6">
              <Image
                src="/payment-scan-code.jpeg"
                alt="Payment QR Code - Yes Bank"
                width={280}
                height={380}
                className="h-auto w-full max-w-xs"
                priority
              />
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm font-semibold text-blue-100">Powered by</p>
              <p className="text-base font-bold text-white">YES BANK</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#e8e1d7] bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
            <h3 className="text-2xl font-semibold text-slate-900">Payment Details</h3>
            
            <div className="mt-8 space-y-6">
              <div>
                <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#0d75a3]">
                  <span className="text-lg">💳</span> UPI
                </p>
                <p className="mt-2 text-base font-medium text-slate-800">yespay.bizsbiz186549@yesbankltd</p>
              </div>

              <div>
                <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#0d75a3]">
                  <span className="text-lg">📱</span> Phone
                </p>
                <a href="tel:+918884742786" className="mt-2 text-base font-medium text-slate-800 hover:text-[#0d75a3] transition">
                  +91 8884742786
                </a>
              </div>

              <div>
                <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#0d75a3]">
                  <span className="text-lg">✉️</span> Email
                </p>
                <a href="mailto:baderunissafoundation@gmail.com" className="mt-2 text-base font-medium text-slate-800 hover:text-[#0d75a3] transition">
                  baderunissafoundation@gmail.com
                </a>
              </div>

              <div className="border-t border-[#e7e2d8] pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0d75a3]">Bank Account</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  <span className="font-semibold">Account Number:</span><br />
                  004888700002800
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  <span className="font-semibold">IFSC Code:</span><br />
                  YESB0000048
                </p>
              </div>

              <div className="border-t border-[#e7e2d8] pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0d75a3]">📍 Address</p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  MR22/A, Apartment No.202,<br />
                  1st B Cross Rd, 1st Main,<br />
                  BTM 2nd Stage,<br />
                  Bengaluru, Bengaluru Urban,<br />
                  Karnataka, 560076
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
