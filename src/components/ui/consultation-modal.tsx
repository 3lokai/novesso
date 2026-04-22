"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// ─── Field Wrapper ────────────────────────────────────────────────────────────
// Vertical stack for label + input with consistent spacing
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
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  )
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface ConsultationModalProps {
  /** Custom trigger element; defaults to the standard CTA button */
  trigger?: React.ReactNode
}

// ─── Modal ────────────────────────────────────────────────────────────────────
export function ConsultationModal({ trigger }: ConsultationModalProps) {
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        {trigger ?? (
          <Button variant="primary" size="lg">
            Schedule Consultation
          </Button>
        )}
      </DialogTrigger>

      {/* Panel */}
      <DialogContent
        className={cn(
          // Widen the panel slightly for a two-column form feel
          "max-w-2xl",
          // Tighten padding on small screens, keep editorial whitespace on md+
          "p-8 md:p-14"
        )}
      >
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <DialogHeader className="mb-8">
          {/* Eyebrow label */}
          <p className="label mb-3 text-[var(--gold)] opacity-100">
            Creare Vita Moderna
          </p>

          <DialogTitle>
            Begin the Conversation
          </DialogTitle>

          <DialogDescription className="mt-3">
            Share a few details and we&apos;ll reach out within one business
            day to arrange your private consultation.
          </DialogDescription>
        </DialogHeader>

        {/* ── Divider ────────────────────────────────────────────────────── */}
        <div className="w-8 border-t border-[var(--gold)] mb-8" />

        {/* ── Form ───────────────────────────────────────────────────────── */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-8"
          noValidate
        >
          {/* Name + Phone — side by side on md+ */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Field htmlFor="consult-name" label="Full Name">
              <Input
                id="consult-name"
                name="name"
                type="text"
                placeholder="Your full name"
                autoComplete="name"
                required
              />
            </Field>

            <Field htmlFor="consult-phone" label="Phone Number">
              <Input
                id="consult-phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                autoComplete="tel"
              />
            </Field>
          </div>

          {/* Email — full width */}
          <Field htmlFor="consult-email" label="Email Address">
            <Input
              id="consult-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </Field>

          {/* Query — full width */}
          <Field htmlFor="consult-query" label="Tell Us About Your Project">
            <Textarea
              id="consult-query"
              name="query"
              rows={4}
              placeholder="Describe your space, vision, or any specific requirements…"
            />
          </Field>

          {/* ── Honeypot (hidden from real users, caught by bots) ────────── */}
          {/*
            aria-hidden + tabIndex -1 + opacity-0 + absolute positioning
            ensure sighted & keyboard users never see or interact with it.
            A populated value signals a bot submission.
          */}
          <div
            aria-hidden="true"
            className="absolute opacity-0 pointer-events-none"
            style={{ top: "-9999px", left: "-9999px" }}
          >
            <Label htmlFor="consult-website">Website</Label>
            <Input
              id="consult-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* ── Footer Row ─────────────────────────────────────────────────── */}
          <div className="flex flex-col-reverse gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            {/* Privacy note */}
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              Your information is treated with the utmost discretion and will
              never be shared with third parties.
            </p>

            {/* Submit */}
            <Button type="submit" variant="primary" size="lg" className="shrink-0">
              Send Enquiry
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
