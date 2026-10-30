# Project structure notes

- Only the root `app/` folder is used (Next.js ignores `src/app` when a root `app/` exists). The old `src/` folder was removed.
- Components live in `app/component/`. The contact form is `app/component/Contact/contact.tsx` (uses EmailJS).
- `app/api/contact/route.ts` (Resend) exists but the form does not call it yet.
- Setup: `npm install`, then `cp .env.local.example .env.local` and fill in EmailJS values, then `npm run dev`.
