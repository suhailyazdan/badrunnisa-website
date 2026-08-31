import Link from "next/link";
import { DonationCTA } from "@/components/DonationCTA";
import { EmergencyNumbers } from "@/components/EmergencyNumbers";
import { Hero } from "@/components/Hero";
import { ImpactCard } from "@/components/ImpactCard";
import { NewsCard } from "@/components/NewsCard";
import { ProgramCard } from "@/components/ProgramCard";
import { SectionHeading } from "@/components/SectionHeading";
import { VolunteerCTA } from "@/components/VolunteerCTA";
import {
  impactProjects,
  leadership,
  serviceAreas,
  siteConfig,
  updates,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Baderunissa Foundation"
        title="Serving Humanity with Compassion"
        description="We are an active grassroots humanitarian organization in Bengaluru, working to protect dignity, strengthen communities and support vulnerable people through compassionate care."
        primaryCta={{ href: "/get-involved", label: "Support Our Mission" }}
        secondaryCta={{ href: "/about", label: "Become a Volunteer" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-[2rem] border border-[#dfe9e6] bg-[linear-gradient(135deg,#edf9f7_0%,#fffdf8_42%,#f5efe8_100%)] p-8 shadow-[0_18px_40px_rgba(16,24,40,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0d75a3]">Our mission</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
              Compassion rooted in action.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Baderunissa Foundation is committed to serving people in need with local understanding, practical support and a humane approach to healthcare, public safety and community welfare.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              ["Humanitarian care", "Support that responds to urgent needs with empathy, action and respect."],
              ["Healthcare access", "Helping families navigate critical care needs and treatment support."],
              ["Community advocacy", "Promoting public safety and civic awareness with local action."],
              ["Trust and dignity", "Every person is treated with care, fairness and human respect."],
            ].map(([title, copy], index) => (
              <div
                key={title}
                className={`rounded-[1.5rem] border p-5 shadow-[0_12px_24px_rgba(15,23,42,0.04)] ${
                  index % 2 === 0
                    ? "border-[#dfeaf1] bg-[#f5fbfd]"
                    : "border-[#e9e1d8] bg-[#fffdfb]"
                }`}
              >
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0ea] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Dialysis support"
                title="Life-saving treatment support for the vulnerable"
                description="Regular dialysis is essential for many patients, and the costs can be overwhelming. The Foundation supports underprivileged critical dialysis patients through sponsored and free dialysis sessions where possible."
              />
            </div>
            <div className="rounded-[2rem] border border-[#e8dfd0] bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0d75a3]">
                  Sponsorship focus
                </span>
                <span className="rounded-full bg-[#f4e6b8] px-3 py-1 text-sm font-semibold text-[#604c20]">
                  ₹1,700/session
                </span>
              </div>
              <p className="mt-5 text-base leading-8 text-slate-600">
                The approximate amount for each dialysis session is ₹1,700, though the amount is subject to hospital charges and may change depending on treatment conditions and facility costs.
              </p>
              <Link
                href="/dialysis-support"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a9cc9] to-[#72d1d9] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
              >
                Support monthly dialysis care
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Areas of work"
          title="A compassionate response across urgent community needs"
          description="The foundation works across healthcare, advocacy and social welfare. These are the core areas of service and care."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceAreas.map((item) => (
            <ProgramCard
              key={item.title}
              title={item.title}
              description={item.description}
              detail="Community-led humanitarian action with dignity, safety and practical care at the centre."
            />
          ))}
        </div>
      </section>

      <section className="bg-[#f7f3ed] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Impact & projects"
            title="From advocacy to direct support, each effort reflects a commitment to human dignity"
            description="The foundation responds to healthcare challenges, public safety concerns, community grievances and urgent social needs with practical coordination and compassionate action."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {impactProjects.slice(0, 4).map((project) => (
              <ImpactCard key={project.title} title={project.title} description={project.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Mission & vision"
              title="Locally rooted, compassion-first, community-led"
              description="The Foundation believes that meaningful service begins with understanding people’s needs and responding with dignity, care and practical action."
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-[#e7e2d8] bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0d75a3]">Mission</p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                To serve communities with compassion, dignity and practical support—especially during periods of health crisis, social hardship and public vulnerability.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[#e7e2d8] bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0d75a3]">Vision</p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                A more humane and caring society where every person has access to dignity, safety, support and opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3ee] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Guided by compassion and community accountability"
            description="The foundation’s leadership reflects a practical, service-oriented approach to humanitarian work and social care."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {leadership.map((person) => (
              <div key={person.name} className="rounded-[1.75rem] border border-[#e7e1d7] bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1a9cc9] to-[#8f84d9] text-lg font-semibold text-white">
                  {person.name
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{person.name}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0d75a3]">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get involved"
          title="Stand with us in service and solidarity"
          description="There are many ways to contribute to the mission through volunteerism, skills-sharing, sponsorship and community advocacy."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Become a Volunteer", "Contribute time and care to community initiatives and support work on the ground."],
            ["Share Your Skills", "Offer your expertise to strengthen outreach, awareness and support efforts."],
            ["Partner or Sponsor a Cause", "Support urgent needs, healthcare assistance and targeted community care."],
            ["Community Ambassador", "Help amplify the foundation’s mission and mobilise local compassion."],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-[1.75rem] border border-[#e8e1d7] bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edfaff] text-lg text-[#0d75a3] ring-1 ring-[#dfeaf1]">
                ✦
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Updates"
            title="Latest community updates"
            description="The foundation continues to respond to welfare, health and civic needs through compassionate and practical action."
          />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {updates.map((item) => (
            <NewsCard key={item.title} title={item.title} summary={item.summary} date={item.date} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Contact"
            title="We are here to listen and help"
            description="Reach out for community support, partnership, sponsorship, volunteering and general enquiries."
          />
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#e7e0d6] bg-[#fffaf4] p-8 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0d75a3]">Connect</p>
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
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a9cc9] to-[#72d1d9] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              Send an enquiry
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <EmergencyNumbers />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <DonationCTA />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <VolunteerCTA />
      </section>
    </>
  );
}
