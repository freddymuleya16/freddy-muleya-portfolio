# freddy-muleya-portfolio

Personal site for Freddy Muleya — Senior Software Engineer (.NET).

Live: https://freddymuleya.vercel.app

## Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS. Deployed on Vercel.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Node 20.9 or newer. The version is pinned in `package.json` `engines` and `.nvmrc` — leaving it
unpinned is what silently froze the previous version of this site on a 2021 build for three years.

## Editing content

Every factual claim on the site lives in **`content/profile.ts`**. Components read from it and
contain no hard-coded copy beyond section headings. To change a job, a system, the bio or the
stack, edit that one file.

Two conventions in there worth keeping:

- **Nothing unverified.** If a number or a date isn't confirmed, it doesn't go in.
- **Status stamps are optional.** A system carries `status: 'In production'` or `'In pilot'` only
  where the delivery stage is actually known. A blank status renders as nothing, which is correct —
  an assumed one is not.

## Structure

```
app/          layout (fonts, metadata), page, global styles
components/   one component per section, plus icons
content/      profile.ts — the single source of truth
```
