import { ImageResponse } from 'next/og'

export const alt = 'Utsav Singh — Full-Stack Cloud & DevOps Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#0a0d0f',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'rgba(34, 197, 94, 0.15)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '9999px',
            padding: '8px 20px',
            fontSize: '18px',
            color: '#22c55e',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
            }}
          />
          <span>Full-Stack Cloud, Backend & DevOps Engineer</span>
        </div>

        <h1
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#f3f4f6',
            lineHeight: 1.1,
            margin: 0,
            marginBottom: '24px',
          }}
        >
          Utsav Singh
        </h1>

        <p
          style={{
            fontSize: '28px',
            color: '#9ca3af',
            margin: 0,
            maxWidth: '900px',
            lineHeight: 1.4,
          }}
        >
          Building & operating resilient backend systems, cloud infrastructure, APIs, and DevOps pipelines.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '48px',
          }}
        >
          {['TypeScript', 'React', 'Next.js', 'Node.js', 'Kubernetes', 'AWS', 'Docker'].map((tech) => (
            <div
              key={tech}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '16px',
                color: '#d1d5db',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
