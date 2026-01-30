import { useState, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // EmailJS credentials from environment variables
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setStatus('sent');
      formRef.current?.reset();
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-16 bg-bg-secondary/50 border-t border-border">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <h2 className="editorial-heading mb-3">Let's build something together</h2>
            <p className="text-foreground-secondary mb-8 text-lg">
              I'm currently available for fullstack engineering roles, consulting, or interesting collaborations.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-bg-tertiary border border-border rounded-lg">
                <Mail size={20} className="text-foreground-muted mt-1" />
                <div className="flex-1">
                  <div className="text-xs text-foreground-muted mono uppercase mb-1">Email</div>
                  <a href="mailto:anish.karna133@gmail.com" className="font-medium text-foreground-primary">anish.karna133@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-bg-tertiary border border-border rounded-lg">
                <Phone size={20} className="text-foreground-muted mt-1" />
                <div className="flex-1">
                  <div className="text-xs text-foreground-muted mono uppercase mb-1">Phone</div>
                  <div className="font-medium text-foreground-primary">+977 980-400-0340</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-bg-tertiary border border-border rounded-lg">
                <MapPin size={20} className="text-foreground-muted mt-1" />
                <div className="flex-1">
                  <div className="text-xs text-foreground-muted mono uppercase mb-1">Location</div>
                  <div className="font-medium text-foreground-primary">Kathmandu, Nepal</div>
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 mt-11">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground-secondary">Name</label>
              <input 
                type="text" 
                name="user_name"
                required
                className="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground-secondary">Email</label>
              <input 
                type="email" 
                name="user_email"
                required
                className="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground-secondary">Message</label>
              <textarea 
                rows={4}
                name="message"
                required
                className="w-full px-4 py-3 bg-bg-primary border border-border rounded-lg focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                placeholder="What's on your mind?"
              />
            </div>
            
            <button 
              type="submit"
              disabled={status !== 'idle'}
              className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'idle' && <>Send Message →</>}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Message Sent ✓'}
              {status === 'error' && 'Failed to send. Try again.'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
