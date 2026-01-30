import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, RefreshCw, Receipt, Check, X, ArrowRight, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { siteConfig } from '@/lib/utils'
import { ContactCTA, Security } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Professional bookkeeping services for Philadelphia-area small businesses. Monthly bookkeeping, cleanup & catch-up, and invoicing support.',
}

const coreServices = [
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
]

const addOnService = {
  icon: Receipt,
  title: 'Invoicing & A/R Tracking',
  description: 'Help managing your invoicing workflow and tracking what\'s owed to you. Available as an add-on to Monthly Bookkeeping.',
  included: [
    'Set up or optimize your invoice templates',
    'Track outstanding invoices in your accounting software',
    'Provide a monthly A/R aging summary',
    'Flag overdue invoices for your follow-up',
  ],
  notIncluded: [
    'We don\'t collect payments on your behalf',
    'We don\'t make collection calls',
    'We don\'t handle disputes with customers',
  ],
  idealFor: 'Businesses that invoice clients and want help staying organized.',
}

const notIncluded = [
  'Tax preparation or filing',
  'Tax advice or tax planning',
  'Payroll processing',
  'Financial advising or investment guidance',
  'Legal or compliance advice',
]

const servicesFaqs = [
  {
    question: 'How long does cleanup take?',
    answer: 'It depends on how far behind you are and the complexity of your transactions. Most cleanups take 2-4 weeks. During our initial call, we\'ll review your situation and give you a realistic timeline.',
  },
  {
    question: 'Do I need to use QuickBooks Online?',
    answer: 'We work primarily with QuickBooks Online because it\'s reliable, widely supported, and makes collaboration with your CPA easy. If you\'re on a different platform, let us know—we can often accommodate Xero and discuss other options.',
  },
  {
    question: 'What if I have questions during the month?',
    answer: 'Just reach out! Email is best for most questions, and we typically respond the same day. For anything urgent or complex, we\'re happy to hop on a quick call.',
  },
  {
    question: 'Can I start with cleanup and then switch to monthly?',
    answer: 'Yes, that\'s a common path. Many clients come to us needing a cleanup first, then transition to monthly bookkeeping once we\'ve got everything organized.',
  },
  {
    question: 'What\'s the difference between bookkeeping and accounting?',
    answer: 'Bookkeeping is the day-to-day recording of financial transactions—categorizing expenses, reconciling accounts, and producing reports. Accounting includes higher-level analysis, tax strategy, and financial planning. We focus on bookkeeping; your CPA handles the rest.',
  },
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

      {/* Core Services Section */}
      <section className="section-padding bg-white" aria-labelledby="core-services-heading">
        <div className="container-default">
          <h2 id="core-services-heading" className="text-2xl font-bold text-primary-navy mb-8">
            Core Services
          </h2>
          <div className="space-y-12">
            {coreServices.map((service) => (
              <Card
                key={service.title}
                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                className="overflow-hidden scroll-mt-24"
              >
                <div className="md:flex">
                  {/* Service Info */}
                  <div className="md:w-1/2 p-8 md:p-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                      <service.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-2xl font-bold text-primary-navy">
                      {service.title}
                    </h3>
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
                    <h4 className="text-lg font-semibold text-primary-navy mb-4">
                      What&apos;s Included
                    </h4>
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
            ))}
          </div>
        </div>
      </section>

      {/* Optional Add-On Section */}
      <section className="section-padding bg-background" aria-labelledby="addon-heading">
        <div className="container-default">
          <h2 id="addon-heading" className="text-2xl font-bold text-primary-navy mb-8">
            Optional Add-On
          </h2>
          <Card
            id="invoicing-ar-tracking"
            className="overflow-hidden scroll-mt-24"
          >
            <div className="lg:flex">
              {/* Service Info */}
              <div className="lg:w-1/2 p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
                    <addOnService.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent-green/10 text-accent-green">
                    Add-on to Monthly Bookkeeping
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-primary-navy">
                  {addOnService.title}
                </h3>
                <p className="mt-3 text-text-muted">
                  {addOnService.description}
                </p>
                <div className="mt-6 p-4 bg-white rounded-xl">
                  <p className="text-sm font-medium text-primary-navy">
                    Ideal for:
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    {addOnService.idealFor}
                  </p>
                </div>
              </div>

              {/* What's Included / Not Included */}
              <div className="lg:w-1/2 p-8 md:p-10 bg-white">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-primary-navy mb-4">
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-3">
                      {addOnService.included.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-accent-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-border">
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                      Please Note
                    </h4>
                    <ul className="space-y-2">
                      {addOnService.notIncluded.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-text-muted flex-shrink-0 mt-2" aria-hidden="true" />
                          <span className="text-text-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* What We Don't Do Section */}
      <section className="section-padding bg-white" aria-labelledby="not-included-heading">
        <div className="container-default">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-10">
              <h2 id="not-included-heading" className="text-2xl font-bold text-primary-navy text-center">
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
              <div className="mt-8 p-4 bg-primary-blue/5 rounded-xl flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary-blue flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-text-muted">
                  <span className="font-medium text-primary-navy">Working with a CPA?</span> We collaborate seamlessly with your tax preparer to ensure your books are accurate and tax-ready. We&apos;ll provide any reports or documentation they need.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <Security />

      {/* Pricing Preview */}
      <section className="section-padding bg-background" aria-labelledby="pricing-heading">
        <div className="container-default">
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="pricing-heading" className="text-3xl font-bold text-primary-navy">
              Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              We offer straightforward monthly pricing with no hidden fees. Your rate depends on your business size and transaction volume.
            </p>
            <div className="mt-8 p-8 bg-white rounded-2xl border border-border shadow-card">
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

      {/* Services FAQ */}
      <section className="section-padding bg-white" aria-labelledby="services-faq-heading">
        <div className="container-default">
          <div className="text-center max-w-2xl mx-auto">
            <h2 id="services-faq-heading" className="text-3xl font-bold text-primary-navy">
              Common Questions
            </h2>
            <p className="mt-4 text-text-muted">
              More questions about how our services work.
            </p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Accordion type="single">
              {servicesFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`services-faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
