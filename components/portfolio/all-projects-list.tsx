'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowUpRight, X, Check, Layers, Globe } from 'lucide-react'
import { GithubIcon } from './icons'
import { projectsData } from '@/lib/data'
import { cn } from '@/lib/utils'

// 100% Dynamic Tags Container — Calculates exact visible tags based on container width
function DynamicTagsList({ tags }: { tags: string[] }) {
  const containerRef = useRef<HTMLUListElement>(null)
  const [visibleCount, setVisibleCount] = useState<number>(tags.length)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const updateVisibleTags = () => {
      const containerWidth = el.clientWidth
      if (containerWidth <= 0) return

      const items = Array.from(el.querySelectorAll<HTMLElement>('[data-tag-item]'))
      const gap = 8 // gap-2 = 8px
      const badgeWidth = 32 // badge size for +N

      let accumulatedWidth = 0
      let count = 0

      for (let i = 0; i < tags.length; i++) {
        const itemWidth = items[i]?.offsetWidth || 65
        const isLastTag = i === tags.length - 1
        const requiredSpace = accumulatedWidth + itemWidth + (isLastTag ? 0 : gap + badgeWidth)

        if (requiredSpace <= containerWidth) {
          accumulatedWidth += itemWidth + gap
          count++
        } else {
          break
        }
      }

      setVisibleCount(Math.max(1, Math.min(count, tags.length)))
    }

    updateVisibleTags()

    const observer = new ResizeObserver(() => {
      updateVisibleTags()
    })
    observer.observe(el)

    return () => observer.disconnect()
  }, [tags])

  const hiddenCount = tags.length - visibleCount

  return (
    <ul ref={containerRef} className="flex items-center gap-2 overflow-hidden flex-nowrap shrink min-w-0 w-full">
      {tags.map((tag, idx) => (
        <li
          key={tag}
          data-tag-item
          className={cn(
            'inline-flex shrink-0 items-center gap-1 rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground whitespace-nowrap',
            idx >= visibleCount && 'hidden'
          )}
        >
          <span className="text-primary">#</span>
          <span>{tag}</span>
        </li>
      ))}

      {hiddenCount > 0 && (
        <li className="rounded border border-primary/30 bg-primary/10 px-2 py-1 font-mono text-xs font-medium text-primary shrink-0 whitespace-nowrap">
          +{hiddenCount}
        </li>
      )}
    </ul>
  )
}

export function AllProjectsList() {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)

  return (
    <>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projectsData.map((project) => (
          <article
            key={project.name}
            onClick={() => setSelectedProject(project)}
            className="group flex w-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-border bg-card p-5 sm:p-6 md:p-8 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {project.name}
                  </h2>
                  <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} source code`}
                      title="View GitHub repository"
                      className="inline-flex size-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40"
                    >
                      <GithubIcon className="size-4" />
                    </a>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.name} live web app`}
                        title="Open live web app"
                        className="inline-flex size-8 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                      >
                        <Globe className="size-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground line-clamp-3 min-h-[4.25rem]">
                  {project.blurb}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 md:gap-6">
                {project.metrics.map((m) => (
                  <div key={m.k}>
                    <div className="font-mono text-base font-semibold text-primary">{m.v}</div>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{m.k}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 border-t border-border pt-4">
              <div className="flex items-center justify-between gap-3 min-h-[1.5rem] overflow-hidden">
                <DynamicTagsList tags={project.tags} />

                <span className="inline-flex shrink-0 items-center gap-1 font-mono text-xs text-primary/80 transition-opacity group-hover:opacity-100 sm:opacity-0 whitespace-nowrap">
                  <span>details</span>
                  <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-primary/30 bg-card shadow-2xl animate-in zoom-in-95"
          >
            {/* Project Image Banner */}
            {selectedProject.imageUrl && (
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.name}
                  className="size-full object-contain p-2 transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-black/40 pointer-events-none" />
                
                {/* Close Button at Top Right */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-3 top-3 sm:right-4 sm:top-4 z-30 flex size-9 items-center justify-center rounded-full border border-border/80 bg-black/80 text-white backdrop-blur-md transition-colors hover:bg-secondary hover:text-foreground shadow-lg"
                  aria-label="Close project modal"
                >
                  <X className="size-4" />
                </button>

                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-6 z-10 flex flex-wrap gap-1.5 sm:gap-2 max-w-[85%]">
                  {selectedProject.metrics.map((m) => (
                    <span
                      key={m.k}
                      className="rounded-md border border-primary/40 bg-black/90 px-2 py-0.5 sm:px-2.5 sm:py-1 font-mono text-[10px] sm:text-xs text-primary backdrop-blur-md"
                    >
                      {m.k}: <strong>{m.v}</strong>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Render Close button fallback if image is missing */}
            {!selectedProject.imageUrl && (
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-3 top-3 sm:right-4 sm:top-4 z-30 flex size-9 items-center justify-center rounded-full border border-border bg-black/80 text-muted-foreground backdrop-blur-md transition-colors hover:bg-secondary hover:text-foreground"
                aria-label="Close project modal"
              >
                <X className="size-4" />
              </button>
            )}

            {/* Modal Body */}
            <div className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">{selectedProject.name}</h3>
                </div>

                {/* Primary Action CTA Buttons */}
                <div className="flex flex-row items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                  {selectedProject.liveUrl && selectedProject.liveUrl !== '#' ? (
                    <>
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 sm:px-4 sm:py-2.5 font-mono text-[11px] sm:text-xs font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 whitespace-nowrap"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="size-3 sm:size-3.5 shrink-0" />
                      </a>

                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-secondary px-3 py-2 sm:px-4 sm:py-2.5 font-mono text-[11px] sm:text-xs font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary whitespace-nowrap"
                      >
                        <GithubIcon className="size-3.5 sm:size-4 shrink-0" />
                        <span className="hidden min-[380px]:inline">View Source Code</span>
                        <span className="inline min-[380px]:hidden">Source Code</span>
                        <ArrowUpRight className="size-3 sm:size-3.5 shrink-0" />
                      </a>
                    </>
                  ) : (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 sm:px-4 sm:py-2.5 font-mono text-[11px] sm:text-xs font-semibold text-primary-foreground shadow-md transition-all hover:opacity-90 whitespace-nowrap"
                    >
                      <GithubIcon className="size-3.5 sm:size-4 shrink-0" />
                      <span>View Source Code</span>
                      <ArrowUpRight className="size-3 sm:size-3.5 shrink-0" />
                    </a>
                  )}
                </div>
              </div>

              {/* Long Description */}
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                {selectedProject.longDescription || selectedProject.blurb}
              </p>

              {/* Architecture & Tech Stack Section (Elevated for Recruiter Impact) */}
              {selectedProject.architecture && (
                <div className="mt-5 rounded-xl border border-primary/30 bg-primary/5 p-4 backdrop-blur-xs">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-primary">
                    <Layers className="size-4" />
                    <span>Architecture & System Design</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/90 font-medium">
                    {selectedProject.architecture}
                  </p>
                </div>
              )}

              {/* Key Features Section */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-mono text-xs uppercase tracking-wider font-semibold text-primary">
                    Key Features & Highlights
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {selectedProject.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                        <Check className="size-4 shrink-0 text-primary mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
