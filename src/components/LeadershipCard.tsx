type LeadershipCardProps = {
  name: string;
  role: string;
};

export function LeadershipCard({ name, role }: LeadershipCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-[#e9e3d7] bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(29,102,93,0.1)]">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1a9cc9] to-[#8f84d9] text-lg font-semibold text-white">
        {name
          .split(" ")
          .slice(0, 2)
          .map((part) => part[0])
          .join("")
          .slice(0, 2)}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
      <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-[#0d75a3]">
        {role}
      </p>
    </article>
  );
}
