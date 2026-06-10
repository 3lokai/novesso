'use client'

import * as React from 'react'
import { sendEnquiry } from '@/lib/actions/send-enquiry'

export type EnquiryStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface EnquiryErrors {
  name?: string
  email?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Shared submit logic for the enquiry forms (contact page + consultation modal).
 * Handles client-side validation, focus management, submit status, and dispatch
 * to the Resend-backed `sendEnquiry` server action.
 *
 * @param source label included in the email subject (e.g. "Contact page").
 */
export function useEnquiryForm(source?: string) {
  const [status, setStatus] = React.useState<EnquiryStatus>('idle')
  const [errors, setErrors] = React.useState<EnquiryErrors>({})
  const [formError, setFormError] = React.useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const name = ((data.get('name') as string) ?? '').trim()
    const email = ((data.get('email') as string) ?? '').trim()

    const nextErrors: EnquiryErrors = {}
    if (!name) nextErrors.name = 'Please enter your name.'
    if (!email) nextErrors.email = 'Please enter your email address.'
    else if (!EMAIL_RE.test(email)) nextErrors.email = 'Please enter a valid email address.'

    setErrors(nextErrors)
    setFormError(null)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      // Move focus to the first invalid field for keyboard + screen-reader users.
      const firstKey = Object.keys(nextErrors)[0]
      const field = form.elements.namedItem(firstKey)
      if (field instanceof HTMLElement) field.focus()
      return
    }

    setStatus('submitting')

    const result = await sendEnquiry({
      name,
      email,
      phone: ((data.get('phone') as string) ?? '').trim(),
      query: ((data.get('query') as string) ?? '').trim(),
      website: ((data.get('website') as string) ?? '').trim(),
      source,
    })

    if (result.ok) {
      setStatus('success')
      form.reset()
    } else {
      setFormError(result.error ?? 'We couldn’t send your request. Please try again.')
      setStatus('error')
    }
  }

  const reset = React.useCallback(() => {
    setStatus('idle')
    setErrors({})
    setFormError(null)
  }, [])

  return { status, errors, formError, handleSubmit, reset }
}
