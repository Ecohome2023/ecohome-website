# Eco Home Heating & Cooling website

Next.js site for ecohometoday.com, hosted on Vercel.

## Where things live
- `src/lib/site.ts` - phone, address, hours, license, rating, cities, FAQs. Change a detail here and it updates everywhere (header, footer, schema).
- `src/app/page.tsx` - homepage sections.
- `public/images`, `public/video` - photos and the ductwork clip.

## Booking
Every "Book" button goes to the Housecall Pro booking link in `src/lib/site.ts`.

## Run locally
npm install
npm run dev
