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
        description="The BADERUNISSA FOUNDATION is an active, grassroots non-governmental organization headquartered along Bannerghatta Road in Bengaluru, Karnataka. We drive social impact through localized humanitarian service, dialysis support, healthcare support, public advocacy, and safety initiatives."
        primaryCta={{ href: "/get-involved", label: "Support Our Mission" }}
        secondaryCta={{ href: "/contact", label: "Get in Touch" }}
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
              description="The Foundation believes that meaningful service begins with understanding people's needs and responding with dignity, care and practical action."
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-[#e7e2d8] bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0d75a3]">Mission</p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                To protect and promote basic human rights, ensuring that every individual is treated with dignity and fairness.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[#e7e2d8] bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0d75a3]">Vision</p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                To ensure that every needy person receives timely help, dignity, and hope through collective humanitarian efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0ea] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About us"
            title="Founded with a mission to serve with compassion"
            description="We are BADERUNISSA FOUNDATION, a non-governmental organization founded on 15-12-2023 in the loving memory of our beloved prophet Muhammad (peace be upon him) and the founder's mother: Mrs. Baderunissa."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#dfe9e6] bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
              <h3 className="text-xl font-semibold text-slate-900">Our Focus</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                We specialize in supporting critical needy dialysis patients by sponsoring free dialysis sessions. We understand that kidney disease/failure is one of the most challenging and critical conditions in medical science, requiring regular treatment and dialysis procedures on life support.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#dfe9e6] bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
              <h3 className="text-xl font-semibold text-slate-900">Core Working Areas</h3>
              <ul className="mt-4 space-y-2 text-base text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-[#0d75a3]">•</span>
                  <span>Humanitarian Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0d75a3]">•</span>
                  <span>Human Rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0d75a3]">•</span>
                  <span>Healthcare & Dialysis Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0d75a3]">•</span>
                  <span>Education, Charity & Social Welfare</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Programs & Projects"
          title="Practical action for community welfare"
          description="Our programs span healthcare support, civic advocacy, and direct community assistance. Here's what we're currently working on:"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Infrastructure & Road Safety",
              description: "Addressing accident-prone zones like the Jayadeva U-Turn junction in Bengaluru. We work with local authorities (Mico Layout Police, GBA, KSHRC) to install traffic signals and prevent accidents.",
            },
            {
              title: "Critical Healthcare Support",
              description: "Handling critical and important healthcare cases where intervention is needed. We provide financial bridges and coordination for urgent medical treatment.",
            },
            {
              title: "Women & Child Safety",
              description: "Lodging complaints and approaching local police authorities to highlight cases affecting women and child safety. We amplify government helplines and emergency systems.",
            },
            {
              title: "Dialysis Sponsorship",
              description: "Supporting critical dialysis cases by sponsoring free sessions at various hospitals. One dialysis session costs approximately ₹1,700 (subject to hospital charges).",
            },
            {
              title: "Social Media Advocacy",
              description: "Effective use of digital platforms to raise awareness about public safety, healthcare access, and human rights. Follow us for updates and important announcements.",
            },
            {
              title: "Crisis Assistance",
              description: "Providing clothes, basic food provisions, and educational support items to low-income families facing sudden financial distress.",
            },
          ].map((program) => (
            <div key={program.title} className="rounded-[1.75rem] border border-[#e8e1d7] bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
              <h3 className="text-lg font-semibold text-slate-900">{program.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f3ee] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leadership"
            title="Guided by compassion and community accountability"
            description="The foundation's leadership reflects a practical, service-oriented approach to humanitarian work and social care."
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
          title="Be the Change"
          description="At BADERUNISSA FOUNDATION, we believe that true social transformation starts from the ground up. Whether you have a few hours a week, a specific professional skill, or a passion for making a difference, there is a place for you here."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Become a Volunteer",
              description: "Step onto the front lines of social change. From organizing local healthcare camps to participating in community-led civic drives, your physical presence can change a life today.",
            },
            {
              title: "Share Your Skills",
              description: "We are always looking for professionals to lend their expertise. If you specialize in graphic design, content writing, social media, or legal advocacy, your skills can scale our operations.",
            },
            {
              title: "Partner or Sponsor a Cause",
              description: "Collaborate with us through financial sponsorships, Corporate Social Responsibility (CSR) partnerships, or matching donation drives to subsidize critical treatments.",
            },
            {
              title: "Community Ambassador",
              description: "Amplify our voice by raising awareness online, hosting small fundraisers in your neighborhood, or sharing our stories with your network.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-[#e8e1d7] bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edfaff] text-lg text-[#0d75a3] ring-1 ring-[#dfeaf1]">
                ✦
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-base leading-7 text-slate-600 mb-6">
            Ready to take the first step? Your journey with us starts with a simple conversation. Contact us and tell us a little bit about your interests and availability.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a9cc9] to-[#72d1d9] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="bg-[#f5f0ea] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Donation Appeal"
            title="Your support can save lives"
            description="Would you consider making a donation or sponsoring free dialysis sessions every month? Your contribution gets us one step closer to our goal of supporting critical dialysis patients."
          />
          <div className="mt-10 rounded-[2rem] border border-[#dfe9e6] bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.04)]">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900">One Dialysis Session</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#0d75a3]">₹1,700</span>
                  <span className="text-base text-slate-600">/session</span>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  Subject to change with hospital charges. When you become a monthly contributor, you directly support a critical dialysis patient receiving life-saving treatment.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-[#0d75a3] font-bold">✓</span>
                    <span>Direct impact on patient care</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0d75a3] font-bold">✓</span>
                    <span>Support for multiple patients monthly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#0d75a3] font-bold">✓</span>
                    <span>Regular updates on impact</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center gap-4">
                <Link
                  href="/dialysis-support"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1a9cc9] to-[#72d1d9] px-6 py-3 text-base font-semibold text-white transition hover:opacity-95"
                >
                  Make a Donation
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#0d75a3] bg-transparent px-6 py-3 text-base font-semibold text-[#0d75a3] transition hover:bg-[#0d75a3] hover:text-white"
                >
                  Sponsor Monthly
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <SectionHeading
            eyebrow="News & Blog"
            title="Latest community updates"
            description="The foundation continues to respond to welfare, health and civic needs through compassionate and practical action. Follow us on YouTube and Instagram for more updates."
          />
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {updates.map((item) => (
            <NewsCard key={item.title} title={item.title} summary={item.summary} date={item.date} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-slate-600 mb-4">Follow us on social media for more updates and announcements</p>
          <div className="flex justify-center gap-4">
            <Link
              href="https://youtube.com"
              className="inline-flex items-center gap-2 rounded-full border border-[#0d75a3] px-4 py-2 text-sm font-semibold text-[#0d75a3] transition hover:bg-[#0d75a3] hover:text-white"
            >
              YouTube
            </Link>
            <Link
              href="https://instagram.com"
              className="inline-flex items-center gap-2 rounded-full border border-[#0d75a3] px-4 py-2 text-sm font-semibold text-[#0d75a3] transition hover:bg-[#0d75a3] hover:text-white"
            >
              Instagram
            </Link>
          </div>
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
