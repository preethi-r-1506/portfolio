import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, stats } from '../../data/portfolioData';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display font-bold gradient-text" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
      {count}{suffix}
    </span>
  );
}

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* Heading */}
          <motion.div variants={sectionVariant} className="mb-16 text-center">
            <p className="font-mono text-sm text-purple-400/60 mb-3 tracking-widest">ABOUT ME</p>
            <h2 className="section-title gradient-text-2">The person behind the code</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — bio */}
            <motion.div variants={sectionVariant} className="flex flex-col gap-6">
              <div
                className="glass rounded-2xl p-7"
                style={{ border: '1px solid rgba(168,85,247,0.12)' }}
              >
                <p className="text-white/70 leading-relaxed font-body text-[0.95rem]">
                  {personalInfo.summary}
                </p>
              </div>

              <div
                className="glass rounded-2xl p-7"
                style={{ border: '1px solid rgba(168,85,247,0.12)' }}
              >
                <h3 className="font-display font-semibold text-purple-200 mb-4 text-sm tracking-wide">
                  What drives me
                </h3>
                <p className="text-white/60 leading-relaxed font-body text-sm">
                  I'm drawn to the invisible architecture of backend systems — the parts users never see but always feel. Whether it's eliminating a race condition in a distributed ERP or designing a reusable AWS service layer that's resilient against credential failures, I care about getting the fundamentals right.
                </p>
              </div>

              {/* Contact info */}
              <div className="flex flex-col gap-3">
                {[
                  { icon: MapPin, label: personalInfo.location },
                  { icon: Mail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: Github, label: 'PREETHI156', href: personalInfo.github },
                  { icon: Linkedin, label: 'preethi-ravi', href: personalInfo.linkedin },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon size={15} className="text-purple-400/60 shrink-0" />
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        className="font-mono text-xs text-white/50 hover:text-purple-300 transition-colors">
                        {label}
                      </a>
                    ) : (
                      <span className="font-mono text-xs text-white/50">{label}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — stats */}
            <motion.div variants={sectionVariant} className="flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.02, borderColor: 'rgba(168,85,247,0.4)' }}
                    className="glass rounded-2xl p-6 text-center transition-all duration-300"
                    style={{ border: '1px solid rgba(168,85,247,0.15)' }}
                  >
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    <p className="font-body text-xs text-white/45 mt-2 leading-tight">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Quick facts */}
              <div
                className="glass rounded-2xl p-7"
                style={{ border: '1px solid rgba(168,85,247,0.12)' }}
              >
                <h3 className="font-display font-semibold text-purple-200 mb-5 text-sm tracking-wide">
                  Quick facts
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { k: 'Current role', v: 'Junior Software Developer @ EWall Solutions' },
                    { k: 'Specialization', v: 'ERP & Backend Systems (Odoo, Frappe)' },
                    { k: 'Cloud', v: 'AWS Certified Cloud Practitioner' },
                    { k: 'Education', v: 'MCA, S.A. Engineering College (84%)' },
                    { k: 'Notable', v: '4 modules published on Odoo App Store' },
                  ].map(({ k, v }) => (
                    <div key={k} className="flex gap-3 text-sm">
                      <span className="font-mono text-purple-400/50 shrink-0 w-32 text-xs pt-0.5">{k}</span>
                      <span className="text-white/65 font-body text-xs leading-relaxed">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
