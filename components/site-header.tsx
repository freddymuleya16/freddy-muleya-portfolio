import { identity } from '@/content/profile';

const nav = [
  { href: '#systems', label: 'Systems', always: true },
  { href: '#about', label: 'About', always: false },
  { href: '#career', label: 'Career', always: false },
  { href: '#stack', label: 'Stack', always: false },
  { href: '#contact', label: 'Contact', always: true },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-rule bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-register items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#top" className="stamp text-bone transition-colors hover:text-cobalt-soft">
          {identity.name}
        </a>
        <nav aria-label="Sections">
          <ul className="flex items-center gap-5 sm:gap-7">
            {nav.map((item) => (
              <li key={item.href} className={item.always ? '' : 'hidden sm:block'}>
                <a
                  href={item.href}
                  className="stamp text-slate-ink transition-colors hover:text-bone"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
