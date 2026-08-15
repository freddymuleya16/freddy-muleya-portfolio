import { systems } from '@/content/profile';
import { SystemGlyph } from '@/components/icons';

function Status({ value }: { value: 'In production' | 'In pilot' }) {
  const live = value === 'In production';
  return (
    <span className="stamp inline-flex items-center gap-2 text-slate-ink">
      <span
        aria-hidden
        className={
          live
            ? 'h-1.5 w-1.5 rounded-full bg-cobalt'
            : 'h-1.5 w-1.5 rounded-full border border-cobalt'
        }
      />
      {value}
    </span>
  );
}

export function Systems() {
  return (
    <section id="systems" className="border-b border-ink-rule scroll-mt-16">
      <div className="mx-auto max-w-register px-5 py-16 sm:px-8 sm:py-24">
        <header className="max-w-prose">
          <p className="stamp text-cobalt-soft">The work</p>
          <h2 className="mt-5 font-display text-display-lg font-700 text-bone">
            Systems, not side projects.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-bone/75">
            These run inside government. There are no screenshots and no public links —
            they handle patient, forensic and child-safeguarding data. What follows is the
            record.
          </p>
        </header>

        <ol className="mt-14 border-b border-ink-rule sm:mt-20">
          {systems.map((system) => (
            <li key={system.slug} id={system.slug} className="register-row scroll-mt-16">
              <article className="grid gap-6 py-10 sm:py-14 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <SystemGlyph
                    name={system.icon}
                    className="h-9 w-9 text-cobalt-soft"
                  />
                  <h3 className="mt-5 font-display text-entry font-700 text-bone">
                    {system.name}
                  </h3>
                  <p className="stamp mt-3 text-slate-ink">{system.department}</p>
                  <p className="stamp mt-1 text-slate-ink">{system.jurisdiction}</p>
                </div>

                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    <span className="stamp text-cobalt-soft">{system.role}</span>
                    {system.status ? <Status value={system.status} /> : null}
                  </div>

                  <p className="mt-5 font-display text-lg font-500 leading-snug text-bone sm:text-xl">
                    {system.summary}
                  </p>

                  <p className="mt-4 max-w-2xl leading-relaxed text-bone/70">
                    {system.detail}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {system.stack.map((tech) => (
                      <li
                        key={tech}
                        className="stamp border border-ink-rule px-2.5 py-1.5 text-slate-ink"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
