type ProgramCardProps = {
  title: string;
  description: string;
  detail: string;
};

export function ProgramCard({ title, description, detail }: ProgramCardProps) {
  return (
    <article className="group rounded-[1.75rem] border border-[#e8e1d7] bg-white p-6 shadow-[0_12px_30px_rgba(16,24,40,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(29,102,93,0.12)]">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edfaff] text-lg text-[#0d75a3] ring-1 ring-[#dfeaf1]">
        ✦
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-700">{description}</p>
      <p className="mt-4 text-sm leading-6 text-slate-600">{detail}</p>
    </article>
  );
}
