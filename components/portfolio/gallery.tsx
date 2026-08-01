'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SectionHeading } from './section-heading'
import { MapPin, Calendar, X, Video, Maximize2 } from 'lucide-react'
import { galleryData } from '@/lib/data'
import { getStaticAsset } from '@/lib/assets'
import { cn } from '@/lib/utils'

function SmartImage({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  const asset = getStaticAsset(src)
  if (typeof asset === 'object' && asset !== null) {
    return (
      <Image
        src={asset}
        alt={alt}
        placeholder="blur"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={className}
      />
    )
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={className}
    />
  )
}

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<(typeof galleryData)[0] | null>(null)
  const [activeFocusedPhoto, setActiveFocusedPhoto] = useState<string | null>(null)

  // Helper to render a photo or video tile matching the user's wireframe
  const renderTile = (item: (typeof galleryData)[0], heightClass: string, keyPrefix: string) => {
    return (
      <div
        key={`${keyPrefix}-${item.id}`}
        onClick={() => {
          setSelectedItem(item)
          setActiveFocusedPhoto(null)
        }}
        className={cn(
          'group relative cursor-pointer overflow-hidden rounded-3xl border-2 border-border/80 bg-card shadow-lg transition-all duration-500 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10',
          heightClass,
        )}
      >
        {/* Media Container with Monochromatic Filter */}
        <div className="relative size-full overflow-hidden bg-black">
          {item.imageUrl ? (
            <SmartImage
              src={item.imageUrl}
              alt={item.title}
              priority={true}
              className="size-full object-cover object-top grayscale contrast-125 brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
            />
          ) : item.videoUrl ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              src={item.videoUrl}
              className="size-full object-cover grayscale contrast-125 brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
            />
          ) : null}

          {/* Hover Overlay with Vignette & Title */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 opacity-90 transition-opacity duration-300 group-hover:opacity-95" />

          {/* Badge Tag at top left */}
          <div className="absolute left-3.5 top-3.5 flex gap-2 z-10">
            <span className="rounded-full border border-primary/40 bg-black/80 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-primary backdrop-blur-md">
              {item.badge}
            </span>
          </div>


          {/* Content at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5 text-foreground">
            <div className="flex items-center justify-between font-mono text-[11px] text-muted-foreground">
              <span className="text-primary font-medium">{item.category}</span>
              <span>{item.date}</span>
            </div>
            <h3 className="mt-1 text-base font-semibold tracking-tight text-white transition-colors group-hover:text-primary sm:text-lg line-clamp-2">
              {item.title}
            </h3>
            <p className="mt-1.5 flex items-center gap-1 line-clamp-1 font-mono text-[11px] text-zinc-400">
              <MapPin className="size-3 shrink-0 text-primary" />
              <span>{item.location}</span>
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Dynamically arrange all gallery cards into balanced vertical columns for infinite marquee loop
  const renderBentoColumns = (keyPrefix: string) => {
    const isItemTall = (item: (typeof galleryData)[0]) =>
      item.cardType === 'tall' || (item.imageUrl && item.imageUrl.includes('-tall'))

    const tallItems = galleryData.filter(isItemTall)
    const wideItems = galleryData.filter((item) => !isItemTall(item))

    const maxCount = Math.max(tallItems.length, wideItems.length)
    const columns: Array<{ item1: (typeof galleryData)[0]; item2: (typeof galleryData)[0]; h1: string; h2: string }> = []

    for (let i = 0; i < maxCount; i++) {
      const tall = tallItems[i % tallItems.length]
      const wide = wideItems[i % wideItems.length]

      if (i % 2 === 0) {
        columns.push({ item1: tall, item2: wide, h1: 'h-[290px]', h2: 'h-[185px]' })
      } else {
        columns.push({ item1: wide, item2: tall, h1: 'h-[185px]', h2: 'h-[290px]' })
      }
    }

    return (
      <div key={keyPrefix} className="flex gap-3.5">
        {columns.map((col, idx) => (
          <div key={`${keyPrefix}-col-${idx}`} className="flex w-[210px] shrink-0 flex-col gap-3.5 sm:w-[250px] md:w-[270px]">
            {renderTile(col.item1, col.h1, keyPrefix)}
            {renderTile(col.item2, col.h2, keyPrefix)}
          </div>
        ))}
      </div>
    )
  }

  return (
    <section id="gallery" className="scroll-mt-4 border-t border-border py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="05" title="Event & Hackathon Gallery" />
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="group relative mt-8 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
          {renderBentoColumns('set1')}
          {renderBentoColumns('set2')}
          {renderBentoColumns('set3')}
        </div>
      </div>

      {/* Lightbox Bento Grid Gallery Modal */}
      {selectedItem && (
        <div
          onClick={() => {
            setSelectedItem(null)
            setActiveFocusedPhoto(null)
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-primary/30 bg-card p-6 md:p-8 shadow-2xl animate-in zoom-in-95"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => {
                setSelectedItem(null)
                setActiveFocusedPhoto(null)
              }}
              className="absolute right-4 top-4 z-20 flex size-9 items-center justify-center rounded-full border border-border bg-black/80 text-muted-foreground backdrop-blur-md transition-colors hover:text-foreground hover:bg-secondary"
            >
              <X className="size-4" />
            </button>

            {/* Event Header */}
            <div className="pr-10 sm:pr-12">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-medium text-primary whitespace-nowrap">
                  {selectedItem.category}
                </span>
                <span className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs font-semibold text-foreground whitespace-nowrap">
                  {selectedItem.badge}
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {selectedItem.title}
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 text-primary">
                  <MapPin className="size-3.5 shrink-0" />
                  <span>{selectedItem.location}</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1 shrink-0">
                  <Calendar className="size-3.5 shrink-0" />
                  <span>{selectedItem.date}</span>
                </span>
              </div>

              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground text-sm">
                {selectedItem.description}
              </p>
            </div>

            {/* Dynamic Event Media Showcase with Per-Album Layouts & Image Fit */}
            {selectedItem.images && selectedItem.images.length > 0 && (
              <div className="mt-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs text-muted-foreground mb-3">
                  <span className="uppercase tracking-wider text-primary font-semibold whitespace-nowrap">Event Album</span>
                  <span className="text-[11px] sm:text-xs">{selectedItem.images.length} Photos • Click image to view full screen</span>
                </div>

                {(() => {
                  const layoutType = (selectedItem as any).layoutType || (selectedItem.images.length >= 4 ? 'bento' : 'grid')
                  const defaultFit = (selectedItem as any).imageFit || 'cover'
                  const gridCols = (selectedItem as any).gridCols || (selectedItem.images.length <= 3 ? 3 : 4)

                  const getMediaDetails = (rawImg: any) => {
                    if (typeof rawImg === 'string') {
                      return { src: rawImg, fit: defaultFit, span: undefined, aspect: undefined, className: undefined, imgClassName: undefined }
                    }
                    return {
                      src: rawImg.src,
                      fit: rawImg.fit || defaultFit,
                      span: rawImg.span,
                      aspect: rawImg.aspect,
                      className: rawImg.className,
                      imgClassName: rawImg.imgClassName,
                    }
                  }

                  if (layoutType === 'masonry') {
                    return (
                      <div className="columns-1 sm:columns-2 md:columns-3 gap-3 space-y-3">
                        {selectedItem.images.map((rawImg, idx) => {
                          const media = getMediaDetails(rawImg)
                          return (
                            <div
                              key={`${media.src}-${idx}`}
                              onClick={() => setActiveFocusedPhoto(media.src)}
                              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-black transition-all hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 break-inside-avoid"
                            >
                              {media.src.match(/\.(mp4|webm)$/i) ? (
                                <video
                                  src={media.src}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  className={cn(
                                    'w-full h-auto transition-transform duration-500 group-hover:scale-105',
                                    media.fit === 'contain' ? 'object-contain bg-black/80' : 'object-cover'
                                  )}
                                />
                              ) : (
                                <SmartImage
                                  src={media.src}
                                  alt={`${selectedItem.title} media ${idx + 1}`}
                                  className={cn(
                                    'w-full h-auto transition-transform duration-500 group-hover:scale-105',
                                    media.fit === 'contain' ? 'object-contain bg-black/80' : 'object-cover'
                                  )}
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-end p-3 z-10">
                                <span className="inline-flex items-center gap-1 font-mono text-[10px] text-foreground bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                                  <Maximize2 className="size-3" /> Zoom
                                </span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )
                  }

                  if (layoutType === 'grid') {
                    return (
                      <div
                        className={cn(
                          'grid gap-3',
                          selectedItem.images.length === 6 || selectedItem.images.length <= 3
                            ? 'grid-cols-1 sm:grid-cols-3'
                            : gridCols === 2
                            ? 'grid-cols-1 sm:grid-cols-2'
                            : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
                        )}
                      >
                        {selectedItem.images.map((rawImg, idx) => {
                          const media = getMediaDetails(rawImg)
                          return (
                            <div
                              key={`${media.src}-${idx}`}
                              onClick={() => setActiveFocusedPhoto(media.src)}
                              className={cn(
                                'group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-black transition-all hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10',
                                media.aspect || 'aspect-[4/3]'
                              )}
                            >
                              {media.src.match(/\.(mp4|webm)$/i) ? (
                                <video
                                  src={media.src}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  className={cn(
                                    'size-full transition-transform duration-500 group-hover:scale-105',
                                    media.fit === 'contain' ? 'object-contain bg-black/80' : 'object-cover object-top'
                                  )}
                                />
                              ) : (
                                <SmartImage
                                  src={media.src}
                                  alt={`${selectedItem.title} media ${idx + 1}`}
                                  className={cn(
                                    'size-full transition-transform duration-500 group-hover:scale-105',
                                    media.fit === 'contain' ? 'object-contain bg-black/80' : 'object-cover object-top'
                                  )}
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-end p-3 z-10">
                                <span className="inline-flex items-center gap-1 font-mono text-[10px] text-foreground bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                                  <Maximize2 className="size-3" /> Zoom
                                </span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )
                  }

                  // Default: Bento Grid Layout
                  if (selectedItem.images.length <= 3) {
                    return (
                      <div className="flex flex-col sm:flex-row gap-3 h-auto sm:h-[220px] md:h-[250px] w-full">
                        {selectedItem.images.map((rawImg, idx) => {
                          const media = getMediaDetails(rawImg)
                          const isPoster = media.src.includes('4.png') || (media.aspect && media.aspect.includes('964'))

                          return (
                            <div
                              key={`${media.src}-${idx}`}
                              onClick={() => setActiveFocusedPhoto(media.src)}
                              className={cn(
                                'group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-black transition-all hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10',
                                media.aspect
                                  ? media.aspect
                                  : isPoster
                                  ? 'aspect-[964/1234] shrink-0 h-[220px] sm:h-full'
                                  : 'flex-1 h-[220px] sm:h-full aspect-[4/3]',
                                media.className
                              )}
                            >
                              {media.src.match(/\.(mp4|webm)$/i) ? (
                                <video
                                  src={media.src}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  className={cn(
                                    'size-full transition-transform duration-500 group-hover:scale-105',
                                    media.fit === 'contain' ? 'object-contain bg-black/90 p-1' : 'object-cover object-top',
                                    media.imgClassName
                                  )}
                                />
                              ) : (
                                <img
                                  src={media.src}
                                  alt={`${selectedItem.title} media ${idx + 1}`}
                                  className={cn(
                                    'size-full transition-transform duration-500 group-hover:scale-105',
                                    media.fit === 'contain' ? 'object-contain bg-black/90 p-1' : 'object-cover object-top',
                                    media.imgClassName
                                  )}
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-end p-3 z-10">
                                <span className="inline-flex items-center gap-1 font-mono text-[10px] text-foreground bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                                  <Maximize2 className="size-3" /> Zoom
                                </span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )
                  }

                  const hasSingleColHero = selectedItem.images.some((img: any) => typeof img === 'object' && img !== null && typeof img.span === 'string' && img.span.includes('col-span-1'))

                  return (
                    <div
                      className={cn(
                        'grid gap-3',
                        hasSingleColHero
                          ? 'grid-cols-1 sm:grid-cols-3 auto-rows-[160px] sm:auto-rows-[185px]'
                          : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[160px] grid-flow-dense'
                      )}
                    >
                      {selectedItem.images.map((rawImg, idx) => {
                        const media = getMediaDetails(rawImg)
                        const isBentoHero = selectedItem.images.length >= 4 && idx === 0

                        return (
                          <div
                            key={`${media.src}-${idx}`}
                            onClick={() => setActiveFocusedPhoto(media.src)}
                            className={cn(
                              'group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-black transition-all hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10',
                              media.span || (isBentoHero ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1 h-full w-full'),
                              media.className
                            )}
                          >
                            {media.src.match(/\.(mp4|webm)$/i) ? (
                              <video
                                src={media.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={cn(
                                  'size-full transition-transform duration-500 group-hover:scale-105',
                                  media.fit === 'contain' ? 'object-contain bg-black/90 p-1' : 'object-cover object-top',
                                  media.imgClassName
                                )}
                              />
                            ) : (
                              <SmartImage
                                src={media.src}
                                alt={`${selectedItem.title} media ${idx + 1}`}
                                className={cn(
                                  'size-full transition-transform duration-500 group-hover:scale-105',
                                  media.fit === 'contain' ? 'object-contain bg-black/90 p-1' : 'object-cover object-top',
                                  media.imgClassName
                                )}
                              />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-end p-3 z-10">
                              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-foreground bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                                <Maximize2 className="size-3" /> Zoom
                              </span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )
                })()}
              </div>
            )}

            {/* Featured Video Player if available */}
            {selectedItem.videoUrl && (
              <div className="mt-6">
                <div className="flex items-center justify-between font-mono text-xs text-muted-foreground mb-2">
                  <span className="uppercase tracking-widest text-primary font-semibold">Featured Video Reel</span>
                </div>
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-black shadow-inner">
                  <video
                    autoPlay
                    loop
                    controls
                    muted
                    playsInline
                    controlsList="nodownload noremoteplayback noplaybackrate"
                    disablePictureInPicture
                    disableRemotePlayback
                    onContextMenu={(e) => e.preventDefault()}
                    src={selectedItem.videoUrl}
                    className="size-full object-cover object-[center_20%]"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Full Screen Photo / Video Zoom Modal */}
          {activeFocusedPhoto && (
            <div
              onClick={() => setActiveFocusedPhoto(null)}
              className="fixed inset-0 z-60 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl animate-in zoom-in-95"
            >
              <button
                type="button"
                onClick={() => setActiveFocusedPhoto(null)}
                className="absolute right-6 top-6 z-70 flex size-10 items-center justify-center rounded-full border border-border bg-black/80 text-muted-foreground backdrop-blur-md transition-colors hover:text-foreground hover:bg-secondary"
              >
                <X className="size-5" />
              </button>
              {activeFocusedPhoto.match(/\.(mp4|webm)$/i) ? (
                <video
                  src={activeFocusedPhoto}
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  controlsList="nodownload noremoteplayback noplaybackrate"
                  disablePictureInPicture
                  disableRemotePlayback
                  onContextMenu={(e) => e.preventDefault()}
                  className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl border border-primary/30"
                />
              ) : (
                <img
                  src={activeFocusedPhoto}
                  alt="Enlarged view"
                  className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl border border-primary/30"
                />
              )}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
