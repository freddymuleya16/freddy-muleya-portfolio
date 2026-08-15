import { identity, positioning, systems } from '@/content/profile';
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from '@/components/icons';

const thesis = ['Meals to every ward.', 'Linen to every clinic.', 'Case files from incident to release.'];

export function Hero() {
  return (
    <section id="top" className="border-b border-ink-rule">
      <div className="mx-auto max-w-register px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20">
        <p
          className="stamp animate-stamp-in text-cobalt-soft"
          style={{ animationDelay: '0ms' }}
        >
          Western Cape Government · Systems in service
        </p>

        <h1 className="mt-6 max-w-5xl font-display text-display-xl font-800 text-bone sm:mt-8">
          {thesis.map((line, i) => (
            <span
              key={line}
              className="block animate-stamp-in"
              style={{ animationDelay: `${90 + i * 110}ms` }}
            >
              {line}
            </span>
          ))}
        </h1>

        {/* The register: what is running, for whom, in what role. */}
        <div className="mt-12 sm:mt-16">
          <p
            className="stamp animate-stamp-in text-slate-ink"
            style={{ animationDelay: '430ms' }}
          >
            Five systems · Western Cape Government
          </p>
          <ul className="mt-4 border-b border-ink-rule">
            {systems.map((system, i) => (
              <li
                key={system.slug}
                className="register-row animate-stamp-in"
                style={{ animationDelay: `${500 + i * 70}ms` }}
              >
                <a
                  href={`#${system.slug}`}
                  className="group flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:gap-6 sm:py-4"
                >
                  <span className="font-display text-base font-600 text-bone transition-colors group-hover:text-cobalt-soft sm:flex-1 sm:text-lg">
                    {system.name}
                  </span>
                  <span className="stamp text-slate-ink sm:w-56 sm:shrink-0">
                    {system.shortDepartment}
                  </span>
                  <span className="stamp hidden text-slate-ink sm:block sm:w-52 sm:shrink-0">
                    {system.shortRole}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Attribution: the work leads, the person signs it. */}
        <div
          className="mt-14 flex animate-stamp-in flex-col gap-8 sm:mt-20 lg:flex-row lg:items-end lg:justify-between"
          style={{ animationDelay: '980ms' }}
        >
          <div className="max-w-prose">
            <h2 className="font-display text-display-md font-700 text-bone">
              {identity.name}
            </h2>
            <p className="stamp-lg mt-2 text-cobalt-soft">
              {identity.role} ({identity.specialism}) · {identity.location}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-bone/80">{positioning}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${identity.email}`}
              className="group inline-flex items-center gap-2.5 bg-cobalt px-5 py-3.5 font-display text-sm font-600 text-white transition-colors hover:bg-cobalt-deep"
            >
              <MailIcon className="h-4 w-4" />
              Email me
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 border border-ink-rule px-5 py-3.5 font-display text-sm font-600 text-bone transition-colors hover:border-cobalt hover:text-cobalt-soft"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={identity.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 border border-ink-rule px-5 py-3.5 font-display text-sm font-600 text-bone transition-colors hover:border-cobalt hover:text-cobalt-soft"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
