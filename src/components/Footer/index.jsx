import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true });

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative py-12 px-6">
      {/* Divider */}
      <div
        className="max-w-6xl mx-auto mb-10 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.3), transparent)' }}
      />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        {/* Left */}
        <div className="text-center sm:text-left">
          <p className="font-display font-bold gradient-text text-lg mb-1">{personalInfo.name}</p>
          <p className="font-mono text-xs text-white/30">
            © {new Date().getFullYear()} · Software Engineer · Chennai, India
          </p>
        </div>

        {/* Center — social */}
        <div className="flex items-center gap-4">
          {[
            { href: personalInfo.github, icon: Github, label: 'GitHub' },
            { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(168,85,247,0.2)', color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(124,58,237,0.25)';
                e.currentTarget.style.color = '#c084fc';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(124,58,237,0.12)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
              }}
            >
              <Icon size={15} />
            </a>
          ))}
        </div>

        {/* Right — back to top */}
        <button
          onClick={scrollTop}
          className="flex items-center gap-2 font-mono text-xs text-white/30 hover:text-purple-300 transition-colors group"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:-translate-y-0.5 transition-transform"
            style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(168,85,247,0.2)' }}
          >
            <ArrowUp size={13} />
          </div>
        </button>
      </motion.div>

      <p className="text-center font-mono text-xs text-white/15 mt-8">
        Built with React · Vite · Framer Motion · Tailwind CSS
      </p>
    </footer>
  );
}
