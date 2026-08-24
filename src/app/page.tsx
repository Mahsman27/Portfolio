const socialLinks = [
  {
    label: "X",
    handle: "@JordanMahsman",
    href: "https://x.com/JordanMahsman",
  },
  {
    label: "GitHub",
    handle: "Mahsman27",
    href: "https://github.com/Mahsman27",
  },
  {
    label: "LinkedIn",
    handle: "Jordan Mahsman",
    href: "https://www.linkedin.com/in/jordan-mahsman/",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
      <header className="flex items-center justify-between border-t border-white/40 pt-3 font-mono text-[0.625rem] uppercase tracking-[0.2em] sm:text-xs">
        <p>Jordan Mahsman / Portfolio</p>
        <p aria-label="Year 2026">2026</p>
      </header>

      <section className="flex flex-1 items-center py-16 sm:py-20">
        <h1 className="text-[clamp(4.25rem,16vw,14rem)] font-semibold leading-[0.76] tracking-[-0.085em] uppercase">
          Jordan
          <br />
          Mahsman
        </h1>
      </section>

      <footer className="grid border-t border-white/40 lg:grid-cols-2">
        <p className="py-5 text-xl leading-tight tracking-[-0.03em] sm:text-2xl lg:py-6">
          Building useful software.
        </p>

        <nav aria-label="Social links" className="border-t border-white/40 lg:border-t-0 lg:border-l">
          <ul>
            {socialLinks.map((link) => (
              <li key={link.label} className="border-b border-white/20 last:border-b-0">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[5.5rem_1fr_auto] items-center gap-3 py-3 font-mono text-xs uppercase tracking-[0.12em] sm:grid-cols-[7rem_1fr_auto] sm:text-sm"
                >
                  <span>{link.label}</span>
                  <span className="text-white/55 transition-colors group-hover:text-white">
                    {link.handle}
                  </span>
                  <span aria-hidden="true">&nearr;</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </main>
  );
}
