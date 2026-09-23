# Prime Specs Website

A production-oriented, responsive marketing website for **Prime Specs**, an optometrist and eyewear retailer serving Rustenburg, North West, South Africa.

## Technology

| Item | Detail |
| --- | --- |
| Framework | React 19.2 with Vite 7.1 |
| Language | TypeScript 5.6 |
| Styling | Tailwind CSS 4 plus project-specific CSS design tokens |
| Routing | Wouter 3.3 |
| Icons | Lucide React |
| Runtime | Node.js 22 recommended |
| Package manager | pnpm 10 |

## Commands

```bash
pnpm install
pnpm dev       # local development server
pnpm check     # TypeScript validation
pnpm build     # production build
pnpm start     # serve the production bundle
```

The production build is written to `dist/`.

## Routes

- `/`
- `/eye-care`
- `/eyewear`
- `/medical-aids`
- `/about`
- `/locations`
- `/contact`

## Environment variables

The static site does not require application secrets. The scaffold optionally reads:

- `VITE_ANALYTICS_ENDPOINT`
- `VITE_ANALYTICS_WEBSITE_ID`

No secrets are committed.

## Asset status

The uploaded brief referenced a Windows asset library that was not accessible in this environment. Only `ReferenceWebsite.jpg` and the written brief were supplied. In accordance with the brief, the site does **not** fabricate people, staff, branches, products or clinical scenes.

Reusable `EditorialVisual` components currently provide polished, neutral visual slots. Their accessible labels state the required authentic photograph category. Replace them with approved Prime Specs media after uploading:

| Required asset | Suggested source filename pattern | Intended placement |
| --- | --- | --- |
| Transparent full-colour logo | `LogoTransparent.png` | Header and footer |
| Monochrome logo variants | `LogoTransparentBlackAndWhite.png`, `LogoBlackAndWhite.png` | Dark and photographic surfaces if needed |
| Hero image | Strongest approved Prime Specs photograph | Homepage hero |
| Clinical imagery | `prime-specs-eye-exam-*`, `prime-specs-ophthalmic-*`, `prime-specs-optical-*` | Home and Eye Care |
| Eyewear imagery | `prime-specs-eyewear-*` | Home and Eyewear |
| Team imagery | `prime-specs-team-*` | About |
| Community imagery | `prime-specs-community-*` | Home and About |
| Kopano branch imagery | `prime-specs-kopano-*` | Locations |
| Exterior imagery | `prime-specs-street-facing-*` | Locations |
| Interior imagery | `prime-specs-store-*` | Locations and supporting sections |

For Manus WebDev deployment, upload large media with `manus-upload-file --webdev` and use the returned `/manus-storage/...` paths. For an independent GitHub/Vercel deployment, place optimized assets in the hosting/CDN solution selected by the maintainer and update the component props or replace `EditorialVisual` instances with responsive image components.

## Verified business information used

- Primary telephone: `014 597 3537`
- WhatsApp: `071 990 2234`
- Primary location: Corner Thabo Mbeki & Oliver Tambo Drive, Rustenburg, 2999
- Kopano Mall location: Shop No. 06, Fatima Bhayat Street, Rustenburg
- Kopano Mall practice number: `7030916`
- Kopano Mall telephone: `014 065 0880`
- Confirmed services: eye examinations, prescription spectacles, frames and sunglasses
- Medical-aid wording: Prime Specs accepts most medical aids; visitors are asked to confirm their scheme and available optical benefits before visiting

## Outstanding client confirmations

1. Upload and approve the official transparent logo files.
2. Upload and approve the curated Prime Specs photography library.
3. Confirm operating hours for both branches.
4. Confirm the complete medical-aid participation list and supply official logos where licensed.
5. Confirm the complete frame-brand list, lens categories, prices and any promotion terms before publishing them.
6. Review all final image crops and alt text after photographs are inserted.

## SEO and accessibility

The site includes route-specific titles and descriptions, canonical URLs, Open Graph and Twitter metadata, local-business structured data, a sitemap, robots configuration, semantic headings, keyboard-operable navigation, visible focus states, reduced-motion support and mobile-sized touch targets.

## Recommended next engineering steps

1. Replace all neutral `EditorialVisual` slots with approved responsive image assets.
2. Replace the typographic fallback mark with the supplied official transparent logo.
3. Validate the final production domain and social preview after deployment.
4. Run Lighthouse and a final keyboard/screen-reader pass after real imagery is loaded.
5. Create the GitHub repository at `https://github.com/Ndumiso-Y/prime-specs-web` and push this directory when the repository is available.
