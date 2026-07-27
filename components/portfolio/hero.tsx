import { ArrowUpRight, MapPin, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon, XIcon, WhatsappIcon } from './icons'
import { personalInfo } from '@/lib/data'
import { AvatarMascot } from './avatar-mascot'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-32 md:pt-40 md:pb-44">
      {/* grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.48] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 9%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 9%) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top Row: Name Header on Left + Developer Avatar Card on Right */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl font-display">
              <span className="text-primary font-black">U</span>tsav Singh
            </h1>
            <p className="mt-2 font-mono text-sm tracking-wide text-primary sm:text-base">
              {personalInfo.title}
            </p>
          </div>

          <div className="hidden lg:block w-full lg:max-w-md">
            <AvatarMascot />
          </div>
        </div>

        {/* Generous Breathing Space Gap */}
        <h2 className="mt-14 md:mt-16 max-w-5xl text-balance text-2xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-4xl font-sans">
          I build and operate the{' '}
          <span className="font-serif italic font-normal text-primary underline decoration-primary/30 underline-offset-4">
            resilient systems
          </span>{' '}
          your product runs on.
        </h2>

        <p className="mt-6 max-w-4xl text-pretty leading-relaxed text-muted-foreground md:text-lg">
          {personalInfo.bio}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 shadow-sm"
          >
            View Work
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-5 py-3 font-mono text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            <FileText className="size-4" aria-hidden="true" />
            Resume
          </a>
          <div className="flex items-center gap-1">
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <WhatsappIcon className="size-4" />
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href={personalInfo.twitterUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="inline-flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <XIcon className="size-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <MapPin className="size-3.5" aria-hidden="true" />
          {personalInfo.location}
        </div>
      </div>
    </section>
  )
}
