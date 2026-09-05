import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const inputClass = `w-full bg-transparent px-4 py-3 rounded-xl font-body text-sm text-white/80 outline-none transition-all duration-200 placeholder-white/25`;
const inputStyle = { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(168,85,247,0.18)' };
const inputFocusStyle = { border: '1px solid rgba(168,85,247,0.5)', boxShadow: '0 0 0 3px rgba(124,58,237,0.1)' };

function FormInput({ label, type = 'text', name, value, onChange, placeholder, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className="block font-mono text-xs text-purple-400/60 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={inputClass}
        style={focused ? inputFocusStyle : inputStyle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

function FormTextarea({ label, name, value, onChange, placeholder, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label className="block font-mono text-xs text-purple-400/60 mb-2">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={5}
        className={inputClass}
        style={focused ? { ...inputFocusStyle, resize: 'vertical' } : { ...inputStyle, resize: 'vertical' }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

const contactLinks = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
  { icon: Github, label: 'GitHub', value: 'PREETHI156', href: personalInfo.github },
  { icon: Linkedin, label: 'LinkedIn', value: 'preethi-ravi', href: personalInfo.linkedin },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simulated submit — connect to EmailJS / Formspree / API here
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-sm text-purple-400/60 mb-3 tracking-widest">GET IN TOUCH</p>
          <h2 className="section-title gradient-text-2">Let's build something together</h2>
          <p className="text-white/45 text-sm font-body mt-3 max-w-lg mx-auto leading-relaxed">
            Open to full-time roles, freelance projects, and collaborations — especially in ERP, backend systems, and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="glass rounded-2xl p-7" style={{ border: '1px solid rgba(168,85,247,0.15)' }}>
              <h3 className="font-display font-semibold text-white text-base mb-5">Contact details</h3>
              <div className="flex flex-col gap-4">
                {contactLinks.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(168,85,247,0.2)' }}
                    >
                      <Icon size={14} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-white/30 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer"
                          className="font-mono text-xs text-white/65 hover:text-purple-300 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="font-mono text-xs text-white/65">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg, rgba(91,33,182,0.12), rgba(124,58,237,0.08))', border: '1px solid rgba(168,85,247,0.18)' }}
            >
              <p className="font-body text-sm text-white/55 leading-relaxed italic">
                "I'm particularly interested in roles where I can work on ERP systems, distributed backends, or cloud infrastructure — places where code correctness actually matters."
              </p>
              <p className="font-mono text-xs text-purple-400/50 mt-3">— Preethi Ravi</p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={onSubmit} className="glass rounded-2xl p-7 flex flex-col gap-5" style={{ border: '1px solid rgba(168,85,247,0.18)' }}>
              <div className="grid sm:grid-cols-2 gap-5">
                <FormInput label="Name" name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
                <FormInput label="Email" type="email" name="email" value={form.email} onChange={onChange} placeholder="your@email.com" required />
              </div>
              <FormInput label="Subject" name="subject" value={form.subject} onChange={onChange} placeholder="What's this about?" required />
              <FormTextarea label="Message" name="message" value={form.message} onChange={onChange} placeholder="Tell me about your project or opportunity..." required />

              {/* Status */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 font-mono text-sm"
                >
                  <CheckCircle2 size={15} /> Message sent — I'll be in touch soon.
                </motion.div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 font-mono text-sm">
                  <AlertCircle size={15} /> Something went wrong. Please try email directly.
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 disabled:opacity-60"
                style={{ background: 'linear-gradient(135deg, #5b21b6, #7c3aed)', boxShadow: '0 0 24px rgba(124,58,237,0.4)' }}
                onMouseEnter={(e) => { if (!sending) e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.7)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 24px rgba(124,58,237,0.4)'; }}
              >
                {sending ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </span>
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </button>

              <p className="font-mono text-xs text-white/20 text-center">
                Or reach me directly at{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-purple-400/50 hover:text-purple-300 transition-colors">
                  {personalInfo.email}
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
