import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Award, Trophy, Star, Zap, Cloud, Users, Rocket, MapPin, Calendar, Camera } from 'lucide-react'
import { SiKubernetes, SiGithub } from '@icons-pack/react-simple-icons'
import { achievementsData, personalInfo } from '@/lib/data'
import { cn } from '@/lib/utils'
import React from 'react'

export const metadata: Metadata = {
  title: `Achievements — ${personalInfo.name}`,
  description: `Explore hackathon awards, mentorship roles, and certifications earned by ${personalInfo.name}.`,
}

const customIconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Trophy,
  Star: SiGithub,
  Zap,
  Award,
  Users,
  Rocket,
  Kubernetes: SiKubernetes,
  AWS: Cloud,
  Camera,
}

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
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

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Header navigation */}
        <div className="flex items-center justify-between gap-4 border-b border-border pb-8">
          <Link
            href="/#achievements"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Title */}
        <div className="mt-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary whitespace-nowrap">
            <span>Recognitions</span>
            <span>•</span>
            <span>{achievementsData.length} Achievements<span className="hidden sm:inline"> & Certs</span></span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Achievements & Certifications
          </h1>
          <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            A complete log of hackathon awards, developer community leadership roles, certifications, and technical milestones.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievementsData.map((item) => {
            let IconComponent: React.ComponentType<{ className?: string; size?: number }> = Award
            if (item.category?.toLowerCase().includes('hackathon') || item.iconName === 'Trophy') {
              IconComponent = Trophy
            } else if (item.category?.toLowerCase().includes('mentor') || item.iconName === 'Users') {
              IconComponent = Users
            } else if (item.category?.toLowerCase().includes('community') || item.iconName === 'Star') {
              IconComponent = Camera
            } else if (customIconMap[item.iconName]) {
              IconComponent = customIconMap[item.iconName]
            }

            const isWhiteBgCard =
              item.title.toLowerCase().includes('postman') ||
              item.title.toLowerCase().includes('supervised machine learning') ||
              item.title.toLowerCase().includes('machine learning') ||
              item.title.toLowerCase().includes('solution challenge') ||
              Boolean(
                item.imageUrl &&
                  (item.imageUrl.toLowerCase().includes('postman') ||
                    item.imageUrl.toLowerCase().includes('ml.png') ||
                    item.imageUrl.toLowerCase().includes('solutionchallenge'))
              )

            return (
              <div
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Top Banner section matching screenshot */}
                <div
                  className={cn(
                    'relative aspect-[16/10] w-full overflow-hidden p-4',
                    isWhiteBgCard ? 'bg-white' : 'bg-gradient-to-br from-card via-secondary/70 to-primary/10'
                  )}
                >
                  {item.imageUrl && (
                    item.imageUrl.toLowerCase().endsWith('.pdf') ? (
                      <iframe
                        src={`${item.imageUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                        title={item.title}
                        className="absolute inset-0 size-full border-0 pointer-events-none origin-top scale-110"
                        tabIndex={-1}
                      />
                    ) : (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className={cn(
                          'absolute inset-0 size-full transition-all duration-500 group-hover:scale-105',
                          isWhiteBgCard ? 'object-contain p-2 bg-white' : 'object-cover'
                        )}
                      />
                    )
                  )}

                  {!isWhiteBgCard && (
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-black/30 via-25% to-transparent pointer-events-none" />
                  )}

                  <div className="relative z-10 flex h-full w-full flex-col justify-between pointer-events-none">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full border border-primary/30 bg-background/80 px-2.5 py-0.5 font-mono text-[10px] font-medium text-primary backdrop-blur-md">
                        {item.category || 'Achievement'}
                      </span>
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary border border-primary/20 backdrop-blur-md">
                        <IconComponent className="size-3.5" aria-hidden="true" />
                      </span>
                    </div>

                    <div
                      className={cn(
                        'font-mono text-xs font-bold',
                        isWhiteBgCard ? 'text-zinc-900 drop-shadow-none' : 'text-foreground drop-shadow-sm'
                      )}
                    >
                      {item.badge}
                    </div>
                  </div>
                </div>

                {/* Bottom Content section */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    {item.linkUrl ? (
                      <a
                        href={item.linkUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/title inline-flex items-start gap-1 text-base font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
                      >
                        <span>{item.title}</span>
                        <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5 group-hover/title:text-primary" />
                      </a>
                    ) : (
                      <h2 className="text-base font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h2>
                    )}
                    <p className="mt-2 text-pretty text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-border/60 pt-3 font-mono text-[11px] text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 min-w-0 flex-1">
                      <MapPin className="size-3.5 shrink-0 text-primary" />
                      <span className="truncate" title={item.issuer}>{item.issuer}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 shrink-0">
                      <Calendar className="size-3.5 text-primary" />
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
