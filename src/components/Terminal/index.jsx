import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';
import { personalInfo, skills, experience, projects } from '../../data/portfolioData';

const COMMANDS = {
  help: () => `Available commands:
  whoami      — About Preethi Ravi
  skills      — Technical skills overview
  experience  — Work history
  projects    — Key projects
  contact     — Contact details
  clear       — Clear terminal`,

  whoami: () => `${personalInfo.name} — ${personalInfo.title}
${personalInfo.summary}
Location: ${personalInfo.location}`,

  skills: () => Object.entries(skills)
    .map(([cat, items]) => `${cat}:\n  ${items.map(s => s.name).join(', ')}`)
    .join('\n\n'),

  experience: () => experience
    .map(e => `${e.company} | ${e.role} | ${e.duration}\n  → ${e.highlights.slice(0,2).map(h => h.title).join('\n  → ')}`)
    .join('\n\n'),

  projects: () => projects
    .map(p => `${p.title}\n  ${p.description.slice(0,80)}...\n  Stack: ${p.technologies.join(', ')}`)
    .join('\n\n'),

  contact: () => `Email:    ${personalInfo.email}
Phone:    ${personalInfo.phone}
GitHub:   ${personalInfo.github}
LinkedIn: ${personalInfo.linkedin}
Location: ${personalInfo.location}`,
};

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([{ type: 'output', text: 'Type "help" to see available commands.' }]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const run = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    setHistory((h) => [...h, { type: 'input', text: cmd }]);
    setCmdHistory((h) => [cmd, ...h]);
    setHistoryIdx(-1);

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    const fn = COMMANDS[trimmed];
    if (fn) {
      setHistory((h) => [...h, { type: 'output', text: fn() }]);
    } else if (trimmed) {
      setHistory((h) => [...h, { type: 'error', text: `Command not found: ${trimmed}. Type "help" for options.` }]);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      run(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      const idx = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(idx);
      setInput(cmdHistory[idx] || '');
    } else if (e.key === 'ArrowDown') {
      const idx = Math.max(historyIdx - 1, -1);
      setHistoryIdx(idx);
      setInput(idx === -1 ? '' : cmdHistory[idx]);
    }
  };

  return (
    <>
      {/* Floating toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.5 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-200"
        style={{
          background: open ? 'rgba(124,58,237,0.4)' : 'rgba(30,15,74,0.8)',
          border: '1px solid rgba(168,85,247,0.3)',
          backdropFilter: 'blur(12px)',
        }}
        aria-label="Toggle terminal"
        title="Interactive Terminal"
      >
        <TerminalIcon size={18} className="text-purple-300" />
      </motion.button>

      {/* Terminal window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[480px] max-w-[calc(100vw-3rem)] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: 'rgba(8,5,20,0.95)',
              border: '1px solid rgba(168,85,247,0.25)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 0 60px rgba(124,58,237,0.2)',
            }}
          >
            {/* Title bar */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: '1px solid rgba(168,85,247,0.15)' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <span className="font-mono text-xs text-purple-400/50">preethi@portfolio ~ $</span>
              <button onClick={() => setOpen(false)} className="text-white/30 hover:text-white/60 transition-colors">
                <X size={14} />
              </button>
            </div>

            {/* Output */}
            <div className="h-64 overflow-y-auto p-4 font-mono text-xs space-y-2">
              {history.map((line, i) => (
                <div key={i}>
                  {line.type === 'input' && (
                    <div className="flex gap-2">
                      <span className="text-purple-400 shrink-0">❯</span>
                      <span className="text-white/80">{line.text}</span>
                    </div>
                  )}
                  {line.type === 'output' && (
                    <pre className="text-white/55 whitespace-pre-wrap leading-relaxed pl-4">{line.text}</pre>
                  )}
                  {line.type === 'error' && (
                    <pre className="text-red-400/70 whitespace-pre-wrap pl-4">{line.text}</pre>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderTop: '1px solid rgba(168,85,247,0.12)' }}
            >
              <span className="font-mono text-xs text-purple-400 shrink-0">❯</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                className="flex-1 bg-transparent font-mono text-xs text-white/80 outline-none caret-purple-400"
                placeholder="type a command…"
                autoComplete="off"
                spellCheck={false}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
