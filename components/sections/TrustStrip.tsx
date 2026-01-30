import { CheckCircle, Eye, Heart } from 'lucide-react'

const pillars = [
  {
    icon: CheckCircle,
    title: 'Accuracy',
    description: 'Every transaction reconciled, every number verified. Your books are always right.',
  },
  {
    icon: Eye,
    title: 'Clarity',
    description: 'Plain-English reports and summaries. Understand your finances at a glance.',
  },
  {
    icon: Heart,
    title: 'Customer Care',
    description: 'Responsive communication and above-and-beyond service, every single month.',
  },
]

export function TrustStrip() {
  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="trust-heading">
      <div className="container-default">
        <h2 id="trust-heading" className="sr-only">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue">
                <pillar.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-navy">
                {pillar.title}
              </h3>
              <p className="mt-2 text-text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
