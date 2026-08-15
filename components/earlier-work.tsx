import { earlierWork } from '@/content/profile';

export function EarlierWork() {
  return (
    <section id="earlier" className="scroll-mt-16">
      <div className="mx-auto max-w-register px-5 pb-20 pt-4 sm:px-8 sm:pb-28">
        <header className="max-w-prose">
          <p className="stamp text-cobalt-on-bone">Earlier work</p>
          <h2 className="mt-5 font-display text-display-md font-700 text-ink">
            UK fintech and insurtech, 2022.
          </h2>
          <p className="mt-4 text-slate-bone">
            Client delivery from Cape Town for London-based financial services firms.
          </p>
        </header>

        <ul className="mt-10 grid gap-px border border-bone-rule bg-bone-rule sm:grid-cols-3">
          {earlierWork.map((project) => (
            <li key={project.name} className="bg-bone p-6 sm:p-7">
              <h3 className="font-display text-lg font-700 text-ink">{project.name}</h3>
              <p className="stamp mt-2 text-slate-bone">{project.context}</p>
              <p className="mt-4 leading-relaxed text-ink/75">{project.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
