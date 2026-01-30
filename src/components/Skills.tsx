const skillCategories = [
  {
    title: 'Backend',
    skills: ['Python 3.x', 'FastAPI / Django', 'PostgreSQL / Redis', 'REST API Design', 'Microservices'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Responsive Design', 'Web Performance'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker', 'Git / GitHub / GitLab', 'CI/CD Pipelines', 'Power Platform', 'System Architecture'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-bg-secondary/50">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-4">
          <h2 className="text-2xl font-semibold tracking-tight">Technical Arsenal</h2>
          <span className="mono text-sm text-foreground-muted">02</span>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {skillCategories.map((category, i) => (
            <div key={i} className="bg-bg-primary p-8 hover:bg-bg-secondary transition-colors">
              <h3 className="text-accent mono text-xs uppercase tracking-widest mb-6 font-semibold">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-2 text-foreground-secondary text-sm">
                    <span className="text-foreground-muted">›</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
