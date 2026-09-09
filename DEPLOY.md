# Deploying the Portfolio to Vercel

This portfolio is a standard **Next.js 16** app — Vercel detects it
automatically with zero config. The only thing to set up is the contact
form's email backend.

---

## 1. Push to GitHub

```bash
git init
git add .
git commit -m "portfolio"
git branch -M main
git remote add origin https://github.com/<you>/portfolio.git
git push -u origin main
```

## 2. Import on Vercel

1. Go to **vercel.com → Add New → Project**.
2. Pick your repo. Vercel auto-detects Next.js — accept the defaults.
3. Click **Deploy**. You get a `*.vercel.app` URL in ~60 seconds.

## 3. Wire up the contact form (Resend)

The contact form emails you directly via [Resend](https://resend.com)
— no database to manage on the serverless filesystem.

1. **Create a Resend account** (free, 100 emails/day).
2. **Copy your API key** from the Resend dashboard.
3. In Vercel: **Project Settings → Environment Variables**, add:

   | Name | Value |
   |------|-------|
   | `RESEND_API_KEY` | `re_xxxxxxxxxxxxx` |
   | `CONTACT_TO_EMAIL` | `avinashmunavalli522@gmail.com` |
   | `RESEND_FROM_EMAIL` | `onboarding@resend.com` |

4. **Redeploy** (Vercel → Deployments → ⋯ → Redeploy) so the new env vars are picked up.

> **No domain verification needed.** Resend's `onboarding@resend.com`
> sender sends to your own verified email (the one you signed up with)
> out of the box. To use a custom `from` address, verify your domain
> in Resend and update `RESEND_FROM_EMAIL`.

## 4. Custom domain (optional)

**Vercel → Project Settings → Domains → Add.** Add your domain and
update DNS records as Vercel shows you. HTTPS is automatic.

---

## How the contact form works

| Environment | `RESEND_API_KEY` set? | Behaviour |
|-------------|-----------------------|-----------|
| Local dev / preview | No | Message saved to local SQLite (form works, no setup) |
| Vercel production | Yes | Message emailed to `CONTACT_TO_EMAIL` |

The fallback exists so the form is never broken — even before you wire
up Resend, it still persists locally.

---

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4 + custom design system (Fraunces + Geist)
- **Database:** Prisma + SQLite (local/dev fallback)
- **Email:** Resend (production)
- **Deploy:** Vercel
