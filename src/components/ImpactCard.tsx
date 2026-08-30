type ImpactCardProps = {
  title: string;
  description: string;
};

export function ImpactCard({ title, description }: ImpactCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-[#e9e5dc] bg-[#fffdfb] p-6 shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#d9e7e1] hover:shadow-[0_18px_38px_rgba(29,102,93,0.1)]">
      <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-[#72d1d9] via-[#8f84d9] to-[#f35aaa]" />
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
