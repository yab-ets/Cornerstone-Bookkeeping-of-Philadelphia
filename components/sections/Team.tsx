import { Calculator, Users } from 'lucide-react'

const team = [
  {
    icon: Calculator,
    role: 'Bookkeeper & Quality Control',
    description: 'Handles monthly closes, reconciliations, transaction categorization, and report preparation. Every number is checked twice.',
  },
  {
    icon: Users,
    role: 'Client Success & Onboarding',
    description: 'Your main point of contact for questions, onboarding, and ensuring everything runs smoothly. Always responsive and ready to help.',
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div
              key={member.role}
              className="bg-surface rounded-2xl border border-border p-8 shadow-card"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue">
                <member.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary-navy">
                {member.role}
              </h3>
              <p className="mt-2 text-text-muted">
                {member.description}
              </p>
            </div>
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
