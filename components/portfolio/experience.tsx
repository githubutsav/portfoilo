import { SectionHeading } from './section-heading'
import { workExperienceData, responsibilityData, educationData } from '@/lib/data'
import { Briefcase, GraduationCap, Users } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-4 border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="02" title="Experience & Roles" />

        <div className="mt-10 space-y-12">
          {/* Work Experience Section */}
          {workExperienceData && workExperienceData.length > 0 && (
            <div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-mono text-xs text-primary min-w-0">
                  <span className="flex size-6 items-center justify-center rounded bg-primary/10 text-primary border border-primary/20 shrink-0">
                    <Briefcase className="size-3.5" />
                  </span>
                  <span className="uppercase tracking-wider font-semibold text-xs sm:text-sm text-foreground truncate">
                    Work Experience
                  </span>
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] sm:text-xs text-primary whitespace-nowrap shrink-0">
                  Professional
                </span>
              </div>
              <div className="space-y-px overflow-hidden rounded-xl border border-border bg-border">
                {workExperienceData.map((role, idx) => (
                  <div key={`${role.company}-${role.role}-${idx}`} className="grid gap-4 bg-card p-6 md:grid-cols-[220px_1fr] md:p-8">
                    <div>
                      <div className="font-mono text-xs uppercase tracking-widest text-primary">{role.period}</div>
                      <div className="mt-2 font-medium">
                        {role.company.includes('(') ? (
                          <>
                            <div>{role.company.split('(')[0].trim()}</div>
                            <div className="text-xs text-muted-foreground mt-0.5 font-normal">({role.company.split('(').slice(1).join('(')}</div>
                          </>
                        ) : (
                          role.company
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{role.role}</h3>
                      <ul className="mt-3 space-y-2">
                        {role.points.map((point, pIdx) => (
                          <li key={`${point.substring(0, 20)}-${pIdx}`} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Positions of Responsibility Section */}
          {responsibilityData && responsibilityData.length > 0 && (
            <div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-mono text-xs text-primary min-w-0">
                  <span className="flex size-6 items-center justify-center rounded bg-primary/10 text-primary border border-primary/20 shrink-0">
                    <Users className="size-3.5" />
                  </span>
                  <span className="uppercase tracking-wider font-semibold text-xs sm:text-sm text-foreground truncate">
                    Positions of Responsibility
                  </span>
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] sm:text-xs text-primary whitespace-nowrap shrink-0">
                  Leadership & Community
                </span>
              </div>
              <div className="space-y-px overflow-hidden rounded-xl border border-border bg-border">
                {responsibilityData.map((role, idx) => (
                  <div key={`${role.company}-${role.role}-${idx}`} className="grid gap-4 bg-card p-6 md:grid-cols-[220px_1fr] md:p-8">
                    <div>
                      <div className="font-mono text-xs uppercase tracking-widest text-primary">{role.period}</div>
                      <div className="mt-2 font-medium">
                        {role.company.includes('(') ? (
                          <>
                            <div>{role.company.split('(')[0].trim()}</div>
                            <div className="text-xs text-muted-foreground mt-0.5 font-normal">({role.company.split('(').slice(1).join('(')}</div>
                          </>
                        ) : (
                          role.company
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">{role.role}</h3>
                      <ul className="mt-3 space-y-2">
                        {role.points.map((point, pIdx) => (
                          <li key={`${point.substring(0, 20)}-${pIdx}`} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {educationData && educationData.length > 0 && (
            <div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 font-mono text-xs text-primary min-w-0">
                  <span className="flex size-6 items-center justify-center rounded bg-primary/10 text-primary border border-primary/20 shrink-0">
                    <GraduationCap className="size-3.5" />
                  </span>
                  <span className="uppercase tracking-wider font-semibold text-xs sm:text-sm text-foreground truncate">
                    Education
                  </span>
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] sm:text-xs text-primary whitespace-nowrap shrink-0">
                  Academic
                </span>
              </div>
              <div className="space-y-px overflow-hidden rounded-xl border border-border bg-border">
                {educationData.map((edu, idx) => (
                  <div key={`${edu.institution}-${edu.degree}-${idx}`} className="grid gap-4 bg-card p-6 md:grid-cols-[220px_1fr] md:p-8">
                    <div>
                      <div className="font-mono text-xs uppercase tracking-widest text-primary">{edu.period}</div>
                      <div className="mt-2 font-medium">
                        {edu.institution.includes('(') ? (
                          <>
                            <div>{edu.institution.split('(')[0].trim()}</div>
                            <div className="text-xs text-muted-foreground mt-0.5 font-normal">({edu.institution.split('(').slice(1).join('(')}</div>
                          </>
                        ) : (
                          edu.institution
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{edu.degree}</h3>
                      <ul className="mt-3 space-y-2">
                        {edu.points.map((point, pIdx) => (
                          <li key={`${point.substring(0, 20)}-${pIdx}`} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
