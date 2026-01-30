import { MessageSquare, Settings, BarChart3 } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Free Consultation',
    description: 'We\'ll discuss your business, current bookkeeping situation, and what you need. No pressure, just a conversation.',
  },
  {
    step: '02',
    icon: Settings,
    title: 'Seamless Onboarding',
    description: 'We connect securely to your accounts, review your setup, and establish clear processes tailored to your business.',
  },
  {
    step: '03',
    icon: BarChart3,
    title: 'Ongoing Support',
    description: 'Each month, we reconcile, categorize, and deliver clear reports. Questions? We\'re always just a message away.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white" aria-labelledby="how-it-works-heading">
      <div className="container-default">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="how-it-works-heading" className="text-3xl font-bold text-primary-navy sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Getting started is simple. Here&apos;s what to expect when you work with us.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-primary-blue/20 via-primary-blue/40 to-primary-blue/20" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                {/* Step number badge */}
                <div className="absolute -top-3 text-xs font-bold text-primary-blue bg-primary-blue/10 px-2 py-1 rounded-full">
                  Step {step.step}
                </div>

                {/* Icon container */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-surface border-2 border-primary-blue/20 text-primary-blue shadow-card">
                  <step.icon className="h-8 w-8" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-primary-navy">
                  {step.title}
                </h3>
                <p className="mt-3 text-text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
