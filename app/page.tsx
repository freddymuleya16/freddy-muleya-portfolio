import { About } from '@/components/about';
import { Career } from '@/components/career';
import { Contact } from '@/components/contact';
import { EarlierWork } from '@/components/earlier-work';
import { Hero } from '@/components/hero';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Stack } from '@/components/stack';
import { Systems } from '@/components/systems';
import { identity, positioning } from '@/content/profile';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: identity.name,
  jobTitle: `${identity.role} (${identity.specialism})`,
  description: positioning,
  email: `mailto:${identity.email}`,
  telephone: identity.phone,
  address: { '@type': 'PostalAddress', addressLocality: 'Johannesburg', addressCountry: 'ZA' },
  sameAs: [identity.linkedin, identity.github],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Limpopo' },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Systems />
        {/* Paper ground: the pages of the file. */}
        <div className="on-bone bg-bone text-ink">
          <About />
          <Career />
          <Stack />
          <EarlierWork />
        </div>
        <Contact />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
