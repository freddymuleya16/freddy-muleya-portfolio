import { identity } from '@/content/profile';
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from '@/components/icons';

const channels = [
  { label: 'Email', value: identity.email, href: `mailto:${identity.email}`, Icon: MailIcon },
  { label: 'Phone', value: identity.phone, href: identity.phoneHref, Icon: null },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/freddymuleya16',
    href: identity.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    value: 'github.com/freddymuleya16',
    href: identity.github,
    Icon: GitHubIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-ink-rule bg-ink scroll-mt-16">
      <div className="mx-auto max-w-register px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="stamp text-cobalt-soft">Contact</p>
            <h2 className="mt-5 font-display text-display-lg font-700 text-bone">
              Hiring for a senior .NET role?
            </h2>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-bone/75">
              {identity.availability}. Email is the fastest way to reach me.
            </p>
            <a
              href={`mailto:${identity.email}`}
              className="group mt-8 inline-flex items-center gap-2.5 bg-cobalt px-5 py-3.5 font-display text-sm font-600 text-white transition-colors hover:bg-cobalt-deep"
            >
              <MailIcon className="h-4 w-4" />
              Email me
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="lg:col-span-6 lg:pt-1">
            <dl className="border-b border-ink-rule">
              {channels.map(({ label, value, href, Icon }) => (
                <div key={label} className="register-row flex items-baseline gap-6 py-4">
                  <dt className="stamp w-24 shrink-0 text-slate-ink">{label}</dt>
                  <dd>
                    <a
                      href={href}
                      {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="flex items-center gap-2.5 font-display text-base font-600 text-bone transition-colors hover:text-cobalt-soft"
                    >
                      {Icon ? <Icon className="h-4 w-4 shrink-0" /> : null}
                      {value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
