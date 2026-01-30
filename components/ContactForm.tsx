'use client'

import * as React from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

// ============================================================
// FORMSPREE CONFIGURATION
//
// To enable form submissions:
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form and get your form ID (looks like: "xyzabcde")
// 3. Replace "YOUR_FORM_ID" below with your actual form ID
//
// Example: const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyzabcde'
// ============================================================
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export function ContactForm() {
  const [status, setStatus] = React.useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = React.useState('')
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [touched, setTouched] = React.useState<Record<string, boolean>>({})

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return undefined
      case 'email':
        if (!value.trim()) return 'Email is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) return 'Please enter a valid email address'
        return undefined
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10) return 'Please provide more detail (at least 10 characters)'
        return undefined
      default:
        return undefined
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const validateForm = (formData: FormData): boolean => {
    const newErrors: FormErrors = {}

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    newErrors.name = validateField('name', name)
    newErrors.email = validateField('email', email)
    newErrors.message = validateField('message', message)

    setErrors(newErrors)
    setTouched({ name: true, email: true, message: true })

    return !newErrors.name && !newErrors.email && !newErrors.message
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    if (!validateForm(formData)) {
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
        setTouched({})
        setErrors({})
      } else {
        const data = await response.json()
        throw new Error(data.error || 'Form submission failed')
      }
    } catch (error) {
      setStatus('error')
      if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
        setErrorMessage('Contact form is not yet configured. Please email us directly or call to get in touch.')
      } else {
        setErrorMessage('Something went wrong. Please try again or email us directly.')
      }
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
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
            onBlur={handleBlur}
            onChange={handleChange}
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={errors.name && touched.name ? 'border-red-400 focus:ring-red-400' : ''}
          />
          {errors.name && touched.name && (
            <p id="name-error" className="mt-1.5 text-sm text-red-500" role="alert">
              {errors.name}
            </p>
          )}
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
            onBlur={handleBlur}
            onChange={handleChange}
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={errors.email && touched.email ? 'border-red-400 focus:ring-red-400' : ''}
          />
          {errors.email && touched.email && (
            <p id="email-error" className="mt-1.5 text-sm text-red-500" role="alert">
              {errors.email}
            </p>
          )}
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
          onBlur={handleBlur}
          onChange={handleChange}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={errors.message && touched.message ? 'border-red-400 focus:ring-red-400' : ''}
        />
        {errors.message && touched.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-500" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot field for spam protection */}
      <input
        type="text"
        name="_gotcha"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" aria-hidden="true" />
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
