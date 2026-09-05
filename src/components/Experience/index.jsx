import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../../data/portfolioData';
import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function ExperienceCard({ exp, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10 flex-col items-center">
        <div
          className="w-4 h-4 rounded-full"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
            boxShadow: '0 0 16px rgba(124,58,237,0.7)',
          }}
        />
      </div>

      <div className={`md:w-[46%] ${index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="glass rounded-2xl p-7 transition-all duration-300"
          style={{ border: '1px solid rgba(168,85,247,0.18)' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.15)';
            e.currentTarget.style.borderColor = 'rgba(168,85,247,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '';
            e.currentTarget.style.borderColor = 'rgba(168,85,247,0.18)';
          }}
        >
          {/* Header */}
          <div className="mb-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-display font-bold text-white text-lg">{exp.role}</h3>
              <span
                className="font-mono text-xs px-2 py-1 rounded-full shrink-0"
                style={{ background: 'rgba(124,58,237,0.15)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.2)' }}
              >
                {exp.type}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 text-xs text-white/45 font-mono mt-2">
              <span className="flex items-center gap-1">
                <Building2 size={11} /> {exp.company}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={11} /> {exp.duration}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={11} /> {exp.location}
              </span>
            </div>
          </div>

          {/* Highlights */}
          <div className="flex flex-col gap-4 mb-5">
            {exp.highlights.map((h) => (
              <div key={h.title}>
                <div className="flex items-start gap-2 mb-1">
                  <ChevronRight size={13} className="text-purple-400 mt-0.5 shrink-0" />
                  <span className="font-display font-semibold text-purple-200 text-sm">{h.title}</span>
                </div>
                <p className="text-white/55 text-xs leading-relaxed font-body pl-5">{h.detail}</p>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2.5 py-1 rounded-lg"
                style={{ background: 'rgba(91,33,182,0.2)', color: 'rgba(192,132,252,0.8)', border: '1px solid rgba(168,85,247,0.15)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-purple-400/60 mb-3 tracking-widest">WORK HISTORY</p>
          <h2 className="section-title gradient-text-2">Where I've built things</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,0.4), transparent)' }}
          />

          <div className="flex flex-col gap-10">
            {experience.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
