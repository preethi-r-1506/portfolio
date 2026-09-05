import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#050508]"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center gap-6"
          >
            {/* Logo */}
            <div className="relative flex items-center justify-center">
              <img
                src="/assets/logo-nb.png"
                alt="Preethi Ravi"
                className="w-24 h-24 object-contain relative z-10"
              />
              {/* Orbiting dot */}
              <motion.div
                className="absolute w-full h-full rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ border: '1.5px dashed rgba(124,58,237,0.3)' }}
              >
                <div
                  className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                  style={{ background: '#a855f7', boxShadow: '0 0 8px #a855f7' }}
                />
              </motion.div>
            </div>

            {/* Typing code line */}
            <motion.div
              className="font-mono text-xs text-purple-400/70 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                █
              </motion.span>
              {' '}<span className="text-violet-300">const</span>{' '}
              <span className="text-white/60">portfolio</span>{' '}
              <span className="text-purple-400">=</span>{' '}
              <span className="text-emerald-400/70">await</span>{' '}
              <span className="text-white/50">load()</span>
            </motion.div>

            {/* Loading bar */}
            <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7)' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </div>

            <motion.p
              className="font-mono text-xs text-purple-400/60 tracking-[0.3em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              INITIALIZING
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
