# 📝 How to Edit Portfolio Content & Gallery (`lib/data.ts`)

All content, icons, and gallery items displayed on your portfolio website are driven by **`lib/data.ts`**. 

You do **NOT** need to edit complex UI code or components to update your information — simply edit the TypeScript arrays and objects in `lib/data.ts`!

---

## 🎨 Complete Icon Guide

Your portfolio automatically maps technology names and category icons to crisp brand icons via `@icons-pack/react-simple-icons` and `lucide-react`.

### 1. Brand Tech Stack Icons (`techStackData`)

Simply type any of the following technology names into the `items` array of your tech stack in `lib/data.ts`, and its official SVG logo will render automatically:

| Category | Supported Tech Item Strings in `lib/data.ts` |
|---|---|
| **Languages** | `'TypeScript'`, `'JavaScript'`, `'HTML'`, `'CSS'`, `'SQL'`, `'Go'` |
| **Frontend** | `'React'`, `'Next.js'`, `'Tailwind CSS'`, `'Shadcn UI'`, `'Vite'`, `'TanStack Query'`, `'Redux'`, `'Zustand'` |
| **Backend & APIs** | `'Node.js'`, `'Express'`, `'NestJS'`, `'Fastify'`, `'REST APIs'`, `'gRPC'`, `'GraphQL'`, `'Prisma'`, `'JWT'`, `'WebSockets'` |
| **Databases** | `'PostgreSQL'`, `'MongoDB'`, `'Redis'`, `'Supabase'`, `'Kafka'`, `'ClickHouse'` |
| **Cloud & DevOps** | `'Docker'`, `'AWS'`, `'Google Cloud'`, `'Linux'`, `'Git'`, `'GitHub Actions'`, `'Vercel'`, `'Terraform'`, `'Kubernetes'` |
| **Tools** | `'VS Code'`, `'Postman'`, `'Figma'`, `'GitHub'`, `'pnpm'`, `'TurboRepo'` |

---

## 🚀 Quick Summary of Content Sections

| Object / Array in `lib/data.ts` | What it Controls on the Website |
|---|---|
| **`personalInfo`** | Your name, title, headline, bio, location, email, and social link URLs. |
| **`techStackData`** | Categorized list of technologies you know. |
| **`projectsData`** | Featured portfolio projects (4 shown on homepage, all on `/projects`). |
| **`achievementsData`** | Awards, hackathon wins, community roles (6 shown on homepage, all on `/achievements`). |
| **`galleryData`** | Event photos, hackathons, GDG mentorships, workshops, and achievements gallery cards. |
| **`experienceData`** | Work experience timeline (Freelance roles, community positions, mentorships). |
| **`educationData`** | Degrees, college/university details, graduation years, and key highlights. |
| **`contactData`** | Contact section heading, call-to-action text, and footer copyright text. |

---

## 🖼️ How to Edit the Gallery (`galleryData`)

You can showcase hackathons, GDG workshops, event photos, and awards in the **Gallery** section:

```ts
export const galleryData = [
  {
    id: '1',
    title: 'Agentic Premier League Hackathon 2026',
    category: 'Hackathon',
    date: '2026',
    location: 'GDG Lucknow',
    badge: '2nd Place',
    description: 'Secured 2nd place with Team Code Oxide building Bazaar Brain.',
    imageUrl: '/gallery/apl-hackathon.jpg', // Place photo in public/gallery/ folder
  },
]
```

> **Tip for Photos**: Save your event photos inside the `public/gallery/` folder (e.g. `public/gallery/apl-hackathon.jpg`). If no image is provided, a sleek dark-mode category banner is generated automatically!

---

## ⚡ How to Deploy Your Changes to Live Website

Whenever you make changes to `lib/data.ts`:

1. Open your terminal in your project directory.
2. Run these 3 simple commands to publish your updates live:
   ```bash
   git add lib/data.ts
   git commit -m "Update portfolio content"
   git push
   ```
3. Vercel will automatically build and publish your updated portfolio live within seconds! 🚀
