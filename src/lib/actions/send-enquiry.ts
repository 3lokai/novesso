'use server'

import { Resend } from 'resend'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export interface EnquiryPayload {
  name: string
  email: string
  phone?: string
  query?: string
  /** Honeypot — must be empty for a real submission. */
  website?: string
  /** Which form the enquiry came from, for the email subject. */
  source?: string
}

export interface EnquiryResult {
  ok: boolean
  error?: string
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/**
 * Sends a consultation enquiry to the studio inbox via Resend.
 *
 * Required env vars:
 *  - RESEND_API_KEY     — Resend API key
 *  - ENQUIRY_TO_EMAIL   — inbox that receives enquiries
 *  - ENQUIRY_FROM_EMAIL — verified Resend sender (e.g. "Novesso <enquiries@novesso.com>")
 */
export async function sendEnquiry(payload: EnquiryPayload): Promise<EnquiryResult> {
  // Honeypot: a populated hidden field means a bot. Report success, send nothing.
  if (payload.website?.trim()) return { ok: true }

  const name = payload.name?.trim() ?? ''
  const email = payload.email?.trim() ?? ''
  const phone = payload.phone?.trim() ?? ''
  const query = payload.query?.trim() ?? ''
  const source = payload.source?.trim() || 'Website'

  // Server-side validation — never trust the client.
  if (!name || !email || !EMAIL_RE.test(email)) {
    return { ok: false, error: 'Please provide a valid name and email address.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.ENQUIRY_TO_EMAIL
  const from = process.env.ENQUIRY_FROM_EMAIL

  if (!apiKey || !to || !from) {
    console.error(
      'sendEnquiry: missing config — set RESEND_API_KEY, ENQUIRY_TO_EMAIL, ENQUIRY_FROM_EMAIL',
    )
    return {
      ok: false,
      error: 'Enquiries are temporarily unavailable. Please email us directly.',
    }
  }

  const lines = [
    `Name:  ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    '',
    'Project details:',
    query || '(none provided)',
    '',
    `Source: ${source}`,
  ].filter((line): line is string => line !== null)

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #080e22; line-height: 1.6;">
      <h2 style="margin: 0 0 16px; font-weight: 400;">New enquiry — ${escapeHtml(source)}</h2>
      <p style="margin: 0 0 4px;"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin: 0 0 4px;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      ${phone ? `<p style="margin: 0 0 4px;"><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
      <p style="margin: 16px 0 4px;"><strong>Project details:</strong></p>
      <p style="margin: 0; white-space: pre-wrap;">${query ? escapeHtml(query) : '<em>(none provided)</em>'}</p>
    </div>
  `

  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry from ${name} — ${source}`,
      text: lines.join('\n'),
      html,
    })

    if (error) {
      console.error('sendEnquiry: Resend returned an error', error)
      return { ok: false, error: 'We couldn’t send your request. Please try again.' }
    }

    return { ok: true }
  } catch (err) {
    console.error('sendEnquiry: Resend threw', err)
    return { ok: false, error: 'We couldn’t send your request. Please try again.' }
  }
}
