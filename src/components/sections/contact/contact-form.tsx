'use client'

import * as React from 'react'
import { CheckCircle } from '@phosphor-icons/react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Container, Section, Stack } from '@/components/primitives'
import { cn } from '@/lib/utils'
import { useEnquiryForm } from '@/lib/use-enquiry-form'

function Field({
  htmlFor,
  label,
  error,
  children,
  className,
}: {
  htmlFor: string
  label: string
  error?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Label htmlFor={htmlFor} className="label text-foreground/50">
        {label}
      </Label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="caption text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

const fieldClass =
  'border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-colors aria-invalid:border-destructive'

const ContactForm = () => {
  const { status, errors, formError, handleSubmit, reset } = useEnquiryForm('Contact page')

  return (
    <Section id="consultation-form" variant="muted">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Header Area */}
          <div className="lg:col-span-4">
            <Stack gap="md" className="sticky top-32">
              <p className="label text-accent text-[11px] tracking-[0.4em] uppercase">
                The Consultation
              </p>
              <h2 className="h2 text-foreground">
                Request a <br /> Site Audit.
              </h2>
              <div className="w-12 h-px bg-accent my-4" />
              <p className="body text-foreground/60 leading-relaxed">
                Our engineers come to you. Tell us about your space and we will provide a comprehensive technical assessment of what is possible.
              </p>
              <p className="caption text-foreground/40 mt-4">
                Response time: Within 24 hours.
              </p>
            </Stack>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-8">
            {status === 'success' ? (
              <div
                role="status"
                className="flex flex-col items-start gap-5 border border-border/50 bg-card p-8 md:p-12"
              >
                <CheckCircle size={40} weight="light" className="text-accent" />
                <h3 className="h3 text-foreground">Request received.</h3>
                <p className="body text-muted-foreground max-w-md leading-relaxed">
                  Thank you — your details are with our engineering team. We&apos;ll
                  be in touch within one business day to arrange your site audit.
                </p>
                <Button variant="ghost" onClick={reset} className="mt-2">
                  Send another request
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-10 bg-card p-8 md:p-12 border border-border/50"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <Field htmlFor="name" label="Full Name" error={errors.name}>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={fieldClass}
                      required
                    />
                  </Field>

                  <Field htmlFor="phone" label="Phone Number">
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91"
                      autoComplete="tel"
                      className={fieldClass}
                    />
                  </Field>
                </div>

                <Field htmlFor="email" label="Email Address" error={errors.email}>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={fieldClass}
                    required
                  />
                </Field>

                <Field htmlFor="query" label="Project Details">
                  <Textarea
                    id="query"
                    name="query"
                    rows={4}
                    placeholder="Tell us about your requirements, dimensions, or vision..."
                    className={cn(fieldClass, 'resize-none')}
                  />
                </Field>

                {/* Honeypot — hidden from real users, catches bots */}
                <div
                  aria-hidden="true"
                  className="absolute opacity-0 pointer-events-none"
                  style={{ top: '-9999px', left: '-9999px' }}
                >
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
                  <div className="max-w-xs">
                    <p className="caption text-muted-foreground">
                      By submitting this form, you agree to our privacy policy. Your data is handled with absolute discretion.
                    </p>
                    {/* Live status for validation / submission */}
                    <p role="status" aria-live="polite" className="caption mt-2 min-h-[1.25em]">
                      {status === 'submitting' && (
                        <span className="text-muted-foreground">Sending your request…</span>
                      )}
                      {status === 'error' && (
                        <span className="text-destructive">
                          {formError ?? 'Please correct the highlighted fields.'}
                        </span>
                      )}
                    </p>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full md:w-auto px-12"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'SUBMITTING…' : 'SUBMIT REQUEST'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ContactForm
