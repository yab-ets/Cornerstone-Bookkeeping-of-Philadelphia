import { NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  businessName?: string
  message: string
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Log the submission (in production, replace with Formspree, email service, or database)
    console.log('=== New Contact Form Submission ===')
    console.log('Timestamp:', new Date().toISOString())
    console.log('Name:', data.name)
    console.log('Email:', data.email)
    console.log('Phone:', data.phone || 'Not provided')
    console.log('Business Name:', data.businessName || 'Not provided')
    console.log('Message:', data.message)
    console.log('===================================')

    // ============================================================
    // PRODUCTION SETUP INSTRUCTIONS:
    //
    // Option 1: Formspree (Recommended - Easy setup)
    // 1. Go to https://formspree.io and create a free account
    // 2. Create a new form and get your form ID
    // 3. Replace the code below with:
    //
    //    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //      method: 'POST',
    //      headers: { 'Content-Type': 'application/json' },
    //      body: JSON.stringify({
    //        name: data.name,
    //        email: data.email,
    //        phone: data.phone,
    //        businessName: data.businessName,
    //        message: data.message,
    //      }),
    //    })
    //    if (!response.ok) throw new Error('Formspree submission failed')
    //
    // Option 2: SendGrid, Resend, or other email service
    // 1. Install the SDK (e.g., npm install @sendgrid/mail)
    // 2. Configure with your API key
    // 3. Send an email notification to yourself
    //
    // Option 3: Save to a database (Supabase, Planetscale, etc.)
    // ============================================================

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}
