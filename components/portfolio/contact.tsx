'use client'

import { useState } from 'react'
import { SectionHeading } from './section-heading'
import { Mail, ArrowUpRight, Copy, Check, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon, XIcon, WhatsappIcon } from './icons'
import { personalInfo, contactData } from '@/lib/data'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="scroll-mt-12 border-t border-border pt-16 pb-8 md:pt-20 md:pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="06" title="Contact" />

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-10">
          <div className="max-w-5xl">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {contactData.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground md:text-base">
              {contactData.description}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 w-full">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-3.5 py-2.5 sm:px-5 sm:py-3 font-mono text-xs sm:text-sm font-medium text-primary-foreground shadow-md transition-all hover:opacity-90 active:scale-95 w-full sm:w-auto"
                title="Click to copy email address"
              >
                {copied ? <Check className="size-4 shrink-0" /> : <Mail className="size-4 shrink-0" />}
                <span className="whitespace-nowrap">{copied ? 'Copied to Clipboard!' : personalInfo.email}</span>
                <Copy className="size-3.5 opacity-70 ml-0.5 shrink-0" />
              </button>

              <div className="grid grid-cols-2 xs:grid-cols-4 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-border bg-secondary px-2 sm:px-4 py-2.5 sm:py-3 font-mono text-xs sm:text-sm text-foreground transition-all hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:text-[#25D366] whitespace-nowrap min-w-0"
                >
                  <WhatsappIcon className="size-3.5 sm:size-4 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
                  <span className="truncate">WhatsApp</span>
                  <ArrowUpRight className="hidden sm:inline-block size-3.5 shrink-0 opacity-70 group-hover:opacity-100" aria-hidden="true" />
                </a>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-border bg-secondary px-2 sm:px-4 py-2.5 sm:py-3 font-mono text-xs sm:text-sm text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary whitespace-nowrap min-w-0"
                >
                  <GithubIcon className="size-3.5 sm:size-4 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
                  <span className="truncate">GitHub</span>
                  <ArrowUpRight className="hidden sm:inline-block size-3.5 shrink-0 opacity-70 group-hover:opacity-100" aria-hidden="true" />
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-border bg-secondary px-2 sm:px-4 py-2.5 sm:py-3 font-mono text-xs sm:text-sm text-foreground transition-all hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] whitespace-nowrap min-w-0"
                >
                  <LinkedinIcon className="size-3.5 sm:size-4 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
                  <span className="truncate">LinkedIn</span>
                  <ArrowUpRight className="hidden sm:inline-block size-3.5 shrink-0 opacity-70 group-hover:opacity-100" aria-hidden="true" />
                </a>

                <a
                  href={personalInfo.twitterUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-border bg-secondary px-2 sm:px-4 py-2.5 sm:py-3 font-mono text-xs sm:text-sm text-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary whitespace-nowrap min-w-0"
                >
                  <XIcon className="size-3.5 sm:size-4 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
                  <span className="truncate">X</span>
                  <ArrowUpRight className="hidden sm:inline-block size-3.5 shrink-0 opacity-70 group-hover:opacity-100" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Toast Notification when Email Copied */}
        {copied && (
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl border border-primary/40 bg-card/95 px-4 py-3 font-mono text-xs text-foreground shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-3">
            <span className="flex size-6 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Check className="size-3.5" />
            </span>
            <span>Copied <strong>{personalInfo.email}</strong> to clipboard!</span>
          </div>
        )}

        <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 pb-6 text-center font-mono text-xs text-muted-foreground sm:flex-row sm:pb-0 sm:text-left">
          <p>© {new Date().getFullYear()} {contactData.footerCopyright}</p>

          {/* Social Links + Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <WhatsappIcon className="size-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="X Profile"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <XIcon className="size-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4" />
              </a>
            </div>

            <a
              href="#top"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <span>Back to top</span>
              <ArrowUp className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}
