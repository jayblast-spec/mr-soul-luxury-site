# Mr Soul Bistro & RedRoom VIP

Premium mobile-first Next.js site for Mr Soul Bistro & Cafe / RedRoom By Mr Soul.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS theme tokens
- Framer Motion 3D/parallax cards
- Lenis smooth scroll
- Sanity client and schema stubs
- Rule-based SoulBot fallback
- Google Maps iframe embed

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Vercel Deployment

1. Push this project to GitHub.
2. Import the repo in Vercel.
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET=production`
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` if replacing the iframe with `@react-google-maps/api`
4. Deploy.
5. Verify the deployed URL loads, the menu filters work, RedRoom form renders, and the FAQ accordion opens.

## CMS Schemas

Schema stubs live in `src/sanity/schemas`:

- `menuItem`: name, description, price, category, image, isPopular, isSpicy
- `faq`: question, answer
- `hero`: title, subtitle, ctaText, ctaLink, backgroundImage
- `testimonial`: name, text, rating, avatar

## Next Production Steps

- Replace placeholder photography with real restaurant, food, and RedRoom imagery.
- Replace placeholder phone/email with verified business contact details.
- Connect forms to email, CRM, Supabase, or a booking provider.
- Connect Sanity Studio for live menu and FAQ editing.
- Add analytics events for menu clicks, RedRoom booking intent, and contact submissions.
