# Eco Home Heating & Cooling website

Next.js site for ecohometoday.com, hosted on Vercel.

## Where things live
- `src/lib/site.ts` - phone, address, hours, license, rating, cities, FAQs. Change a detail here and it updates everywhere (header, footer, schema).
- `src/app/page.tsx` - homepage sections.
- `public/images`, `public/video` - photos and the ductwork clip.

## Connections (set in Vercel > Project > Settings > Environment Variables)
- `NEXT_PUBLIC_BOOKING_URL` - Housecall Pro booking link used by every "Book service" button.
- `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` and `NEXT_PUBLIC_HUBSPOT_FORM_ID` - the HubSpot form that receives the estimate form. The HubSpot form needs these fields: firstname, lastname, phone, email, address, message.

## Run locally
npm install
npm run dev
