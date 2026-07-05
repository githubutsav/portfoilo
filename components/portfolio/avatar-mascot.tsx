'use client'

import { useState } from 'react'

const speechQuotes = [
  "Meow! I'm Utsav's Terminal Cat — welcome to the portfolio!",
  'I build scalable full-stack apps & cloud systems',
  'GDG Cloud Mentor & 2nd Place Hackathon Winner!',
  "Need a developer? Let's build something awesome!",
]

export function AvatarMascot() {
  const [quoteIndex, setQuoteIndex] = useState(0)

  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % speechQuotes.length)
  }

  return (
    <div
      onClick={handleNextQuote}
      className="group relative flex cursor-pointer items-center gap-4 rounded-2xl border border-primary/30 bg-card/80 p-4 backdrop-blur-md transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Sleek Terminal Cat Icon */}
      <div className="relative flex size-12 shrink-0 items-center justify-center">
        <div className="relative flex flex-col items-center transition-transform duration-300 group-hover:scale-110">
          {/* Pixel Cat Ears */}
          <div className="flex w-6 justify-between px-0.5">
            <div className="size-1.5 bg-primary rounded-t-xs" />
            <div className="size-1.5 bg-primary rounded-t-xs" />
          </div>

          {/* Pixel Screen Head */}
          <div className="relative flex h-7 w-9 flex-col items-center justify-center rounded-md border-2 border-primary/80 bg-black p-0.5 shadow-[0_0_12px_rgba(34,197,94,0.4)]">
            {/* Glowing Pixel Eyes */}
            <div className="flex w-full justify-around px-1">
              <div className="h-2.5 w-1.5 rounded-xs bg-primary shadow-[0_0_8px_rgba(34,197,94,0.9)] animate-pulse" />
              <div className="h-2.5 w-1.5 rounded-xs bg-primary shadow-[0_0_8px_rgba(34,197,94,0.9)] animate-pulse" />
            </div>
          </div>

          {/* Tiny Pixel Legs */}
          <div className="flex w-6 justify-between px-1 -mt-0.5">
            <div className="h-1.5 w-1 bg-primary rounded-b-xs" />
            <div className="h-1.5 w-1 bg-primary rounded-b-xs" />
          </div>
        </div>
      </div>

      {/* Interactive Speech Bubble Box */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-end font-mono text-[10px] text-muted-foreground">
          <span>(click to talk)</span>
        </div>
        <p className="mt-0.5 font-mono text-xs text-foreground transition-all duration-300">
          &quot;{speechQuotes[quoteIndex]}&quot;
        </p>
      </div>
    </div>
  )
}
