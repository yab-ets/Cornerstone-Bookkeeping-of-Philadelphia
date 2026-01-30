import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/ContactForm'
import { siteConfig } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Cornerstone Bookkeeping of Philadelphia. Schedule a free consultation or send us a message.',
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: siteConfig.contact.address,
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-white py-16 md:py-24">
        <div className="container-default">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary-navy sm:text-5xl">
              Let&apos;s Talk
            </h1>
            <p className="mt-6 text-lg text-text-muted">
              Ready to get your books in order? Have questions about our services? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-2">
                  Send Us a Message
                </h2>
                <p className="text-text-muted mb-8">
                  Fill out the form below and we&apos;ll get back to you within one business day.
                </p>
                <ContactForm />
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quick Contact */}
              <Card className="p-8">
                <h2 className="text-xl font-bold text-primary-navy mb-6">
                  Contact Information
                </h2>
                <ul className="space-y-5">
                  {contactInfo.map((item) => (
                    <li key={item.label}>
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue flex-shrink-0">
                          <item.icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-sm text-text-muted">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-primary-navy font-medium hover:text-primary-blue transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-primary-navy font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Schedule Call CTA */}
              <Card className="p-8 bg-primary-navy text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white mb-4">
                  <Calendar className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-white">
                  Prefer to Talk?
                </h2>
                <p className="mt-2 text-slate-300">
                  Schedule a free 15-minute consultation. No pressure, just a friendly conversation about your bookkeeping needs.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 w-full bg-white text-primary-navy hover:bg-slate-100"
                >
                  <Link href={siteConfig.contact.calendlyUrl} target="_blank" rel="noopener noreferrer">
                    Book a Free Call
                  </Link>
                </Button>
              </Card>

              {/* Response Time */}
              <div className="flex items-start gap-4 p-6 bg-background rounded-2xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green flex-shrink-0">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-navy">Quick Response</h3>
                  <p className="text-sm text-text-muted mt-1">
                    We typically respond within a few hours during business hours—often sooner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Note */}
      <section className="py-12 bg-background">
        <div className="container-default">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-text-muted">
              <span className="font-medium text-primary-navy">Service Area:</span> We serve small businesses in Philadelphia and nearby suburbs throughout Pennsylvania. All services are provided remotely, so we can work together seamlessly regardless of your exact location.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
