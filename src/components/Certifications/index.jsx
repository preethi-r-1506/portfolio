import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certifications } from '../../data/portfolioData';
import { Award, Calendar, CheckCircle2 } from 'lucide-react';

function CertCard({ cert, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -4 }}
      className={`relative rounded-2xl p-6 bg-gradient-to-br ${cert.color} overflow-hidden transition-all duration-300 cursor-default`}
      style={{ border: `1px solid ${cert.accent}33` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 40px ${cert.accent}33, 0 20px 40px rgba(0,0,0,0.3)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {/* Glow blob */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none"
        style={{ background: `${cert.accent}20`, filter: 'blur(30px)' }}
      />

      <div className="relative z-10">
        {/* Icon + badge */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: `${cert.accent}22`, border: `1px solid ${cert.accent}44` }}
          >
            {cert.icon}
          </div>
          {cert.validity && (
            <div
              className="flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-full"
              style={{ background: `${cert.accent}22`, color: cert.accent, border: `1px solid ${cert.accent}44` }}
            >
              <CheckCircle2 size={10} /> Active
            </div>
          )}
        </div>

        <h3 className="font-display font-bold text-white text-base leading-tight mb-1">
          {cert.name}
        </h3>
        <p className="font-mono text-xs mb-4" style={{ color: `${cert.accent}cc` }}>
          {cert.issuer}
        </p>

        <div className="flex flex-wrap gap-3 text-xs">
          <span className="flex items-center gap-1.5 font-mono" style={{ color: 'rgba(255,255,255,0.4)' }}>
            <Calendar size={10} /> {cert.date}
          </span>
          {cert.validity && (
            <span className="font-mono" style={{ color: 'rgba(255,255,255,0.35)' }}>{cert.validity}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-purple-400/60 mb-3 tracking-widest">CERTIFICATIONS</p>
          <h2 className="section-title gradient-text-2">Verified credentials</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <CertCard key={cert.name} cert={cert} index={i} />
          ))}
        </div>

        {/* AWS highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 rounded-2xl p-6 flex items-center gap-5"
          style={{
            background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(180,83,9,0.06))',
            border: '1px solid rgba(245,158,11,0.2)',
          }}
        >
          <div className="text-3xl">☁️</div>
          <div>
            <p className="font-display font-semibold text-amber-300 text-sm mb-1">
              AWS Certified Cloud Practitioner
            </p>
            <p className="font-body text-xs text-white/45 leading-relaxed">
              Industry-recognized certification from Amazon Web Services, validating expertise in cloud concepts, AWS services, security, architecture, and pricing. Valid November 2024 – 2027.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
