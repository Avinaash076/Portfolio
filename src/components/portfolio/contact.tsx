"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "./section-heading";
import { profile } from "@/lib/portfolio-data";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(
          data?.error || "Could not send your message. Please try again."
        );
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  const channels = [
    {
      Icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      Icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    {
      Icon: MapPin,
      label: "Location",
      value: profile.location,
      href: undefined,
    },
  ];

  const socials = [
    { Icon: Github, label: "GitHub", href: profile.github, handle: profile.githubHandle },
    {
      Icon: Linkedin,
      label: "LinkedIn",
      href: profile.linkedin,
      handle: "in/avinaash-m",
    },
  ];

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_50%,color-mix(in_oklch,var(--accent-emerald)_8%,transparent),transparent)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          num="07"
          eyebrow="contact"
          title="Let's build something reliable."
          description="Have a role, a project, or an idea you want to ship? Drop me a message — I read everything and reply within a day or two."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Channels */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="space-y-4">
              {channels.map(({ Icon, label, value, href }) => {
                const inner = (
                  <div className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card/50 p-4 transition-colors hover:border-[var(--accent-emerald)]/40">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--accent-emerald)]/30 bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium">{value}</p>
                    </div>
                    {href && (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-emerald)]" />
                    )}
                  </div>
                );
                return href ? (
                  <a key={label} href={href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}

              {/* Socials */}
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl border border-border/60 bg-card/50 p-4 transition-colors hover:border-[var(--accent-emerald)]/40"
                  >
                    <Icon className="h-5 w-5 text-foreground transition-colors group-hover:text-[var(--accent-emerald)]" />
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium">
                      {handle}
                    </p>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="rounded-2xl border border-dashed border-border/70 bg-background/40 p-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[var(--accent-emerald)]" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent-emerald)]" />
                  </span>
                  <p className="font-mono text-xs font-medium">
                    Currently available
                  </p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {profile.availability}.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={onSubmit}
              className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-6 sm:p-8 noise"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--accent-emerald)]/10 blur-3xl" />
              <div className="relative space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Your name"
                    id="name"
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                    required
                  />
                  <Field
                    label="Email"
                    id="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={form.email}
                    onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                    required
                  />
                </div>
                <Field
                  label="Subject"
                  id="subject"
                  placeholder="Let's work together"
                  value={form.subject}
                  onChange={(v) => setForm((f) => ({ ...f, subject: v }))}
                />
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-xs">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about the role or project…"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="resize-none bg-background/50 font-sans"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <p className="font-mono text-[11px] text-muted-foreground">
                    {`> encrypted in transit · stored securely`}
                  </p>
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="group rounded-full bg-[var(--accent-emerald)] text-[var(--primary-foreground)] hover:bg-[var(--accent-emerald)]/90"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        Send message
                      </>
                    )}
                  </Button>
                </div>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 rounded-xl border border-[var(--accent-emerald)]/40 bg-[var(--accent-emerald)]/10 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-emerald)]" />
                    <p className="text-sm text-foreground">
                      Thanks! Your message landed safely — I&apos;ll get back to
                      you soon.
                    </p>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 rounded-xl border border-destructive/40 bg-destructive/10 p-4"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0 text-destructive" />
                    <p className="text-sm text-foreground">{errorMsg}</p>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="font-mono text-xs">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="bg-background/50 font-sans"
      />
    </div>
  );
}
