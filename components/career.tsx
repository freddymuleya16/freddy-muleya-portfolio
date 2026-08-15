import { career } from '@/content/profile';

export function Career() {
  return (
    <section id="career" className="scroll-mt-16">
      <div className="mx-auto max-w-register px-5 py-16 sm:px-8 sm:py-24">
        <header className="max-w-prose">
          <p className="stamp text-cobalt-on-bone">Career</p>
          <h2 className="mt-5 font-display text-display-lg font-700 text-ink">
            April 2021 to now.
          </h2>
        </header>

        <ol className="mt-14 border-b border-bone-rule sm:mt-20">
          {career.map((post) => (
            <li key={post.employer} className="register-row">
              <div className="grid gap-3 py-8 sm:py-10 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-3">
                  <p className="stamp text-slate-bone">{post.period}</p>
                  {post.current ? (
                    <p className="stamp mt-2 inline-flex items-center gap-2 text-cobalt-on-bone">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-cobalt-on-bone" />
                      Current
                    </p>
                  ) : null}
                </div>

                <div className="lg:col-span-9">
                  <h3 className="font-display text-entry font-700 text-ink">{post.title}</h3>
                  <p className="stamp mt-2 text-slate-bone">
                    {post.employer} · {post.place}
                  </p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-ink/75">{post.detail}</p>
                  {post.note ? (
                    <p className="mt-4 border-l-2 border-cobalt-on-bone pl-4 text-ink/75">
                      {post.note}
                    </p>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
