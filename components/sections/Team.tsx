import { Calculator, Users, Award, BookOpen, MessageSquare, Shield } from 'lucide-react'
import { Card } from '@/components/ui/card'

const team = [
  {
    name: 'Sarah',
    icon: Calculator,
    role: 'Bookkeeper & Quality Control',
    description: 'Handles monthly closes, reconciliations, transaction categorization, and report preparation. Every number is checked twice before it reaches you.',
    credentials: [
      { icon: BookOpen, text: 'QuickBooks Online ProAdvisor Certified' },
      { icon: Award, text: '8+ years of small business bookkeeping experience' },
    ],
  },
  {
    name: 'Michael',
    icon: Users,
    role: 'Client Success & Onboarding',
    description: 'Your main point of contact for questions, onboarding, and ensuring everything runs smoothly. Always responsive and ready to help.',
    credentials: [
      { icon: MessageSquare, text: 'Dedicated to same-day response times' },
      { icon: Shield, text: 'Background in small business operations & finance' },
    ],
  },
]

export function Team() {
  return (
    <section id="team" className="section-padding bg-background" aria-labelledby="team-heading">
      <div className="container-default">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="team-heading" className="text-3xl font-bold text-primary-navy sm:text-4xl">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            We&apos;re a small, dedicated team focused entirely on delivering excellent bookkeeping and client service. When you work with us, you get personal attention—not a rotating cast of staff.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <Card
              key={member.role}
              className="overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue">
                    <member.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-navy">
                      {member.name}
                    </h3>
                    <p className="text-sm text-text-muted">{member.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-text-muted">
                  {member.description}
                </p>
              </div>
              <div className="bg-background/50 p-6 border-t border-border">
                <ul className="space-y-3">
                  {member.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-green/10 text-accent-green flex-shrink-0">
                        <cred.icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <span className="text-text-primary">{cred.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-text-muted">
            We focus on bookkeeping and can collaborate with your CPA or tax preparer to make filing smooth.
          </p>
        </div>
      </div>
    </section>
  )
}
