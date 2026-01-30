# Cornerstone Bookkeeping of Philadelphia

A professional, production-ready website for Cornerstone Bookkeeping of Philadelphia built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Features

- Responsive, mobile-first design
- Accessible (semantic HTML, ARIA labels, good contrast)
- SEO optimized (metadata, OpenGraph)
- Sticky navigation with smooth scrolling
- Contact form with API route
- Clean, professional design with trust-building colors

## Pages

- **Home** (`/`) - Hero, trust strip, services overview, how it works, team, FAQ, contact CTA
- **Services** (`/services`) - Detailed service breakdown with pricing preview
- **About** (`/about`) - Brand story, team roles, core values
- **Contact** (`/contact`) - Contact form and direct contact information

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cornerstone-bookkeeping.git
   cd cornerstone-bookkeeping
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Configuration

### Editable Placeholders

All contact information and business details are centralized in `lib/utils.ts`:

```typescript
export const siteConfig = {
  name: 'Cornerstone Bookkeeping of Philadelphia',
  tagline: 'Reliable bookkeeping for growing businesses.',
  positioningStatement: '...',
  serviceArea: 'Serving Philadelphia and nearby suburbs.',
  contact: {
    email: 'hello@cornerstonebookkeepingphl.com',  // Update this
    phone: '(215) 555-0123',                        // Update this
    address: 'Philadelphia, PA',
    calendlyUrl: 'https://calendly.com/your-link', // Update this
  },
}
```

### Contact Form Setup

The contact form currently logs submissions to the console. For production, you have several options:

#### Option 1: Formspree (Recommended)
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your form ID
3. Update `app/api/contact/route.ts` with the Formspree endpoint

#### Option 2: Email Service (SendGrid, Resend, etc.)
1. Install the email service SDK
2. Configure API keys as environment variables
3. Update the API route to send emails

## Deployment to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/cornerstone-bookkeeping)

### Manual Deployment

1. Push your code to GitHub

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project" and import your repository

4. Vercel will automatically detect Next.js and configure the build settings

5. Click "Deploy"

Your site will be live at `your-project.vercel.app`. You can then add a custom domain in the Vercel dashboard.

### Environment Variables (if needed)

If you add email sending functionality, add these in Vercel:

- `SENDGRID_API_KEY` (if using SendGrid)
- `RESEND_API_KEY` (if using Resend)
- `CONTACT_EMAIL` (where to receive form submissions)

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/
│   ├── sections/               # Page sections (Hero, FAQ, etc.)
│   ├── ui/                     # Reusable UI components
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── Header.tsx
├── lib/
│   └── utils.ts                # Utilities and site config
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
└── package.json
```

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | `#0B1F3B` | Primary text, headings |
| Blue | `#1E5EFF` | Primary buttons, links |
| Green | `#22C55E` | Accent, success states |
| Background | `#F8FAFC` | Page background |
| Surface | `#FFFFFF` | Cards, surfaces |
| Text Primary | `#0F172A` | Body text |
| Text Muted | `#475569` | Secondary text |
| Border | `#E2E8F0` | Borders, dividers |

## License

MIT License - feel free to use this template for your own projects.
