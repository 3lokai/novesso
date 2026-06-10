'use client'

import * as React from 'react'

export type EnquiryStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface EnquiryErrors {
  name?: string
  email?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Shared submit logic for the enquiry forms (contact page + consultation modal).
 * Handles client-side validation, focus management, and submit status.
 *
 * NOTE: there is no backend yet — a successful submit is simulated with a short
 * delay. Wire `submit()` to a real endpoint / server action before launch.
 */
export function useEnquiryForm() {
  const [status, setStatus] = React.useState<EnquiryStatus>('idle')
  const [errors, setErrors] = React.useState<EnquiryErrors>({})

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    // Honeypot: a populated hidden field means a bot. Drop silently by showing
    // the same success state without doing anything.
    if (((data.get('website') as string) ?? '').trim()) {
      setStatus('success')
      return
    }

    const name = ((data.get('name') as string) ?? '').trim()
    const email = ((data.get('email') as string) ?? '').trim()

    const nextErrors: EnquiryErrors = {}
    if (!name) nextErrors.name = 'Please enter your name.'
    if (!email) nextErrors.email = 'Please enter your email address.'
    else if (!EMAIL_RE.test(email)) nextErrors.email = 'Please enter a valid email address.'

    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      // Move focus to the first invalid field for keyboard + screen-reader users.
      const firstKey = Object.keys(nextErrors)[0]
      const field = form.elements.namedItem(firstKey)
      if (field instanceof HTMLElement) field.focus()
      return
    }

    setStatus('submitting')
    try {
      await new Promise((resolve) => setTimeout(resolve, 1100))
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const reset = React.useCallback(() => {
    setStatus('idle')
    setErrors({})
  }, [])

  return { status, errors, handleSubmit, reset }
}
