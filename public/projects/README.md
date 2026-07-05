# 🖼️ Project Screenshots & Assets Folder

Place your custom project screenshot images in this directory!

### 📌 How to use local images in `lib/data.ts`:

1. Drop your project image files into `public/projects/` (e.g. `cleansweep.png`, `homelab.jpg`, `notequicky.png`).
2. Update the `imageUrl` property for each project in `lib/data.ts`:

```ts
// Example in lib/data.ts:
{
  name: 'CleanSweepV1',
  // ...
  imageUrl: '/projects/cleansweep.png', // 👈 Point directly to your file in public/projects/
}
```

### 💡 Supported Formats:
- `.png`
- `.jpg` / `.jpeg`
- `.webp`
- `.svg`
- `.gif`
