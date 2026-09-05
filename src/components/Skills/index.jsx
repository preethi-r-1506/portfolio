import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolioData';

const categoryColors = {
  Languages: { bg: 'rgba(124,58,237,0.12)', border: 'rgba(124,58,237,0.25)', accent: '#7c3aed', label: '#c084fc' },
  Backend: { bg: 'rgba(91,33,182,0.12)', border: 'rgba(91,33,182,0.25)', accent: '#5b21b6', label: '#a78bfa' },
  Database: { bg: 'rgba(79,70,229,0.12)', border: 'rgba(79,70,229,0.25)', accent: '#4f46e5', label: '#818cf8' },
  Cloud: { bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)', accent: '#f59e0b', label: '#fcd34d' },
  Tools: { bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.2)', accent: '#14b8a6', label: '#5eead4' },
  Concepts: { bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)', accent: '#a855f7', label: '#d8b4fe' },
};

function SkillBadge({ skill, accent, label, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.06, y: -2 }}
      className="flex items-center gap-2 px-3 py-2 rounded-xl cursor-default transition-all duration-200"
      style={{ background: `rgba(0,0,0,0.3)`, border: `1px solid rgba(168,85,247,0.12)` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 16px ${accent}33`;
        e.currentTarget.style.borderColor = `${accent}55`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.borderColor = 'rgba(168,85,247,0.12)';
      }}
    >
      <span className="text-base"><img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 object-contain relative z-10" /></span>
      <span className="font-mono text-xs" style={{ color: label }}>{skill.name}</span>
    </motion.div>
  );
}

function CategoryCard({ name, items, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const colors = categoryColors[name] || categoryColors.Languages;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ scale: 1.01 }}
      className="rounded-2xl p-6 transition-all duration-300"
      style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-2 h-6 rounded-full"
          style={{ background: `linear-gradient(to bottom, ${colors.accent}, ${colors.label})` }}
        />
        <h3 className="font-display font-semibold text-white text-base">{name}</h3>
        <span
          className="ml-auto font-mono text-xs px-2 py-0.5 rounded-full"
          style={{ background: `${colors.accent}22`, color: colors.label }}
        >
          {items.length}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <SkillBadge
            key={skill.name}
            skill={skill}
            accent={colors.accent}
            label={colors.label}
            delay={i * 0.04}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const totalSkills = Object.values(skills).reduce((acc, arr) => acc + arr.length, 0);

  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-purple-400/60 mb-3 tracking-widest">TECHNICAL SKILLS</p>
          <h2 className="section-title gradient-text-2">Built with these tools</h2>
          <p className="text-white/40 text-sm font-mono mt-3">{totalSkills} technologies across {Object.keys(skills).length} domains</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([name, items], i) => (
            <CategoryCard key={name} name={name} items={items} index={i} />
          ))}
        </div>

        {/* Featured marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 overflow-hidden"
        >
          <div className="flex gap-3 animate-marquee whitespace-nowrap" style={{ animation: 'marquee 30s linear infinite' }}>
            {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map((s, i) => (
              <span key={`${s.name}-${i}`}
                className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full shrink-0"
                style={{ background: 'rgba(124,58,237,0.1)', color: 'rgba(192,132,252,0.5)', border: '1px solid rgba(124,58,237,0.15)' }} >
                <img
                  src={s.icon}
                  alt={s.name}
                  className="w-8 h-8 object-contain relative z-10" />
                {s.name}
              </span>
            ))}
          </div>
        </motion.div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}
