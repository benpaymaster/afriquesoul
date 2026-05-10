# Dunku - Wedding Singer Landing Page

A premium, Web3-adjacent landing page for Dunku's wedding singing business. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Hero Section**: Bold branding with video embed and smooth-scrolling CTA
- **Repertoire & Jukebox**: Interactive music player with tabbed song categories
- **Blog & Reviews**: Street updates and wedding song reviews with star ratings
- **Web3 Fan Zone**: NFT VIP Fan Pass showcase with OpenSea integration
- **Wedding Packages**: Three-tier pricing system (£350, £500, £950)
- **Booking Form**: Complete contact form with React state management
- **Responsive Design**: Mobile-optimized with premium dark theme with amber accents

## Getting Started

First, run the development server:

```bash
cd dunku-landing
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
afriquesoul/
├── dunku-landing/
│   ├── src/
│   │   └── app/
│   │       └── page.tsx    # Main landing page component
│   ├── public/             # Static assets
│   ├── tailwind.config.ts  # Tailwind CSS configuration
│   └── next.config.ts      # Next.js configuration
└── README.md               # This file
```

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel/Netlify

## Customization

The landing page is fully customizable:
- Update song lists in the `ceremonySongs`, `receptionSongs`, and `partySongs` arrays
- Modify pricing packages in the packages array
- Update blog posts in the `blogPosts` array
- Customize colors by modifying Tailwind CSS classes

## Deployment

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

© 2026 Dunku - Live Acoustic Music for Your Perfect Day
