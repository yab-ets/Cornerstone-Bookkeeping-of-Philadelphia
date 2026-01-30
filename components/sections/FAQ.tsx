import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Do you do taxes?',
    answer: 'No, we focus exclusively on bookkeeping. However, we work closely with CPAs and tax preparers to ensure your books are accurate and tax-ready. We\'ll provide all the reports and documentation your tax professional needs to file smoothly.',
  },
  {
    question: 'What do you need from me each month?',
    answer: 'Very little! Once we\'re set up with read-only access to your bank and credit card accounts, we handle the rest. If we have questions about specific transactions, we\'ll reach out—but most months, you won\'t need to do anything at all.',
  },
  {
    question: 'How do you keep my financial data secure?',
    answer: 'Security is a top priority. We use bank-level encryption, secure password managers, and only request read-only access to your accounts. We never store your login credentials, and we follow industry best practices for data protection.',
  },
  {
    question: 'Can you clean up past months?',
    answer: 'Absolutely. Our Cleanup & Catch-Up service is designed for exactly this. Whether you\'re a few months behind or a few years, we\'ll work through your historical transactions, fix miscategorizations, and bring everything up to date.',
  },
  {
    question: 'How quickly do you respond?',
    answer: 'We pride ourselves on quick, clear communication. During business hours, you can expect a response within a few hours—often sooner. For urgent matters, we\'re always reachable and happy to jump on a quick call.',
  },
  {
    question: 'What accounting software do you work with?',
    answer: 'We primarily work with QuickBooks Online, but we can also work with other popular platforms like Xero or Wave. During our initial consultation, we\'ll discuss what setup works best for your business.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Pricing depends on your business size and complexity. We offer straightforward monthly pricing with no hidden fees. Schedule a free call, and we\'ll provide a clear quote based on your specific needs.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white" aria-labelledby="faq-heading">
      <div className="container-default">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="faq-heading" className="text-3xl font-bold text-primary-navy sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Got questions? We&apos;ve got answers. Here are some of the most common things people ask us.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
