import {
  Hero,
  TrustStrip,
  ServicesOverview,
  HowItWorks,
  ToolsAndDeliverables,
  Security,
  Team,
  FAQ,
  ContactCTA,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesOverview />
      <HowItWorks />
      <ToolsAndDeliverables />
      <Security />
      <Team />
      <FAQ />
      <ContactCTA />
    </>
  )
}
