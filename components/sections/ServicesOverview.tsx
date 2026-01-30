import Link from 'next/link'
import { FileText, RefreshCw, Receipt, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: FileText,
    title: 'Monthly Bookkeeping',
    description: 'Ongoing bookkeeping support to keep your finances organized and accurate, every month.',
    features: [
      'Bank & credit card reconciliations',
      'Transaction categorization',
      'Monthly P&L and Balance Sheet',
      'Plain-English summary included',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Cleanup & Catch-Up',
    description: 'Behind on your books? We\'ll clean up the mess and get you back on track.',
    features: [
      'Catch up past months',
      'Fix miscategorized transactions',
      'Bring books to tax-ready status',
      'Clear starting point going forward',
    ],
  },
  {
    icon: Receipt,
    title: 'Invoicing & A/R Tracking',
    description: 'Optional add-on to streamline your invoicing workflow and track payments.',
    features: [
      'Invoice workflow setup',
      'Track unpaid invoices',
      'Basic follow-up system',
      'Payment status visibility',
    ],
    isAddOn: true,
  },
]

export function ServicesOverview() {
  return (
    <section id="services" className="section-padding bg-background" aria-labelledby="services-heading">
      <div className="container-default">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="services-heading" className="text-3xl font-bold text-primary-navy sm:text-4xl">
            Bookkeeping Services That Fit Your Business
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Whether you need ongoing monthly support or help catching up, we have you covered.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue mb-4">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle className="flex items-center gap-2">
                  {service.title}
                  {service.isAddOn && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent-green/10 text-accent-green">
                      Add-on
                    </span>
                  )}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-blue" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/services" className="inline-flex items-center gap-2">
              Learn More About Our Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
