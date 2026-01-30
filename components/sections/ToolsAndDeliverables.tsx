import { CheckCircle, FileText, BarChart3, Calendar, MessageCircle, CloudCog } from 'lucide-react'
import { Card } from '@/components/ui/card'

const deliverables = [
  {
    icon: FileText,
    title: 'Profit & Loss Statement',
    description: 'See exactly what you earned and spent this month.',
  },
  {
    icon: BarChart3,
    title: 'Balance Sheet',
    description: 'A snapshot of your assets, liabilities, and equity.',
  },
  {
    icon: CheckCircle,
    title: 'Reconciled Accounts',
    description: 'Every bank and credit card account matched to the penny.',
  },
  {
    icon: Calendar,
    title: 'Monthly Summary',
    description: 'A plain-English overview of what happened this month.',
  },
  {
    icon: MessageCircle,
    title: 'Questions Answered',
    description: 'Any transaction questions resolved before we close.',
  },
]

export function ToolsAndDeliverables() {
  return (
    <section id="deliverables" className="section-padding bg-background" aria-labelledby="deliverables-heading">
      <div className="container-default">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Tools We Use */}
          <div>
            <h2 className="text-3xl font-bold text-primary-navy">
              Tools We Use
            </h2>
            <p className="mt-4 text-text-muted">
              We work primarily with industry-standard software to keep your books organized and accessible.
            </p>

            <Card className="mt-8 p-8">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-green/10 text-accent-green">
                  <CloudCog className="h-7 w-7" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-navy">
                    QuickBooks Online
                  </h3>
                  <p className="text-sm text-text-muted">Our primary platform</p>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-text-muted">Cloud-based access from anywhere</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-text-muted">Automatic bank feeds for real-time data</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-text-muted">Easy sharing with your CPA at tax time</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-text-muted">Built-in reporting and dashboards</span>
                </div>
              </div>
              <p className="mt-6 text-sm text-text-muted border-t border-border pt-6">
                Already using Xero or another platform? We can discuss compatibility during your consultation.
              </p>
            </Card>
          </div>

          {/* What You Get Each Month */}
          <div>
            <h2 id="deliverables-heading" className="text-3xl font-bold text-primary-navy">
              What You Get Each Month
            </h2>
            <p className="mt-4 text-text-muted">
              Every month by the 15th, you&apos;ll receive these deliverables for the prior month:
            </p>

            <div className="mt-8 space-y-4">
              {deliverables.map((item) => (
                <Card key={item.title} className="p-5 flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue flex-shrink-0">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-6 bg-primary-blue/5 rounded-xl p-4">
              <p className="text-sm text-text-muted">
                <span className="font-medium text-primary-navy">Need something sooner?</span> Let us know and we&apos;ll accommodate when possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
