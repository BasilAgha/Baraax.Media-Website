export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10 text-white/55 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">
        <p className="font-medium uppercase tracking-[0.24em] text-stone-100">Baraax Media</p>
        <div className="flex flex-wrap gap-5">
          <a className="hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="hover:text-white" href="mailto:hello@baraaxmedia.com">
            Contact
          </a>
          <span>Copyright 2026</span>
        </div>
      </div>
    </footer>
  );
}
