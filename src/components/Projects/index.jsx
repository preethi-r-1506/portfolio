import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../../data/portfolioData';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="project-card group relative rounded-2xl overflow-hidden cursor-default flex flex-col h-full"
      style={{ border: `1px solid rgba(168,85,247,0.18)`, background: 'rgba(13,13,26,0.7)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient top bar */}
      <div
        className="h-1 w-full transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, ${project.accent}, ${project.accent}88)`,
          boxShadow: hovered ? `0 0 20px ${project.accent}66` : 'none',
        }}
      />

      {/* Gradient header area */}
      <div
        className={`relative h-36 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
      >
        {/* Decorative bg pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
        <motion.div
          animate={{ rotate: hovered ? 5 : 0, scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 text-center"
        >
          <div
            className="font-display font-bold text-4xl mb-1"
            style={{ color: project.accent, textShadow: `0 0 30px ${project.accent}66` }}
          >
            {index + 1 < 10 ? `0${index + 1}` : index + 1}
          </div>
          <div className="font-mono text-xs text-white/40">{project.category}</div>
        </motion.div>

        {/* Glow on hover */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: `radial-gradient(circle at center, ${project.accent}22, transparent 70%)` }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display font-bold text-white text-lg mb-3 leading-tight">{project.title}</h3>
        <p className="text-white/55 text-sm leading-relaxed font-body mb-5">{project.description}</p>

        {/* Highlights */}
        <div className="flex flex-col gap-2 mb-5">
          {project.highlights.map((h) => (
            <div key={h} className="flex items-start gap-2">
              <ChevronRight size={12} className="mt-0.5 shrink-0" style={{ color: project.accent }} />
              <span className="font-mono text-xs text-white/50">{h}</span>
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded-lg"
              style={{
                background: `${project.accent}18`,
                color: project.accent,
                border: `1px solid ${project.accent}33`,
              }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-white/40 hover:text-white transition-colors"
            >
              <Github size={13} /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs hover:text-white transition-colors"
              style={{ color: project.accent }}
            >
              <ExternalLink size={13} /> Live on App Store
            </a>
          )}
          {!project.github && !project.live && (
            <span className="font-mono text-xs text-white/20 italic">Production — internal deployment</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-purple-400/60 mb-3 tracking-widest">PROJECTS</p>
          <h2 className="section-title gradient-text-2">Things I've shipped</h2>
          <p className="text-white/40 text-sm font-body mt-3 max-w-lg mx-auto">
            Production systems built at EWall Solutions — real infrastructure solving real operational problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
