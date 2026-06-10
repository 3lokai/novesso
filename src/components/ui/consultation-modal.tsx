"use client"

import * as React from "react"
import { CheckCircle } from "@phosphor-icons/react"
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
import { useEnquiryForm } from "@/lib/use-enquiry-form"

// ─── Field Wrapper ────────────────────────────────────────────────────────────
// Vertical stack for label + input with consistent spacing
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
    <div className={cn("flex flex-col gap-2", className)}>
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
  "border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent transition-colors aria-invalid:border-destructive"

// ─── Props ────────────────────────────────────────────────────────────────────
interface ConsultationModalProps {
  /** Custom trigger element; defaults to the standard CTA button */
  trigger?: React.ReactNode
}

// ─── Modal ────────────────────────────────────────────────────────────────────
export function ConsultationModal({ trigger }: ConsultationModalProps) {
  const [open, setOpen] = React.useState(false)
  const { status, errors, handleSubmit, reset } = useEnquiryForm()

  // Reset the form state a touch after close so the success panel doesn't flash
  // away mid-animation when the user dismisses the dialog.
  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) reset()
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
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
            {status === "success" ? "Thank you." : "Begin the Conversation"}
          </DialogTitle>

          <DialogDescription className="mt-3">
            {status === "success"
              ? "Your enquiry is with our team."
              : "Share a few details and we'll reach out within one business day to arrange your private consultation."}
          </DialogDescription>
        </DialogHeader>

        {/* ── Divider ────────────────────────────────────────────────────── */}
        <div className="w-8 border-t border-[var(--gold)] mb-8" />

        {status === "success" ? (
          <div role="status" className="flex flex-col items-start gap-5">
            <CheckCircle size={40} weight="light" className="text-accent" />
            <p className="body text-muted-foreground max-w-md leading-relaxed">
              We&apos;ve received your details and will be in touch within one
              business day to arrange your private consultation.
            </p>
            <Button
              variant="ghost"
              onClick={() => handleOpenChange(false)}
              className="mt-2"
            >
              Close
            </Button>
          </div>
        ) : (
          /* ── Form ─────────────────────────────────────────────────────── */
          <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
            {/* Name + Phone — side by side on md+ */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Field htmlFor="consult-name" label="Full Name" error={errors.name}>
                <Input
                  id="consult-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "consult-name-error" : undefined}
                  className={fieldClass}
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
                  className={fieldClass}
                />
              </Field>
            </div>

            {/* Email — full width */}
            <Field htmlFor="consult-email" label="Email Address" error={errors.email}>
              <Input
                id="consult-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "consult-email-error" : undefined}
                className={fieldClass}
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
                className={cn(fieldClass, "resize-none")}
              />
            </Field>

            {/* ── Honeypot (hidden from real users, caught by bots) ────────── */}
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
              {/* Privacy note + live status */}
              <div className="max-w-xs">
                <p className="caption text-muted-foreground">
                  Your information is treated with the utmost discretion and will
                  never be shared with third parties.
                </p>
                <p role="status" aria-live="polite" className="caption mt-2 min-h-[1.25em]">
                  {status === "submitting" && (
                    <span className="text-muted-foreground">Sending your enquiry…</span>
                  )}
                  {status === "error" && (
                    <span className="text-destructive">Please correct the highlighted fields.</span>
                  )}
                </p>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="shrink-0"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Send Enquiry"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
