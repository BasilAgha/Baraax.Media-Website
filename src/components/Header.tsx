const navItems = [
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="text-sm font-medium uppercase tracking-[0.28em] text-stone-100">
          Baraax Media
        </a>
        <div className="hidden items-center gap-7 text-xs uppercase tracking-[0.18em] text-white/55 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:hello@baraaxmedia.com"
          className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/75 transition hover:border-white/50 hover:text-white"
        >
          Inquire
        </a>
      </nav>
    </header>
  );
}
