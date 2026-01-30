import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Github, Linkedin } from 'lucide-react';

export function Hero() {
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lines = codeRef.current?.querySelectorAll('.code-line');
    if (lines) {
      gsap.fromTo(lines, 
        { opacity: 0, x: 20 },
        { 
          opacity: 1, 
          x: 0, 
          stagger: 0.15, 
          duration: 0.5,
          ease: "power2.out",
          delay: 0.5
        }
      );
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-[1100px] mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 pt-1 rounded-full bg-bg-secondary border border-border text-xs font-medium text-foreground-secondary mono">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for hire
            </div>
            
            <h1 className="editorial-heading leading-[1.1]">
              Building robust<br />
              <span className="text-foreground-secondary">digital infrastructure</span><br />
              with Python & React
            </h1>
            
            <p className="text-lg text-foreground-secondary max-w-lg leading-[1.7]">
              Fullstack engineer with 3+ years shipping production code. 
              Specialized in FastAPI microservices, PostgreSQL optimization, and 
              scalable cloud architecture. Currently architecting solutions at PivotX Advisor.
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm text-foreground-muted pt-2 mono">
              <span>📍 Kathmandu, Nepal (GMT+5:45)</span>
              <a href="mailto:anish.karna133@gmail.com" className="text-accent hover:underline">
                anish.karna133@gmail.com
              </a>
            </div>

            <div className="flex gap-2">
              <a
                href="https://github.com/anishkarn33"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-bg-secondary border border-border rounded-lg hover:border-accent hover:text-accent transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/anishkarn33/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-bg-secondary border border-border rounded-lg hover:border-accent hover:text-accent transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="hidden md:block bg-bg-secondary rounded-lg border border-border overflow-hidden h-[355px] mt-10">
            <div ref={codeRef} className="p-6 font-mono text-sm leading-relaxed">
              <div className="code-line opacity-0 flex gap-6">
                <span className="text-foreground-muted select-none">1</span>
                <span><span className="text-purple-400">class</span>{' '}
                <span className="text-blue-400">Engineer</span>:</span>
              </div>
              <div className="code-line opacity-0 flex gap-6">
                <span className="text-foreground-muted select-none">2</span>
                <span className="pl-4 text-foreground-muted">
                  <span className="text-gray-500"># Anish Karn</span>
                </span>
              </div>
              <div className="code-line opacity-0 flex gap-6">
                <span className="text-foreground-muted select-none">3</span>
                <span className="pl-4">
                  <span className="text-purple-400">def</span>{' '}
                  <span className="text-blue-400">__init__</span>(self):
                </span>
              </div>
              <div className="code-line opacity-0 flex gap-6">
                <span className="text-foreground-muted select-none">4</span>
                <span className="pl-8">
                  self.stack = [<span className="text-green-400">'Python'</span>, <span className="text-green-400">'FastAPI'</span>, <span className="text-green-400">'React'</span>]
                </span>
              </div>
              <div className="code-line opacity-0 flex gap-6">
                <span className="text-foreground-muted select-none">5</span>
                <span className="pl-8">
                  self.location = <span className="text-green-400">'Kathmandu, Nepal'</span>
                </span>
              </div>
              <div className="code-line opacity-0 flex gap-6">
                <span className="text-foreground-muted select-none">6</span>
                <span className="pl-8">
                  self.available = <span className="text-purple-400">True</span>
                </span>
              </div>
              <div className="code-line opacity-0 flex gap-6">
                <span className="text-foreground-muted select-none">7</span>
                <span className="pl-8">
                  self.experience = <span className="text-green-400">'3+ years'</span>
                </span>
              </div>
              <div className="code-line opacity-0 flex gap-6 h-4">
                <span className="text-foreground-muted select-none">8</span>
                <span></span>
              </div>
              <div className="code-line opacity-0 flex gap-6">
                <span className="text-foreground-muted select-none">9</span>
                <span className="pl-4">
                  <span className="text-purple-400">def</span>{' '}
                  <span className="text-blue-400">build</span>(self, product):
                </span>
              </div>
              <div className="code-line opacity-0 flex gap-6">
                <span className="text-foreground-muted select-none">10</span>
                <span className="pl-8">
                  <span className="text-purple-400">return</span> product.scale().optimize().ship()
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
