# nkitch.com

Personal site and portfolio of Nathan Kitching

**Live:** [nkitch.com](https://nkitch.com)

## Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- Deployment: static export served by Nginx on a VPS

## Running locally

Requires Node.js 24 (pinned in `.node-version`) and npm.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the development server with hot reload |
| `npm run build` | Creates a production build |
| `npm run lint` | Runs ESLint |

## Structure

```
src/
├── app/          # Routes: each folder with a page.tsx is a URL
├── components/   # Shared components (header, footer, cards)
└── data/         # Site content as typed data (services)
```

## Licence

The **code** in this repository is released under the [MIT Licence](LICENSE).

The **content** (written copy, case studies and blog posts) is © Nathan Kitching, all rights reserved, and may not be reused without permission.