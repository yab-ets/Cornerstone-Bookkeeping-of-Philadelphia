import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, RefreshCw, Receipt, Check, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { siteConfig } from '@/lib/utils'
import { ContactCTA } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional bookkeeping services for Philadelphia-area small businesses. Monthly bookkeeping, cleanup & catch-up, and invoicing support.',
}

const services = [
  {
    icon: FileText,
    title: 'Monthly Bookkeeping',
    description: 'Ongoing bookkeeping support to keep your finances organized and accurate. We handle the details so you can focus on running your business.',
    included: [
      'Bank account reconciliations',
      'Credit card reconciliations',
      'Transaction categorization',
      'Monthly Profit & Loss statement',
      'Monthly Balance Sheet',
      'Questions resolved via email or call',
      'Short monthly summary in plain English',
    ],
    idealFor: 'Businesses that want reliable, hands-off bookkeeping every month.',
  },
  {
    icon: RefreshCw,
    title: 'Cleanup & Catch-Up',
    description: 'Behind on your books? We\'ll clean up the mess, fix errors, and get everything back on track—whether you\'re a few months or a few years behind.',
    included: [
      'Review and categorize past transactions',
      'Fix miscategorized entries',
      'Reconcile all accounts',
      'Organize and document historical records',
      'Bring books to tax-ready status',
      'Provide clear starting point for ongoing bookkeeping',
    ],
    idealFor: 'Businesses that have fallen behind or inherited messy books.',
  },
  {
    icon: Receipt,
    title: 'Invoicing & A/R Tracking',
    description: 'An optional add-on to streamline your invoicing workflow and keep track of what\'s owed to you.',
    included: [
      'Invoice workflow setup and optimization',
      'Create and send invoices on your behalf',
      'Track unpaid invoices and payment status',
      'Basic follow-up system for overdue accounts',
      'Monthly A/R aging report',
    ],
    idealFor: 'Businesses that invoice clients and want help tracking receivables.',
    isAddOn: true,
  },
]

const notIncluded = [
  'Tax preparation or filing',
  'Tax advice or tax planning',
  'Payroll processing',
  'Financial advising or investment guidance',
  'Legal or compliance advice',
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-white py-16 md:py-24">
        <div className="container-default">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary-navy sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-text-muted">
              Clear, reliable bookkeeping services tailored to small businesses. We handle the numbers so you can focus on growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                className="scroll-mt-24"
              >
                <Card className="overflow-hidden">
                  <div className="md:flex">
                    {/* Service Info */}
                    <div className="md:w-1/2 p-8 md:p-10">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                          <service.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        {service.isAddOn && (
                          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent-green/10 text-accent-green">
                            Optional Add-on
                          </span>
                        )}
                      </div>
                      <h2 className="mt-4 text-2xl font-bold text-primary-navy">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-text-muted">
                        {service.description}
                      </p>
                      <div className="mt-6 p-4 bg-background rounded-xl">
                        <p className="text-sm font-medium text-primary-navy">
                          Ideal for:
                        </p>
                        <p className="mt-1 text-sm text-text-muted">
                          {service.idealFor}
                        </p>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="md:w-1/2 bg-background p-8 md:p-10">
                      <h3 className="text-lg font-semibold text-primary-navy mb-4">
                        What&apos;s Included
                      </h3>
                      <ul className="space-y-3">
                        {service.included.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-accent-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-text-muted">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do Section */}
      <section className="section-padding bg-background">
        <div className="container-default">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-10">
              <h2 className="text-2xl font-bold text-primary-navy text-center">
                What We Don&apos;t Do
              </h2>
              <p className="mt-4 text-text-muted text-center">
                We focus on bookkeeping—and we do it well. Here&apos;s what falls outside our scope:
              </p>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <X className="h-5 w-5 text-red-400 flex-shrink-0" aria-hidden="true" />
                    <span className="text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-primary-blue/5 rounded-xl">
                <p className="text-center text-text-muted">
                  <span className="font-medium text-primary-navy">Working with a CPA?</span> We collaborate seamlessly with your tax preparer to ensure your books are accurate and tax-ready.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-navy">
              Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              We offer straightforward monthly pricing with no hidden fees. Your rate depends on your business size and transaction volume.
            </p>
            <div className="mt-8 p-8 bg-background rounded-2xl">
              <p className="text-sm text-text-muted uppercase tracking-wider">Monthly Bookkeeping</p>
              <p className="mt-2 text-4xl font-bold text-primary-navy">Starting at $300<span className="text-lg font-normal text-text-muted">/month</span></p>
              <p className="mt-4 text-text-muted">
                Exact pricing based on your specific needs. Schedule a call for a custom quote.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href={siteConfig.contact.calendlyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  Get a Custom Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
