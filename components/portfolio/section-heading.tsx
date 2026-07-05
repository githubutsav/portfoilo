import React from 'react'

export function SectionHeading({
  index,
  title,
  actions,
}: {
  index: string
  title: string
  actions?: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-4 w-full">
      <span className="font-mono text-xs sm:text-sm font-semibold text-primary shrink-0">{index}</span>
      <h2 className="font-mono text-[11px] sm:text-sm uppercase tracking-wider sm:tracking-[0.2em] text-muted-foreground whitespace-nowrap shrink-0">
        {title}
      </h2>
      <span className="h-px flex-1 min-w-[8px] bg-border" aria-hidden="true" />
      {actions && <div className="flex items-center gap-2 shrink-0 whitespace-nowrap">{actions}</div>}
    </div>
  )
}
