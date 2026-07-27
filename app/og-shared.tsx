import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Utsav Singh — Full-Stack • Cloud • AI Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export async function generateOGImage() {
  let profileImageData: string | null = null

  try {
    const candidateNames = ['photo.jpeg', 'photo.jpg', 'profile.png', 'profile.jpeg', 'profile.jpg', 'photo.png']
    let foundBuffer: Buffer | null = null
    let foundMime = 'image/jpeg'

    for (const name of candidateNames) {
      try {
        const filePath = join(process.cwd(), 'app', 'assets', name)
        foundBuffer = await readFile(filePath)
        foundMime = name.endsWith('.png') ? 'image/png' : 'image/jpeg'
        break
      } catch (e) {
        // try next
      }
    }

    if (foundBuffer) {
      profileImageData = `data:${foundMime};base64,${foundBuffer.toString('base64')}`
    }
  } catch (error) {
    console.error('Error reading image from app/assets/ for OG image:', error)
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '36px',
          backgroundColor: '#0c0e10',
          padding: '0 48px',
          boxSizing: 'border-box',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        {/* Top subtle primary green ambient accent border line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(to right, transparent, rgba(34, 197, 94, 0.5), transparent)',
          }}
        />

        {/* Left Side Information */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '540px',
          }}
        >
          {/* Name Header */}
          <h1
            style={{
              fontSize: '66px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-2px',
              margin: '0 0 12px 0',
              lineHeight: 1.05,
            }}
          >
            Utsav Singh
          </h1>

          {/* Role Subtitle */}
          <div
            style={{
              fontSize: '26px',
              fontWeight: 600,
              color: '#4ade80',
              letterSpacing: '0.2px',
              margin: '0 0 22px 0',
              lineHeight: 1.25,
            }}
          >
            Full-Stack • Cloud • AI Engineer
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '22px',
              fontWeight: 400,
              color: '#94a3b8',
              margin: '0 0 36px 0',
              lineHeight: 1.45,
              maxWidth: '500px',
            }}
          >
            Building scalable software, cloud infrastructure &amp; AI products.
          </p>

          {/* Domain Pill at Bottom Left */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.4)',
                padding: '8px 22px',
                borderRadius: '9999px',
                color: '#4ade80',
                fontSize: '18px',
                fontWeight: 600,
                letterSpacing: '0.5px',
              }}
            >
              iamutsav.dev
            </div>
          </div>
        </div>

        {/* Right Side Portrait Frame with Localized Green Halo Matching Image 1 Exactly */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Soft Localized Green Halo Ring strictly behind the photo */}
          <div
            style={{
              position: 'absolute',
              width: '450px',
              height: '450px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(34, 197, 94, 0.28)',
              filter: 'blur(35px)',
            }}
          />

          <div
            style={{
              width: '410px',
              height: '410px',
              borderRadius: '9999px',
              border: '2.5px solid rgba(34, 197, 94, 0.55)',
              boxShadow: '0 0 50px rgba(34, 197, 94, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              backgroundColor: '#0c0e10',
              position: 'relative',
            }}
          >
            {profileImageData ? (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  position: 'relative',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={profileImageData}
                  alt="Utsav Singh"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '9999px',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                  }}
                />
                {/* Subtle Inner Edge Vignette Blending Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '9999px',
                    boxShadow: 'inset 0 0 40px rgba(9, 11, 13, 0.75)',
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '76px',
                  fontWeight: 800,
                  color: '#4ade80',
                }}
              >
                US
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
