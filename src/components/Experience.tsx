import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Job {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
  current?: boolean;
}

const jobs: Job[] = [
  {
    period: 'Nov 2025 — Present',
    title: 'Fullstack Engineer',
    company: 'PivotX Advisor',
    location: 'Remote',
    description: 'Architecting end-to-end solutions with FastAPI, PostgreSQL, and React. Leading feature development and system optimization initiatives. Implementing microservices architecture and CI/CD pipelines.',
    current: true,
  },
  {
    period: 'Feb 2025 — Oct 2025',
    title: 'Support Engineer — PowerApps',
    company: 'Dogma Group',
    location: 'Kathmandu',
    description: 'Developed enterprise business applications using Microsoft Power Platform. Specialized in PowerApps canvas apps, Power Automate workflows, and Dynamics 365 integrations.',
  },
  {
    period: 'May 2023 — Feb 2025',
    title: 'Associate Software Developer',
    company: 'Peakvoyage',
    location: 'Kathmandu',
    description: 'Developed web applications using FastAPI with PostgreSQL backend. Reduced deployment time by 30% through Docker automation. Collaborated with 5-person agile team.',
  },
  {
    period: 'May 2022 — Apr 2023',
    title: 'Data Specialist',
    company: 'Cloud Factory',
    location: 'Kathmandu',
    description: 'Maintained data integrity across multiple sources. Developed streamlined data entry processes improving productivity by 25%.',
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.job-row').forEach((row, i) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-16" ref={containerRef}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-4">
          <h2 className="text-2xl font-semibold tracking-tight">Professional Experience</h2>
        </div>

        <div className="divide-y divide-border border-t border-border">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              className="job-row group py-8 grid md:grid-cols-[200px_1fr_150px] gap-6 md:gap-8 items-start hover:bg-bg-secondary/50 transition-colors -mx-6 px-6 cursor-pointer"
            >
              <div className="mono text-sm text-foreground-muted whitespace-nowrap">
                {job.period}
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-semibold text-foreground-primary group-hover:text-accent transition-colors">
                    {job.title}
                  </h3>
                  {job.current && (
                    <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-accent/10 text-accent rounded border border-accent/20">
                      Current
                    </span>
                  )}
                </div>
                <div className="text-foreground-secondary mb-3">{job.company}</div>
                <div className="text-sm text-foreground-secondary/80 leading-relaxed max-h-0 overflow-hidden transition-all duration-300 ease-out group-hover:max-h-[200px] group-hover:mt-4">
                  {job.description}
                </div>
              </div>

              <div className="mono text-sm text-foreground-muted text-left md:text-right">
                {job.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
