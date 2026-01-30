import { useState } from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, Menu, X } from 'lucide-react';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-border transition-all duration-300"
    >
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-lg group">
          <span className="text-accent mono">~/</span>
          <span className="group-hover:text-accent transition-colors">anish-karn</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground-secondary hover:text-foreground-primary transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-accent hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-bg-secondary border border-border hover:border-accent transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg-primary border-b border-border p-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-foreground-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-foreground-secondary"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span>Toggle Theme</span>
          </button>
        </div>
      )}
    </nav>
  );
}
