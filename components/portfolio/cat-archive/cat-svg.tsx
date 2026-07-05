'use client'

interface CatSvgProps {
  isSleeping?: boolean
  isWalking?: boolean
  className?: string
}

export function CatSvg({ isSleeping = false, isWalking = false, className = '' }: CatSvgProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`size-14 overflow-visible shrink-0 ${className}`}
    >
      {/* Curved Tail with Wiggle Animation */}
      <g className={isWalking && !isSleeping ? 'animate-cat-tail origin-bottom-right' : 'transition-transform duration-300'}>
        <path
          d="M 44,40 C 56,36 60,20 54,10 C 50,4 43,8 47,14 C 52,22 46,30 38,36"
          className="stroke-primary"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Pointed Ears with Inner Ear Pink/Accent Detail */}
      {/* Left Ear */}
      <path
        d="M 16,22 L 8,4 L 27,15 Z"
        className="fill-card stroke-primary"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M 16,20 L 11,8 L 24,15 Z"
        className="fill-primary/30"
      />

      {/* Right Ear */}
      <path
        d="M 48,22 L 56,4 L 37,15 Z"
        className="fill-card stroke-primary"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M 48,20 L 53,8 L 40,15 Z"
        className="fill-primary/30"
      />

      {/* Cat Head */}
      <ellipse
        cx="32"
        cy="26"
        rx="18"
        ry="14"
        className="fill-card stroke-primary"
        strokeWidth="2"
      />

      {/* Cheeks / Whisker Pads */}
      <ellipse cx="27" cy="30" rx="4" ry="2.5" className="fill-primary/10" />
      <ellipse cx="37" cy="30" rx="4" ry="2.5" className="fill-primary/10" />

      {/* Whiskers */}
      {/* Left Whiskers */}
      <line x1="16" y1="24" x2="2" y2="21" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="27" x2="1" y2="28" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="30" x2="3" y2="34" className="stroke-primary/70" strokeWidth="1.2" strokeLinecap="round" />

      {/* Right Whiskers */}
      <line x1="48" y1="24" x2="62" y2="21" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="48" y1="27" x2="63" y2="28" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="48" y1="30" x2="61" y2="34" className="stroke-primary/70" strokeWidth="1.2" strokeLinecap="round" />

      {/* Eyes */}
      {isSleeping ? (
        <>
          {/* Sleeping Happy Closed Eyes "^ ^" */}
          <path d="M 21 23 Q 25 27 29 23" className="stroke-primary" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M 35 23 Q 39 27 43 23" className="stroke-primary" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        </>
      ) : (
        <>
          {/* Large Expressive Cat Eyes */}
          <ellipse cx="24" cy="23" rx="4" ry="4.5" className="fill-primary" />
          <circle cx="25.5" cy="21" r="1.5" className="fill-background" />
          <ellipse cx="40" cy="23" rx="4" ry="4.5" className="fill-primary" />
          <circle cx="41.5" cy="21" r="1.5" className="fill-background" />
        </>
      )}

      {/* Cute Triangle Cat Nose */}
      <path d="M 32 29 L 30 27 L 34 27 Z" className="fill-primary" />

      {/* Cute Cat Mouth (:3 style) */}
      <path
        d="M 28.5 31 C 30.5 33.5 32 32.5 32 30.5 C 32 32.5 33.5 33.5 35.5 31"
        className="stroke-primary"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Back Thighs (Hind Legs Silhouette) */}
      <path
        d="M 19 40 C 12 43 14 51 21 53"
        className="fill-card stroke-primary"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 45 40 C 52 43 50 51 43 53"
        className="fill-card stroke-primary"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Cat Body */}
      <ellipse
        cx="32"
        cy="41"
        rx="14"
        ry="9"
        className="fill-card stroke-primary"
        strokeWidth="2"
      />

      {/* Front Legs & Paws */}
      {/* Left Front Leg */}
      <g className={isWalking && !isSleeping ? 'animate-cat-leg-left origin-[24px_40px]' : ''}>
        <path
          d="M 21 40 L 21 51 A 3 3 0 0 0 27 51 L 27 40"
          className="fill-card stroke-primary"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Paw Toe Lines */}
        <line x1="24" y1="49" x2="24" y2="53" className="stroke-primary" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* Right Front Leg */}
      <g className={isWalking && !isSleeping ? 'animate-cat-leg-right origin-[40px_40px]' : ''}>
        <path
          d="M 37 40 L 37 51 A 3 3 0 0 0 43 51 L 43 40"
          className="fill-card stroke-primary"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Paw Toe Lines */}
        <line x1="40" y1="49" x2="40" y2="53" className="stroke-primary" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  )
}
