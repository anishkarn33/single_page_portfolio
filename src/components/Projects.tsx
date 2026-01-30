import { Github, ExternalLink } from 'lucide-react';

interface Project {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  links: { github?: string; demo?: string };
}

const projects: Project[] = [
  {
    icon: '🅿️',
    title: 'Smart Parking System',
    description: 'Hackathon-winning IoT solution for automated parking management. Real-time slot detection using sensor integration with automated payment processing.',
    tags: ['React', 'Express.js', 'IoT', 'PostgreSQL'],
    links: { github: 'https://github.com/anishkarn33/smart-parking-system' },
  },
  {
    icon: '🗳️',
    title: 'Secure Voting System',
    description: 'End-to-end encrypted voting platform with blockchain-inspired audit trails. Two-factor authentication and real-time result visualization.',
    tags: ['Django', 'Encryption', 'Security', 'Bootstrap'],
    links: { github: 'https://github.com/anishkarn33/Online_voting_sysytem' },
  },
  {
    icon: '📚',
    title: 'E-Learning Platform',
    description: 'Comprehensive e-learning platform with video lectures, quizzes, and progress tracking. Integrated discussion forums and peer reviews to enhance learning.',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'Docker'],
    links: { github: 'https://github.com/anishkarn33/elearning-platform' },
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-4">
          <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
          <span className="mono text-sm text-foreground-muted">03</span>
        </div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <article 
              key={i}
              className="group bg-bg-secondary border border-border rounded-lg p-8 hover:border-accent hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{project.icon}</span>
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-foreground-secondary leading-relaxed mb-4 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span 
                        key={j}
                        className="px-3 py-1 bg-bg-tertiary border border-border rounded text-xs mono text-foreground-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      className="p-3 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
                      aria-label="View Source"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.links.demo && (
                    <a 
                      href={project.links.demo}
                      className="p-3 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          {/* Explore More Projects Box */}
          <div className=" p-8 text-center">
            <h3 className="text-xl font-semibold mb-3">Explore More Projects</h3>
            <p className="text-foreground-secondary mb-6 max-w-xl mx-auto">
              Want to see more of my work? Check out my GitHub profile for additional projects, 
              contributions, and experiments.
            </p>
            <a
              href="https://github.com/anishkarn33"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              <Github size={20} />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
