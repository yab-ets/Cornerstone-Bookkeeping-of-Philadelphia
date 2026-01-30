import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, Users, CheckCircle, Eye, Heart, Target, Shield, Clock, Award, BookOpen, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/lib/utils'
import { ContactCTA, Security } from '@/components/sections'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Cornerstone Bookkeeping of Philadelphia. A dedicated team providing dependable bookkeeping for Philadelphia-area small businesses.',
}

const values = [
  {
    icon: CheckCircle,
    title: 'Accuracy',
    description: 'We check every transaction, reconcile every account, and verify every number. Your books are always right because we don\'t cut corners.',
  },
  {
    icon: Eye,
    title: 'Clarity',
    description: 'Financial reports shouldn\'t require a finance degree to understand. We deliver clear, plain-English explanations with every report.',
  },
  {
    icon: Heart,
    title: 'Customer Care',
    description: 'Above-and-beyond service isn\'t an add-on—it\'s standard. We\'re responsive, proactive, and always here when you need us.',
  },
]

const team = [
  {
    name: 'Sarah',
    icon: Calculator,
    role: 'Bookkeeper & Quality Control',
    responsibilities: [
      'Monthly account reconciliations',
      'Transaction categorization',
      'Report preparation and review',
      'Quality assurance on all work',
      'Tax-ready documentation',
    ],
    description: 'Every number goes through careful review. Sarah ensures your financials are accurate, organized, and ready when you need them.',
    credentials: [
      { icon: BookOpen, text: 'QuickBooks Online ProAdvisor Certified' },
      { icon: Award, text: '8+ years of small business bookkeeping experience' },
    ],
  },
  {
    name: 'Michael',
    icon: Users,
    role: 'Client Success & Onboarding',
    responsibilities: [
      'Initial consultations',
      'Client onboarding',
      'Ongoing communication',
      'Question resolution',
      'CPA coordination',
    ],
    description: 'Your dedicated point of contact for everything. From your first call through ongoing support, Michael is responsive and ready to help.',
    credentials: [
      { icon: MessageSquare, text: 'Dedicated to same-day response times' },
      { icon: Shield, text: 'Background in small business operations & finance' },
    ],
  },
]

const differentiators = [
  {
    icon: Target,
    title: 'Focused Expertise',
    description: 'We do bookkeeping—and only bookkeeping. This focus means you get specialists, not generalists trying to do everything.',
  },
  {
    icon: Shield,
    title: 'Consistent Quality',
    description: 'With a small, dedicated team, quality never varies. You won\'t be passed between rotating staff—you get the same careful attention every month.',
  },
  {
    icon: Clock,
    title: 'Responsive Service',
    description: 'Quick responses, clear communication, no runaround. When you reach out, you\'ll hear back quickly from someone who knows your account.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-white py-16 md:py-24">
        <div className="container-default">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary-navy sm:text-5xl">
              About Cornerstone Bookkeeping
            </h1>
            <p className="mt-6 text-lg text-text-muted">
              {siteConfig.positioningStatement}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy text-center">
              Why We Do This
            </h2>
            <div className="mt-8 prose prose-lg prose-slate mx-auto">
              <p className="text-text-muted leading-relaxed">
                Small business owners have enough on their plate without worrying about whether their books are right. We started Cornerstone Bookkeeping because we saw too many business owners struggling with disorganized finances, unclear reports, and bookkeepers who were hard to reach.
              </p>
              <p className="text-text-muted leading-relaxed mt-4">
                We believe bookkeeping should be simple: accurate numbers, clear reports, and someone who actually responds when you have a question. That&apos;s it. No complicated jargon, no disappearing acts, no surprises.
              </p>
              <p className="text-text-muted leading-relaxed mt-4">
                Every client matters to us—we&apos;re not trying to be the biggest bookkeeping firm. We&apos;re focused on being the most reliable one for the clients we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container-default">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              Three principles guide everything we do for our clients.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-blue/10 text-primary-blue mx-auto">
                  <value.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-primary-navy">
                  {value.title}
                </h3>
                <p className="mt-3 text-text-muted">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy">
              Meet the Team
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              A small, dedicated team means you get personal attention and consistent quality—not a rotating cast of staff.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((member) => (
              <Card key={member.role} className="overflow-hidden">
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
                  {/* Credentials */}
                  <div className="mt-6 space-y-3">
                    {member.credentials.map((cred, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-green/10 text-accent-green flex-shrink-0">
                          <cred.icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <span className="text-text-primary">{cred.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-background p-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-primary-navy uppercase tracking-wider mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {member.responsibilities.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-text-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-blue flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="p-6 bg-primary-blue/5 border-primary-blue/20">
              <p className="text-center text-text-muted">
                <span className="font-medium text-primary-navy">Note on taxes:</span> We focus on bookkeeping and can collaborate with your CPA or tax preparer to make filing smooth. We&apos;re happy to provide any reports or documentation they need.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <Security />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-navy">
              Why Work With Us
            </h2>
            <p className="mt-4 text-lg text-text-muted">
              What sets Cornerstone apart from other bookkeeping options.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-green/10 text-accent-green mx-auto">
                  <item.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href={siteConfig.contact.calendlyUrl} target="_blank" rel="noopener noreferrer">
                Schedule a Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
