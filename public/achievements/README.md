# 🏆 Achievements & Certificates Folder

Drop your achievement screenshots, certificates, and trophy photos here!

### 📌 How to add images in `lib/data.ts`:

1. Drop your certificate/photo files into `public/achievements/` (e.g. `apl-hackathon.jpg`, `gcp-mentor.png`, `postman-cert.png`).
2. Add the `imageUrl` field to your achievement object in `lib/data.ts`:

```ts
// Example in lib/data.ts:
{
  iconName: 'Trophy',
  category: 'Hackathon',
  badge: '1st Runner-Up',
  title: 'Agentic Premier League Hackathon 2026',
  issuer: 'GDG Lucknow',
  year: '2026',
  description: 'Secured 1st Runner-Up with Team Code Oxide...',
  imageUrl: '/achievements/apl-hackathon.jpg', // 👈 Add your certificate or event photo here!
  linkUrl: 'https://linkedin.com/in/utsavsinghx',
}
```
