import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const floatingTech = [
  { label: 'Python', angle: 0 },
  { label: 'Odoo', angle: 45 },
  { label: 'AWS', angle: 90 },
  { label: 'PostgreSQL', angle: 135 },
  { label: 'Frappe', angle: 180 },
  { label: 'boto3', angle: 225 },
  { label: 'RQ', angle: 270 },
  { label: 'SQL', angle: 315 },
];

function TypingRoles({ roles }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, 1800);
      return () => clearTimeout(t);
    }
    const target = roles[idx];
    if (!deleting) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIdx((i) => (i + 1) % roles.length);
      }
    }
  }, [displayed, deleting, paused, idx, roles]);

  return (
    <span className="gradient-text font-display font-semibold">
      {displayed}
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  );
}

export default function Hero() {
  const blobRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      if (!blobRef.current) return;
      const { innerWidth: w, innerHeight: h } = window;
      const dx = (e.clientX - w / 2) / w;
      const dy = (e.clientY - h / 2) / h;
      blobRef.current.style.transform = `translate(${dx * 18}px, ${dy * 18}px)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — text */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
            >
              <span
                className="font-mono text-sm px-4 py-1.5 rounded-full inline-block mb-3"
                style={{
                  background: 'rgba(124,58,237,0.12)',
                  border: '1px solid rgba(168,85,247,0.25)',
                  color: '#c084fc',
                }}
              >
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.7 }}
              className="font-display font-bold text-balance"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', lineHeight: 1.05, color: '#e8e0ff' }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.75, duration: 0.6 }}
              className="text-xl text-white/50 font-body h-8"
            >
              <TypingRoles roles={personalInfo.roles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9, duration: 0.6 }}
              className="text-white/55 text-base leading-relaxed max-w-lg font-body"
            >
              {personalInfo.shortBio}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.0, duration: 0.6 }}
              className="font-mono text-sm italic"
              style={{ color: 'rgba(192,132,252,0.6)' }}
            >
              "{personalInfo.tagline}"
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.1, duration: 0.6 }}
              className="flex flex-wrap gap-3 mt-2"
            >
              <button
                onClick={scrollToWork}
                className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #5b21b6, #7c3aed)',
                  boxShadow: '0 0 24px rgba(124,58,237,0.4)',
                  color: 'white',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.7)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(124,58,237,0.4)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                View My Work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 glass"
                style={{ color: '#c084fc', border: '1px solid rgba(168,85,247,0.25)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(124,58,237,0.1)';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Download size={15} />
                Connect
              </a>

              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                style={{ color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
              >
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 0.6 }}
              className="flex items-center gap-4 mt-2"
            >
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
                  className="flex items-center gap-2 text-white/40 hover:text-purple-400 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={18} />
                  <span className="text-xs font-mono hidden sm:inline">{label}</span>
                </a>
              ))}
              <span className="text-white/20 text-xs font-mono ml-2">{personalInfo.location}</span>
            </motion.div>
          </div>

          {/* RIGHT — blob + image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.7, duration: 0.9, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-80 h-80">
              {/* Outer orbit ring */}
              <div
                className="absolute inset-0 rounded-full animate-spin-slow"
                style={{
                  border: '1px dashed rgba(124,58,237,0.2)',
                  width: '340px',
                  height: '340px',
                  top: '-30px',
                  left: '-30px',
                }}
              />

              {/* Floating tech badges */}
              {floatingTech.map((tech, i) => {
                const rad = (tech.angle * Math.PI) / 180;
                const r = 175;
                const x = 50 + Math.cos(rad) * r;
                const y = 50 + Math.sin(rad) * r;
                return (
                  <motion.div
                    key={tech.label}
                    className="absolute font-mono text-xs px-2 py-1 rounded-lg"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(91,33,182,0.2)',
                      border: '1px solid rgba(168,85,247,0.3)',
                      color: '#c084fc',
                      whiteSpace: 'nowrap',
                    }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3 + i * 0.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.3,
                    }}
                  >
                    {tech.label}
                  </motion.div>
                );
              })}

              {/* Blob */}
              <div
                ref={blobRef}
                className="absolute inset-0 animate-blob transition-transform duration-700 ease-out"
                style={{
                  background: 'linear-gradient(135deg, rgba(91,33,182,0.5), rgba(124,58,237,0.6), rgba(168,85,247,0.4))',
                  filter: 'blur(2px)',
                  boxShadow: '0 0 60px rgba(124,58,237,0.4), 0 0 120px rgba(91,33,182,0.2)',
                }}
              />

              {/* Inner content — photo placeholder */}
              <div
                className="absolute inset-4 rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #120b2e, #1e0f4a)',
                  border: '2px solid rgba(168,85,247,0.3)',
                }}
              >
                {/* Replace this div with an <img> tag when photo is available */}
                <div className="text-center">
                  <div
                    className="font-display font-bold mb-1"
                    style={{
                      fontSize: '4rem',
                      background: 'linear-gradient(135deg, #c084fc, #7c3aed)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    PR
                  </div>
                  <div className="font-mono text-xs text-purple-400/50">Software Engineer</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="font-mono text-xs text-white/25">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-purple-500/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
