import React from 'react'

export function GithubIcon({ className = 'size-4', size }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

export function LinkedinIcon({ className = 'size-4', size }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

export function WhatsappIcon({ className = 'size-4', size }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.832 0-3.626-.492-5.197-1.424l-.373-.222-3.863 1.013 1.031-3.765-.244-.389A9.972 9.972 0 0 1 2.05 11.83C2.05 6.41 6.47 2 11.89 2c2.628 0 5.099 1.025 6.958 2.887A9.784 9.784 0 0 1 21.73 11.83c0 5.42-4.42 9.84-9.84 9.84m0-18.068c-4.536 0-8.226 3.69-8.226 8.227 0 1.455.381 2.874 1.103 4.128l.169.294-.728 2.658 2.721-.714.284.168a8.196 8.196 0 0 0 4.677 1.433c4.536 0 8.226-3.69 8.226-8.227 0-2.2-.857-4.269-2.414-5.826A8.18 8.18 0 0 0 11.89 3.774" />
    </svg>
  )
}

export function XIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function AwsIcon({ className = 'size-3.5', size }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M18.75 16.48c-2.31 1.7-5.59 2.52-8.52 2.52-4.14 0-7.85-1.57-10.65-4.22-.22-.21-.05-.49.21-.33 3.04 1.83 6.84 2.92 10.74 2.92 2.62 0 5.49-.62 8.05-1.92.39-.2.72.23.17.65zm1.5-1.46c-.29-.37-.96-.44-1.49-.24-.13.05-.18.17-.07.28.69.69 1.57.48 2.06.07.12-.1.08-.24-.03-.36-1.13-1.25-2.03-3.69-2.03-5.25 0-1.89 1.13-3.32 2.87-3.32 1.48 0 2.58 1.05 2.58 2.58 0 2.1-1.39 4.88-2.61 6.06-.09.09-.04.22.09.2.62-.1 1.6-.68 2.22-1.25.13-.12.27.02.17.15-1.04 1.34-2.67 2.08-3.79 2.08-1.5 0-2.38-.85-2.38-2.18 0-1.81 1.31-4.32 2.45-5.38.1-.1.21-.05.18.08-.41 1.58-.2 3.86.32 4.96.11.23.28.32.48.24.49-.2.98-.55 1.35-1.03.11-.14.28-.01.19.14-.52.88-1.55 1.77-2.67 1.77-1.14 0-1.92-.66-1.92-1.74 0-1.61 1.18-3.88 2.37-4.88.1-.08.2-.02.16.1-.38 1.37-.17 3.3.27 4.29z" />
    </svg>
  )
}

export function OpenApiIcon({ className = 'size-3.5', size }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  )
}

export function ZustandIcon({ className = 'size-3.5', size }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m13 2-3 7h4l-3 7" />
    </svg>
  )
}

export function SqlIcon({ className = 'size-3.5', size }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

export function WebSocketIcon({ className = 'size-3.5', size }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M1 6l2.8 12h2.4l2.3-6.5L10.8 18h2.4L16 6h-2.3l-2.2 7.2L9.2 6H6.8L4.6 13.2 2.4 6H1zm15.5 8.3c.7.5 1.6.8 2.5.8 1 0 1.6-.4 1.6-1 0-.6-.5-.9-1.6-1.1l-1.1-.2c-1.6-.3-2.4-1.2-2.4-2.5 0-1.7 1.4-2.8 3.5-2.8 1.4 0 2.5.4 3.3 1.1l-1 1.4c-.6-.5-1.5-.8-2.3-.8-.9 0-1.4.4-1.4.9 0 .5.4.8 1.4 1l1.1.2c1.7.3 2.6 1.1 2.6 2.6 0 1.8-1.5 2.9-3.7 2.9-1.5 0-2.8-.5-3.6-1.3l1.1-1.2z" />
    </svg>
  )
}
