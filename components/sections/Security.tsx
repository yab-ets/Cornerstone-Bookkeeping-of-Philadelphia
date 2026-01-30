import { Shield, Lock, Eye, UserCheck, Server, FileX } from 'lucide-react'
import { Card } from '@/components/ui/card'

const securityItems = [
  {
    icon: Eye,
    title: 'Read-Only Access',
    description: 'We only request read-only access to your bank and credit card accounts. We can view transactions but never move money.',
  },
  {
    icon: UserCheck,
    title: 'Least-Privilege Principle',
    description: 'Team members only access what they need to do their job. Your data isn\'t shared across unrelated accounts or staff.',
  },
  {
    icon: Lock,
    title: 'Secure Password Management',
    description: 'We use enterprise-grade password managers and never store your login credentials in plain text or shared documents.',
  },
  {
    icon: Server,
    title: 'Encrypted Storage',
    description: 'All financial documents and reports are stored with bank-level encryption. Data is encrypted both in transit and at rest.',
  },
  {
    icon: FileX,
    title: 'We Don\'t Do Taxes',
    description: 'We focus exclusively on bookkeeping. We never access or store sensitive tax documents like SSNs or EINs beyond what\'s in your accounting software.',
    isHighlight: true,
  },
]

export function Security() {
  const regularItems = securityItems.slice(0, 4)
  const highlightItem = securityItems[4]
  const HighlightIcon = highlightItem.icon

  return (
    <section id="security" className="section-padding bg-white" aria-labelledby="security-heading">
      <div className="container-default">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-navy/10 text-primary-navy mx-auto">
            <Shield className="h-7 w-7" aria-hidden="true" />
          </div>
          <h2 id="security-heading" className="mt-4 text-3xl font-bold text-primary-navy sm:text-4xl">
            Security & Confidentiality
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Your financial data is sensitive. Here&apos;s exactly how we protect it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {regularItems.map((item) => {
            const ItemIcon = item.icon
            return (
              <Card key={item.title} className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-blue/10 text-primary-blue">
                  <ItemIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-semibold text-primary-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  {item.description}
                </p>
              </Card>
            )
          })}
          {/* Last item - highlighted differently */}
          <Card className="p-6 md:col-span-2 lg:col-span-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-green/10 text-accent-green">
              <HighlightIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 font-semibold text-primary-navy">
              {highlightItem.title}
            </h3>
            <p className="mt-2 text-sm text-text-muted">
              {highlightItem.description}
            </p>
          </Card>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <div className="bg-background rounded-2xl p-6 text-center">
            <p className="text-sm text-text-muted">
              <span className="font-medium text-primary-navy">Questions about security?</span> We&apos;re happy to walk you through our practices in detail. Just ask during your consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
