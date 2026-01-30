'use client'

import * as React from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = React.useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = React.useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          businessName: formData.get('businessName'),
          message: formData.get('message'),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setStatus('success')
      form.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or email us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-accent-green/10 border border-accent-green/20 rounded-2xl p-8 text-center">
        <CheckCircle className="h-12 w-12 text-accent-green mx-auto" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-primary-navy">Message Sent!</h3>
        <p className="mt-2 text-text-muted">
          Thanks for reaching out. We&apos;ll get back to you within one business day.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary-navy mb-2">
            Your Name <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Smith"
            disabled={status === 'submitting'}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary-navy mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@yourcompany.com"
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-primary-navy mb-2">
            Phone Number
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(215) 555-0123"
            disabled={status === 'submitting'}
          />
        </div>
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-primary-navy mb-2">
            Business Name
          </label>
          <Input
            type="text"
            id="businessName"
            name="businessName"
            placeholder="Your Business LLC"
            disabled={status === 'submitting'}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary-navy mb-2">
          How Can We Help? <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your business and what bookkeeping support you're looking for..."
          rows={5}
          disabled={status === 'submitting'}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <span className="animate-spin mr-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </span>
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5 mr-2" aria-hidden="true" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-sm text-text-muted">
        We typically respond within one business day.
      </p>
    </form>
  )
}
