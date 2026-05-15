'use client'

import * as React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Container, Section, Stack } from '@/components/primitives'
import { cn } from '@/lib/utils'

function Field({
  htmlFor,
  label,
  children,
  className,
}: {
  htmlFor: string
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <Label htmlFor={htmlFor} className="label text-foreground/50">
        {label}
      </Label>
      {children}
    </div>
  )
}

const ContactForm = () => {
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
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-10 bg-card p-8 md:p-12 border border-border/50 shadow-sm"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Field htmlFor="name" label="Full Name">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-colors"
                    required
                  />
                </Field>

                <Field htmlFor="phone" label="Phone Number">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-colors"
                  />
                </Field>
              </div>

              <Field htmlFor="email" label="Email Address">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-colors"
                  required
                />
              </Field>

              <Field htmlFor="query" label="Project Details">
                <Textarea
                  id="query"
                  name="query"
                  rows={4}
                  placeholder="Tell us about your requirements, dimensions, or vision..."
                  className="border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-colors resize-none"
                />
              </Field>

              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
                <p className="caption text-muted-foreground max-w-xs">
                  By submitting this form, you agree to our privacy policy. Your data is handled with absolute discretion.
                </p>
                <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto px-12">
                  SUBMIT REQUEST
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ContactForm
