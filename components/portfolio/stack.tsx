import { SectionHeading } from './section-heading'
import { Code2, Server, Cloud, Database, GitBranch, Terminal, Layout, Wrench, Network } from 'lucide-react'
import { AwsIcon, GithubIcon, ZustandIcon, SqlIcon, WebSocketIcon } from './icons'
import { techStackData } from '@/lib/data'
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiGo,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiExpress,
  SiNestjs,
  SiFastify,
  SiGraphql,
  SiGooglecloud,
  SiTerraform,
  SiKubernetes,
  SiDocker,
  SiVercel,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiGithubactions,
  SiArgo,
  SiPrometheus,
  SiGrafana,
  SiPrisma,
  SiSupabase,
  SiLinux,
  SiGit,
  SiPostman,
  SiFigma,
  SiGithub,
  SiPnpm,
  SiNpm,
  SiBun,
  SiSocketdotio,
  SiJsonwebtokens,
  SiTurborepo,
} from '@icons-pack/react-simple-icons'
import React from 'react'

const groupIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Server,
  Cloud,
  GitBranch,
  Database,
  Layout,
  Wrench,
}

const itemIconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  'HTML/CSS': SiHtml5,
  SQL: SqlIcon,
  React: SiReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': SiTailwindcss,
  'Shadcn UI': SiTailwindcss,
  'TanStack Query': SiReact,
  Redux: SiRedux,
  Zustand: ZustandIcon,
  Vite: SiVite,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  NestJS: SiNestjs,
  Fastify: SiFastify,
  'REST APIs': Network,
  REST: Network,
  gRPC: Server,
  GraphQL: SiGraphql,
  Prisma: SiPrisma,
  JWT: SiJsonwebtokens,
  WebSockets: WebSocketIcon,
  Bun: SiBun,
  AWS: AwsIcon,
  GCP: SiGooglecloud,
  'Google Cloud': SiGooglecloud,
  Terraform: SiTerraform,
  Kubernetes: SiKubernetes,
  'Kubernetes (Learning)': SiKubernetes,
  Docker: SiDocker,
  Linux: SiLinux,
  Git: SiGit,
  Vercel: SiVercel,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Supabase: SiSupabase,
  Kafka: SiApachekafka,
  DynamoDB: Database,
  ClickHouse: Database,
  'GitHub Actions': SiGithubactions,
  ArgoCD: SiArgo,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  'VS Code': Code2,
  Postman: SiPostman,
  Figma: SiFigma,
  GitHub: GithubIcon,
  pnpm: SiPnpm,
  npm: SiNpm,
  TurboRepo: SiTurborepo,
}

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-4 border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="03" title="Tech Stack" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStackData.map((group) => {
            const GroupIcon = groupIconMap[group.iconName] || Code2
            return (
              <div
                key={group.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <GroupIcon className="size-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-medium">{group.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const ItemIcon = itemIconMap[item]
                    return (
                      <li
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground hover:border-primary/40"
                      >
                        {ItemIcon && <ItemIcon size={12} className="shrink-0 text-primary/80" />}
                        <span>{item}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
