import Link from "next/link";

type MobileMenuProps = {
  items: { href: string; label: string }[];
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ items, isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 md:hidden ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <nav className="mt-4 space-y-2 rounded-2xl border border-[#dfe8e4] bg-white/90 p-4 shadow-lg backdrop-blur-sm">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#edfaff] hover:text-[#0d75a3]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
