import { Resend } from "resend";

/**
 * Email service for the portfolio contact form.
 *
 * Production (Vercel): set RESEND_API_KEY in env. Messages are emailed
 * directly to CONTACT_TO_EMAIL (defaults to the portfolio owner).
 *
 * Local dev / preview: if no API key is present, the contact route falls
 * back to persisting the message to SQLite via Prisma — so the form still
 * works end-to-end without any external setup.
 */

let client: Resend | null = null;

export function getEmailClient(): Resend | null {
  if (!process.env.RESEND_API_KEY) return null;
  if (!client) client = new Resend(process.env.RESEND_API_KEY);
  return client;
}

export const isEmailEnabled = () => Boolean(process.env.RESEND_API_KEY);

/** Address messages are delivered to (the portfolio owner). */
export const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL || "avinashmunavalli522@gmail.com";

/**
 * The "from" address. Resend's free tier lets you send FROM
 * `onboarding@resend.com` to your own verified email with zero domain setup.
 * For production with a custom domain, set RESEND_FROM_EMAIL in env.
 */
export const CONTACT_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "onboarding@resend.com";

export type ContactPayload = {
  name: string;
  email: string;
  subject: string | null;
  message: string;
};

/** Sends a contact message via Resend. Throws on failure. */
export async function sendContactEmail(payload: ContactPayload) {
  const resend = getEmailClient();
  if (!resend) throw new Error("Email not configured: RESEND_API_KEY missing");

  const subjectLine = payload.subject?.trim()
    ? `Portfolio enquiry: ${payload.subject.trim()}`
    : `Portfolio enquiry from ${payload.name}`;

  const fromEmail = CONTACT_FROM_EMAIL.trim();

  const { error } = await resend.emails.send({
    from: fromEmail.includes("<") ? fromEmail : `onboarding@resend.com`,
    to: [CONTACT_TO_EMAIL.trim()],
    replyTo: payload.email.trim(),
    subject: subjectLine,
    text: [
      `New message from your portfolio contact form.`,
      ``,
      `Name:    ${payload.name}`,
      `Email:   ${payload.email}`,
      `Subject: ${payload.subject || "—"}`,
      ``,
      `Message:`,
      payload.message,
      ``,
      `—`,
      `Reply directly to ${payload.email}.`,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend API returned error:", error);
    throw new Error(error.message || "Failed to deliver email via Resend");
  }
}
