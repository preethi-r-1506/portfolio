import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '../../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

function EducationCard({ edu, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.01 }}
      className="relative glass rounded-2xl p-7 transition-all duration-300"
      style={{ border: '1px solid rgba(168,85,247,0.18)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.15)';
        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.35)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.18)';
      }}
    >
      {/* Index */}
      <div
        className="absolute top-6 right-6 font-display font-bold text-5xl opacity-5 pointer-events-none select-none"
        style={{ color: '#7c3aed' }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mt-0.5"
          style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(168,85,247,0.25)' }}
        >
          <GraduationCap size={20} className="text-purple-400" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-white text-lg leading-tight mb-1">
            {edu.degree}
          </h3>
          <p className="font-display font-semibold text-purple-300 text-sm mb-3">{edu.institution}</p>
          <p className="font-mono text-xs text-white/35 mb-4">{edu.university}</p>

          <div className="flex flex-wrap gap-4 text-xs text-white/45 font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar size={11} /> {edu.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} /> {edu.location}
            </span>
            <span
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(124,58,237,0.15)', color: '#c084fc', border: '1px solid rgba(168,85,247,0.25)' }}
            >
              <Award size={10} /> Grade: {edu.grade}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-purple-400/60 mb-3 tracking-widest">EDUCATION</p>
          <h2 className="section-title gradient-text-2">Academic foundation</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, rgba(124,58,237,0.5), rgba(124,58,237,0.1))' }}
          />
          <div className="flex flex-col gap-6 sm:pl-16">
            {education.map((edu, i) => (
              <div key={edu.institution} className="relative">
                {/* Timeline dot */}
                <div
                  className="hidden sm:block absolute -left-16 top-7 w-3.5 h-3.5 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                    boxShadow: '0 0 12px rgba(124,58,237,0.6)',
                    left: '-2.65rem',
                  }}
                />
                <EducationCard edu={edu} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
