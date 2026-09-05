import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certifications } from '../../data/portfolioData';
import { Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

function CertCard({ cert, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden cursor-default transition-all duration-300"
      style={{
        background: 'rgba(10,6,25,0.7)',
        border: `1px solid ${cert.accent}28`,
        backdropFilter: 'blur(12px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `1px solid ${cert.accent}66`;
        e.currentTarget.style.boxShadow = `0 0 40px ${cert.accent}18, 0 20px 60px rgba(0,0,0,0.4)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = `1px solid ${cert.accent}28`;
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-[3px] w-full"
        style={{ background: `linear-gradient(90deg, ${cert.accent}, ${cert.accent}44)` }}
      />

      {/* Ambient glow */}
      <div
        className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `${cert.accent}12`, filter: 'blur(40px)' }}
      />

      <div className="p-6 flex flex-col gap-4">
        {/* Header row */}
        <div className="flex items-start justify-between">
          <div
            className="relative w-14 h-14 rounded-xl flex items-center justify-center shrink-0 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${cert.accent}18, ${cert.accent}08)`,
              border: `1px solid ${cert.accent}33`,
            }}
          >
            <img src={cert.icon} alt={cert.name} className="w-9 h-9 object-contain" />
          </div>

          {cert.validity ? (
            <div
              className="flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 rounded-full"
              style={{ background: `${cert.accent}15`, color: cert.accent, border: `1px solid ${cert.accent}33` }}
            >
              <CheckCircle2 size={9} /> Active
            </div>
          ) : (
            <div
              className="flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <ShieldCheck size={9} /> Certified
            </div>
          )}
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-[0.95rem] leading-snug mb-1">{cert.name}</h3>
          <p className="font-mono text-xs font-medium" style={{ color: cert.accent }}>{cert.issuer}</p>
        </div>

        <div className="h-px w-full" style={{ background: `linear-gradient(to right, ${cert.accent}22, transparent)` }} />

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-mono text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
            <Calendar size={10} /> {cert.date}
          </span>
          {cert.validity && (
            <span className="font-mono text-[10px]" style={{ color: `${cert.accent}88` }}>{cert.validity}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const aws = certifications[0];

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

        <div className="flex flex-col gap-6">

          {/* AWS — wide featured card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl overflow-hidden cursor-default transition-all duration-300"
            style={{ background: 'rgba(10,6,25,0.7)', border: `1px solid ${aws.accent}33`, backdropFilter: 'blur(12px)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = `1px solid ${aws.accent}66`;
              e.currentTarget.style.boxShadow = `0 0 60px ${aws.accent}20, 0 24px 60px rgba(0,0,0,0.4)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = `1px solid ${aws.accent}33`;
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${aws.accent}, ${aws.accent}33)` }} />
            <div
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `${aws.accent}0e`, filter: 'blur(60px)' }}
            />

            <div className="p-7 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: `linear-gradient(135deg, ${aws.accent}20, ${aws.accent}08)`, border: `1px solid ${aws.accent}44` }}
              >
                <img src={aws.icon} alt={aws.name} className="w-12 h-12 object-contain" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-display font-bold text-white text-xl">{aws.name}</h3>
                  <div
                    className="flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 rounded-full"
                    style={{ background: `${aws.accent}18`, color: aws.accent, border: `1px solid ${aws.accent}44` }}
                  >
                    <CheckCircle2 size={9} /> Active
                  </div>
                </div>
                <p className="font-mono text-sm font-semibold mb-2" style={{ color: aws.accent }}>{aws.issuer}</p>
                <p className="font-body text-xs text-white/45 leading-relaxed max-w-xl">
                  Industry-recognized certification validating expertise in cloud concepts, AWS services, security, architecture, and pricing.
                </p>
              </div>

              <div
                className="shrink-0 text-center px-5 py-4 rounded-xl hidden sm:block"
                style={{ background: `${aws.accent}0e`, border: `1px solid ${aws.accent}22` }}
              >
                <p className="font-mono text-xs text-white/35 mb-1">Issued</p>
                <p className="font-display font-bold text-white text-sm">Nov 2024</p>
                <div className="h-px my-2" style={{ background: `${aws.accent}33` }} />
                <p className="font-mono text-[10px]" style={{ color: `${aws.accent}99` }}>Until 2027</p>
              </div>
            </div>
          </motion.div>

          {/* Remaining 3 cards */}
          <div className="grid sm:grid-cols-3 gap-5">
            {certifications.slice(1).map((cert, i) => (
              <CertCard key={cert.name} cert={cert} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
