type NewsCardProps = {
  title: string;
  summary: string;
  date: string;
};

export function NewsCard({ title, summary, date }: NewsCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-[#e9e4dd] bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(29,102,93,0.1)]">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0d75a3]">{date}</p>
      <h3 className="mt-3 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p>
    </article>
  );
}
