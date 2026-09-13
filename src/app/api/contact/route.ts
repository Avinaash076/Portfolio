import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendContactEmail, isEmailEnabled } from "@/lib/email";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  subject: z.string().max(120).optional().or(z.literal("")),
  message: z.string().min(10).max(4000),
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
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
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

    // ── Dev / preview fallback: persist to SQLite ──────────────
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
  } catch (err) {
    console.error("[contact] failed to send message", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong while sending your message." },
      { status: 500 }
    );
  }
}
