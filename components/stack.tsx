import { stack } from '@/content/profile';

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-16">
      <div className="mx-auto max-w-register px-5 py-16 sm:px-8 sm:py-24">
        <header className="max-w-prose">
          <p className="stamp text-cobalt-on-bone">Stack</p>
          <h2 className="mt-5 font-display text-display-lg font-700 text-ink">
            What I build with.
          </h2>
        </header>

        <dl className="mt-14 border-b border-bone-rule sm:mt-20">
          {stack.map((group) => (
            <div
              key={group.group}
              className="register-row grid gap-4 py-7 lg:grid-cols-12 lg:gap-10"
            >
              <dt className="stamp text-slate-bone lg:col-span-3">{group.group}</dt>
              <dd className="lg:col-span-9">
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border border-bone-rule px-3 py-1.5 font-mono text-xs text-ink/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
