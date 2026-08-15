import { identity } from '@/content/profile';

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-rule bg-ink">
      <div className="mx-auto flex max-w-register flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="stamp text-slate-ink">
          {identity.name} · {identity.location}
        </p>
        <p className="stamp text-slate-ink">
          Built with Next.js · Source on{' '}
          <a
            href="https://github.com/freddymuleya16/freddy-muleya-portfolio"
            target="_blank"
            rel="noreferrer"
            className="text-bone transition-colors hover:text-cobalt-soft"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
