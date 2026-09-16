"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { profile } from "@/lib/portfolio-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
    { k: "Email", v: profile.email, href: `mailto:${profile.email}` },
    {
      k: "Phone",
      v: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    {
      k: "GitHub",
      v: `@${profile.githubHandle}`,
      href: profile.github,
    },
    {
      k: "LinkedIn",
      v: "/in/avinaash-m",
      href: profile.linkedin,
    },
    { k: "Based", v: profile.location },
  ];

  return (
    <section id="contact" className="scroll-mt-14 border-y border-[var(--hair)] bg-[var(--paper-tint)]/50 px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="contact" className="border-none">
            <AccordionTrigger className="hover:no-underline py-0 py-8">
              <div className="flex flex-col text-left gap-2 w-full">
                <span className="font-sans text-sm uppercase tracking-[0.15em] text-signal/80">Contact</span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight">Let's build together</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="pt-4 border-t border-[var(--hair-strong)] grid gap-12 lg:grid-cols-12 lg:gap-16">
                {/* Channels — editorial list */}
                <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="border-t border-[var(--hair-strong)]">
              <div className="flex items-center justify-between border-b border-[var(--hair)] py-2 font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground">
                <span><b>Channels</b></span>
                {/* <span>fig. 03</span> */}
              </div>

              {channels.map((c, i) => {
                const inner = (
                  <div
                    className={`flex items-baseline justify-between gap-4 py-4 ${i === channels.length - 1
                      ? ""
                      : "border-b border-[var(--hair)]"
                      } transition-colors hover:bg-[var(--paper-tint)]`}
                  >
                    <span className="font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground">
                      {c.k}
                    </span>
                    <span className="text-right text-base font-medium text-foreground/90">
                      {c.v}
                    </span>
                  </div>
                );
                return c.href ? (
                  <a
                    key={c.k}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="block"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.k}>{inner}</div>
                );
              })}
            </div>

            <div className="mt-8 border border-dashed border-[var(--hair-strong)] p-5">
              <div className="flex items-center gap-2">
                <span className="animate-pulse-dot h-2 w-2 rounded-full bg-signal" />
                <p className="font-sans text-sm uppercase tracking-[0.15em]">
                  Currently available
                </p>
              </div>
              <p className="mt-2 text-base text-muted-foreground">
                {profile.availability}.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={onSubmit}
              className="border-t border-[var(--hair-strong)]"
            >
              <div className="flex items-center justify-between border-b border-[var(--hair)] py-2 font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground">
                <span><b>Get in touch</b></span>
                {/* <span>fields marked * required</span> */}
              </div>

              <div className="grid gap-6 py-6 sm:grid-cols-2">
                <Field
                  label="Your name *"
                  id="name"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  required
                />
                <Field
                  label="Email *"
                  id="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                  required
                />
                <div className="sm:col-span-2">
                  <Field
                    label="Subject"
                    id="subject"
                    placeholder="Let's work together"
                    value={form.subject}
                    onChange={(v) => setForm((f) => ({ ...f, subject: v }))}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label id="message">Message *</Label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    placeholder="Tell me about the role or project…"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="w-full resize-none border-b border-[var(--hair-strong)] bg-transparent py-2 font-sans text-base text-foreground placeholder:text-muted-foreground/50 focus:border-signal focus:outline-none focus:ring-0"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--hair)] pt-5">
                {/* <p className="font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground">
                  stored securely · replied within 1–2 days
                </p> */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex items-center gap-2 bg-primary px-5 py-3 font-sans text-sm uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-foreground disabled:opacity-60 font-medium"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      Send message
                    </>
                  )}
                </button>
              </div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-3 border border-signal bg-signal-dim p-4"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-signal" />
                  <p className="text-[13px] text-foreground">
                    Message received. I&apos;ll get back to you within a day or
                    two.
                  </p>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-3 border border-destructive bg-destructive/10 p-4"
                >
                  <AlertCircle className="h-4 w-4 shrink-0 text-destructive" />
                  <p className="text-[13px] text-foreground">{errorMsg}</p>
                </motion.div>
                    )}
                  </form>
                </motion.div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

function Label({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground"
    >
      {children}
    </label>
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
    <div>
      <Label id={id}>{label}</Label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b border-[var(--hair-strong)] bg-transparent py-2 font-sans text-base text-foreground placeholder:text-muted-foreground/50 focus:border-signal focus:outline-none focus:ring-0"
      />
    </div>
  );
}
