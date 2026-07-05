# 📁 Event Media Folders Guide

Drop your event photos (`.jpg`, `.png`, `.webp`) and videos (`.mp4`, `.mov`) directly into these folders.

## Folder Structure:
- `public/events/agentic-hackathon/` — Agentic Premier League Hackathon 2026
- `public/events/cloud-study-jams/` — Google Cloud Study Jam Sessions
- `public/events/codeblitz/` — CodeBlitz National Hackathon
- `public/events/gdg-meetups/` — GDG Community Tech Meetups
- `public/events/sih-finals/` — Smart India Hackathon Finals
- `public/events/postman-workshop/` — Postman API & WebSockets Workshop
- `public/events/vercel-ship/` — Vercel Ship Showcase Video/Photos

## How to use them in `lib/data.ts`:
Simply set the file path relative to `/public`:

```ts
{
  id: '1',
  title: 'Agentic Premier League Hackathon 2026',
  // ...
  imageUrl: '/events/agentic-hackathon/photo-1.jpg',
  images: [
    '/events/agentic-hackathon/photo-1.jpg',
    '/events/agentic-hackathon/photo-2.jpg',
    '/events/agentic-hackathon/photo-3.jpg',
    '/events/agentic-hackathon/photo-4.jpg',
  ],
  videoUrl: '/events/agentic-hackathon/demo-video.mp4', // optional video reel
}
```
