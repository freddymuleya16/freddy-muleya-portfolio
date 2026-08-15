import Image from 'next/image';

import { bio, credentials, facts, identity } from '@/content/profile';

export function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto max-w-register px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="stamp text-cobalt-on-bone">About</p>
            <h2 className="mt-5 font-display text-display-lg font-700 text-ink">
              Five years, one stack, real consequences.
            </h2>
            {bio.map((paragraph) => (
              <p key={paragraph} className="mt-5 max-w-prose text-lg leading-relaxed text-ink/80">
                {paragraph}
              </p>
            ))}

            <dl className="mt-12 border-b border-bone-rule">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="register-row grid gap-1 py-4 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <dt className="stamp text-slate-bone sm:col-span-4">{fact.label}</dt>
                  <dd className="sm:col-span-8">
                    <span className="font-display text-lg font-600 text-ink">{fact.value}</span>
                    <span className="ml-3 text-slate-bone">{fact.note}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden bg-ink">
              <Image
                src="/img/freddy.png"
                alt={`${identity.name}, ${identity.role}`}
                fill
                sizes="(max-width: 1024px) 100vw, 24rem"
                className="object-cover object-top grayscale"
                priority={false}
              />
            </div>

            <dl className="mt-10 max-w-sm">
              {credentials.map((item) => (
                <div key={item.label} className="border-t border-bone-rule py-5">
                  <dt className="stamp text-slate-bone">{item.label}</dt>
                  <dd className="mt-2">
                    <span className="block font-display text-base font-600 text-ink">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-slate-bone">{item.body}</span>
                  </dd>
                </div>
              ))}
              <div className="border-t border-bone-rule py-5">
                <dt className="stamp text-slate-bone">Availability</dt>
                <dd className="mt-2 text-ink">{identity.availability}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
