import { SiteNav } from '@/components/portfolio/site-nav'
import { Hero } from '@/components/portfolio/hero'
import { Stack } from '@/components/portfolio/stack'
import { Projects } from '@/components/portfolio/projects'
import { Achievements } from '@/components/portfolio/achievements'
import { Gallery } from '@/components/portfolio/gallery'
import { Experience } from '@/components/portfolio/experience'
import { Contact } from '@/components/portfolio/contact'
import { CatMascot } from '@/components/portfolio/cat-mascot'
import { personalInfo } from '@/lib/data'

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    description: personalInfo.bio,
    url: 'https://utsavsingh.dev',
    email: `mailto:${personalInfo.email}`,
    sameAs: [personalInfo.githubUrl, personalInfo.linkedinUrl, personalInfo.twitterUrl],
    knowsAbout: [
      'TypeScript',
      'JavaScript',
      'Node.js',
      'React',
      'Next.js',
      'DevOps',
      'Cloud Architecture',
      'Kubernetes',
      'Docker',
      'AWS',
      'Terraform',
    ],
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Stack />
        <Achievements />
        <Gallery />
        <Contact />
      </main>
      <CatMascot />
    </div>
  )
}
