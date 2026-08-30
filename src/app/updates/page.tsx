import type { Metadata } from "next";
import { NewsCard } from "@/components/NewsCard";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMeta, updates } from "@/data/site";

export const metadata: Metadata = {
  title: pageMeta.updates.title,
  description: pageMeta.updates.description,
};

export default function UpdatesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Updates"
        title="News, community updates and ongoing service"
        description="Follow the Foundation’s latest community notices, awareness efforts and humanitarian support initiatives."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {updates.map((item) => (
          <NewsCard key={item.title} title={item.title} summary={item.summary} date={item.date} />
        ))}
      </div>
    </div>
  );
}
