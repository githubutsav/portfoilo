import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/portfolio/icons'
import { AllProjectsList } from '@/components/portfolio/all-projects-list'
import { projectsData, personalInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: `Projects — ${personalInfo.name}`,
  description: `Explore all projects and web applications built by ${personalInfo.name}.`,
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Background backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.48] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 9%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 9%) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-24">
        {/* Header navigation */}
        <div className="flex items-center justify-between gap-2 border-b border-border pb-6 sm:pb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 sm:gap-2 font-mono text-xs sm:text-sm text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
          >
            <ArrowLeft className="size-3.5 sm:size-4" />
            <span>Back to Home</span>
          </Link>
          <a
            href="https://github.com/githubutsav?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 sm:gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary whitespace-nowrap"
          >
            <GithubIcon className="size-3.5 sm:size-4" />
            <span>GitHub <span className="hidden sm:inline">Repositories</span></span>
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        {/* Page Title */}
        <div className="mt-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary whitespace-nowrap max-w-full overflow-x-auto">
            <span>Portfolio</span>
            <span>•</span>
            <span>{projectsData.length} Projects</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            All Projects & Works
          </h1>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            A comprehensive showcase of web applications, AI tools, backend microservices, and open-source contributions.
          </p>
        </div>

        {/* Projects Grid with interactive Modal */}
        <AllProjectsList />
      </div>
    </main>
  )
}
