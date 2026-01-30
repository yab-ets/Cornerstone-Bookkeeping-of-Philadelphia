import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/utils'
import { Calendar, Mail } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="section-padding bg-primary-navy" aria-labelledby="cta-heading">
      <div className="container-default">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Get Your Books in Order?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Let&apos;s talk about your bookkeeping needs. Schedule a free consultation and we&apos;ll discuss how we can help your business thrive.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary-navy hover:bg-slate-100"
            >
              <Link
                href={siteConfig.contact.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />
                Book a Free Call
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                <Mail className="h-5 w-5" aria-hidden="true" />
                Send a Message
              </Link>
            </Button>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            {siteConfig.serviceArea}
          </p>
        </div>
      </div>
    </section>
  )
}
