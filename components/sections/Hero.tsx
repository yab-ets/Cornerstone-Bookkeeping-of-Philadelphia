import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/utils'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-background to-white" aria-labelledby="hero-heading">
      <div className="container-default py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">
          {/* Service Area Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-blue/10 px-4 py-1.5 text-sm font-medium text-primary-blue mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green"></span>
            </span>
            {siteConfig.serviceArea}
          </div>

          {/* Main Headline */}
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight text-primary-navy sm:text-5xl md:text-6xl">
            {siteConfig.tagline}
          </h1>

          {/* Positioning Statement */}
          <p className="mt-6 text-lg text-text-muted md:text-xl max-w-2xl mx-auto text-balance">
            {siteConfig.positioningStatement}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href={siteConfig.contact.calendlyUrl} target="_blank" rel="noopener noreferrer">
                Book a Free Call
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  )
}
