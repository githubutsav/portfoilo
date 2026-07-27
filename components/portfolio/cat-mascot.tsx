'use client'

import { useEffect, useRef, useState } from 'react'
import { Heart } from 'lucide-react'

export function CatMascot() {
  const [pos, setPos] = useState({ x: 100, y: 300 })
  const [target, setTarget] = useState({ x: 200, y: 300 })
  const [isWalking, setIsWalking] = useState(true)
  const [isSleeping, setIsSleeping] = useState(false)
  const [isPurring, setIsPurring] = useState(false)
  const [facingLeft, setFacingLeft] = useState(false)

  const idleTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize position on client mount & listen for double-click summon
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMob = window.innerWidth < 768
      const bottomY = window.innerHeight - 56

      const initialX = Math.random() * (window.innerWidth - 100) + 20
      const initialY = isMob ? bottomY : Math.random() * (window.innerHeight - 200) + 100

      setPos({ x: initialX, y: initialY })
      setTarget({ x: initialX + 100, y: initialY })
      setIsWalking(true)

      // Double-click / Tap to summon Cat to X coordinate!
      const handleSummon = (e: MouseEvent) => {
        const mob = window.innerWidth < 768
        const targetY = mob ? window.innerHeight - 56 : e.clientY - 20
        setTarget({ x: e.clientX - 20, y: targetY })
        setIsSleeping(false)
        setIsWalking(true)
      }

      window.addEventListener('dblclick', handleSummon)
      return () => window.removeEventListener('dblclick', handleSummon)
    }
  }, [])

  // Idle timer: sleeps after 7 seconds of inactivity, wakes on mousemove/scroll
  useEffect(() => {
    const resetIdleTimer = () => {
      setIsSleeping(false)
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)

      idleTimerRef.current = setTimeout(() => {
        setIsSleeping(true)
        setIsWalking(false)
      }, 7000)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', resetIdleTimer)
      window.addEventListener('scroll', resetIdleTimer)
      window.addEventListener('touchstart', resetIdleTimer)
      resetIdleTimer()
    }

    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', resetIdleTimer)
        window.removeEventListener('scroll', resetIdleTimer)
        window.removeEventListener('touchstart', resetIdleTimer)
      }
    }
  }, [])

  // Pick random path every 5 seconds (when not sleeping)
  useEffect(() => {
    if (isSleeping) return

    const pickNewTarget = () => {
      if (typeof window === 'undefined') return

      const w = window.innerWidth
      const h = window.innerHeight
      const isMob = w < 768

      if (isMob) {
        // Mobile mode: strictly horizontal movement along the bottom edge!
        const bottomY = h - 56
        const nextX = Math.random() * (w - 80) + 20
        setTarget({ x: nextX, y: bottomY })
      } else {
        // Desktop mode: 2D roaming across entire screen
        const rand = Math.random()
        let nextX = Math.random() * (w - 120) + 40
        let nextY = Math.random() * (h - 160) + 80

        if (rand < 0.2) {
          nextX = -80 // wander off left edge
        } else if (rand < 0.4) {
          nextX = w + 40 // wander off right edge
        }

        setTarget({ x: nextX, y: nextY })
      }
      setIsWalking(true)
    }

    const interval = setInterval(pickNewTarget, 4500)
    return () => clearInterval(interval)
  }, [isSleeping])

  // Smooth Movement Loop towards target
  useEffect(() => {
    if (isSleeping) return

    let animId: number

    const moveStep = () => {
      setPos((current) => {
        const dx = target.x - current.x
        const dy = target.y - current.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 4) {
          setIsWalking(false)

          // If cat walked offscreen on desktop, teleport to opposite side!
          if (typeof window !== 'undefined') {
            const w = window.innerWidth
            const isMob = w < 768

            if (!isMob) {
              if (current.x < -60) {
                const reInY = Math.random() * (window.innerHeight - 200) + 100
                setTarget({ x: 100, y: reInY })
                setIsWalking(true)
                return { x: w + 40, y: reInY }
              }
              if (current.x > w + 20) {
                const reInY = Math.random() * (window.innerHeight - 200) + 100
                setTarget({ x: w - 140, y: reInY })
                setIsWalking(true)
                return { x: -60, y: reInY }
              }
            }
          }

          return current
        }

        setIsWalking(true)

        const speed = 2.5
        const vx = (dx / dist) * speed
        const vy = (dy / dist) * speed

        if (vx < -0.1) setFacingLeft(true)
        if (vx > 0.1) setFacingLeft(false)

        return {
          x: current.x + vx,
          y: current.y + vy,
        }
      })

      animId = requestAnimationFrame(moveStep)
    }

    animId = requestAnimationFrame(moveStep)
    return () => cancelAnimationFrame(animId)
  }, [target, isSleeping])

  const handleCatClick = () => {
    setIsSleeping(false)
  }

  return (
    <div
      style={{
        position: 'fixed',
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: `scaleX(${facingLeft ? -1 : 1})`,
        transition: 'transform 0.2s linear',
      }}
      className="z-50 flex flex-col items-center pointer-events-auto select-none"
    >
      {/* Clean Transparent Floating Zzz... sleeping text */}
      {isSleeping && (
        <div className="absolute -top-7 animate-bounce font-mono text-xs font-bold text-primary tracking-wider">
          Zzz...
        </div>
      )}

      {/* Purring Hearts on hover */}
      {isPurring && !isSleeping && (
        <div className="absolute -top-7 flex items-center gap-1 font-mono text-[10px] text-primary animate-in fade-in zoom-in">
          <Heart className="size-3 fill-primary text-primary animate-ping" />
          <span>purrr...</span>
        </div>
      )}

      {/* Pure 8-Bit Pixel Art Terminal Cat (No speech bubble!) */}
      <div
        onClick={handleCatClick}
        onMouseEnter={() => setIsPurring(true)}
        onMouseLeave={() => setIsPurring(false)}
        title={isSleeping ? 'Terminal Cat is sleeping... move mouse to wake!' : 'Double-click page to summon me!'}
        className="group relative cursor-pointer flex flex-col items-center p-1 transition-transform hover:scale-110 active:scale-95"
      >
        {/* Pixel Cat Ears */}
        <div className="flex w-7 justify-between px-0.5">
          <div className="size-1.5 bg-primary rounded-t-xs" />
          <div className="size-1.5 bg-primary rounded-t-xs" />
        </div>

        {/* Pixel Screen Head */}
        <div className="relative flex h-7 w-9 flex-col items-center justify-center rounded-md border-2 border-primary/90 bg-black p-1">
          {/* Pixel Tail Wiggling on Side */}
          <div
            className={`absolute -right-2 top-2 h-3 w-1 rounded-full bg-primary origin-top ${
              isWalking && !isSleeping ? 'animate-cat-tail' : ''
            }`}
          />

          {/* Top Screen Controls */}
          <div className="flex w-full justify-start gap-0.5 mb-0.5 px-0.5">
            <div className="size-1 rounded-full bg-primary" />
            <div className="size-1 rounded-full bg-primary/40" />
          </div>

          {/* Pixel Eyes (Symmetric Sleeping Bars when asleep) */}
          <div className="flex w-full justify-around px-1">
            {isSleeping ? (
              <>
                <div className="h-0.5 w-2 rounded-full bg-primary" />
                <div className="h-0.5 w-2 rounded-full bg-primary" />
              </>
            ) : (
              <>
                <div className="h-2.5 w-1.5 rounded-xs bg-primary" />
                <div className="h-2.5 w-1.5 rounded-xs bg-primary" />
              </>
            )}
          </div>
        </div>

        {/* Alternating Pixel Walking Legs */}
        <div className="flex w-6 justify-between px-1 -mt-0.5">
          <div
            className={`h-2.5 w-1.5 bg-primary rounded-b-xs origin-top ${
              isWalking && !isSleeping ? 'animate-cat-leg-left' : ''
            }`}
          />
          <div
            className={`h-2.5 w-1.5 bg-primary rounded-b-xs origin-top ${
              isWalking && !isSleeping ? 'animate-cat-leg-right' : ''
            }`}
          />
        </div>
      </div>
    </div>
  )
}
