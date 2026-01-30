import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Site configuration - easy to edit placeholders
export const siteConfig = {
  name: 'Cornerstone Bookkeeping of Philadelphia',
  tagline: 'Reliable bookkeeping for growing businesses.',
  positioningStatement: 'We provide dependable bookkeeping for Philadelphia-area small businesses with a focus on accuracy, clarity, and customer care. Clean books, simple reporting, and quick communication—every month.',
  serviceArea: 'Serving Philadelphia and nearby suburbs.',
  contact: {
    email: 'hello@cornerstonebookkeepingphl.com',
    phone: '(215) 555-0123',
    address: 'Philadelphia, PA',
    calendlyUrl: 'https://calendly.com/your-link',
  },
  social: {
    // Add social links here when ready
  },
}
