import { NextResponse } from "next/server";
import { sendContactEmail, isEmailEnabled } from "@/lib/email";
import { z } from "zod";

export const dynamic = "force-dynamic";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Invalid email address").max(120),
  subject: z.string().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(4000),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const issues = parsed.error.flatten().fieldErrors;
    const firstError = Object.values(issues).flat()[0] || "Validation failed";
    return NextResponse.json(
      {
        ok: false,
        error: firstError,
        issues,
      },
      { status: 422 }
    );
  }

  const { name, email, subject, message } = parsed.data;
  const cleanedSubject = subject?.trim() ? subject.trim() : null;

  try {
    // ── Production path: email via Resend ──────────────────────
    if (isEmailEnabled()) {
      await sendContactEmail({ name, email, subject: cleanedSubject, message });
      return NextResponse.json(
        {
          ok: true,
          delivered: "email",
          message:
            "Thanks! Your message is on its way to my inbox — I'll reply within a day or two.",
        },
        { status: 201 }
      );
    }

    // ── Dev / preview fallback: try SQLite, or inform user ──────
    try {
      const { db } = await import("@/lib/db");
      const record = await db.contactMessage.create({
        data: {
          name,
          email,
          subject: cleanedSubject,
          message,
        },
      });

      return NextResponse.json(
        {
          ok: true,
          delivered: "database",
          id: record.id,
          message:
            "Thanks! Your message landed safely — I'll get back to you soon.",
        },
        { status: 201 }
      );
    } catch {
      // If DB fails on serverless Vercel without Resend API key configured
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email service is currently setting up. Please email directly at avinashmunavalli522@gmail.com",
        },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("[contact] failed to send message", err);
    const msg = err instanceof Error ? err.message : "Failed to send email";
    return NextResponse.json(
      { ok: false, error: msg },
      { status: 500 }
    );
  }
}
