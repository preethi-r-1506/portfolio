import { Suspense, lazy } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Terminal from './components/Terminal';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050508]">
      {/* Page loader */}
      <Loader />

      {/* Global effects */}
      <CustomCursor />
      <ScrollProgress />
      <BackgroundEffects />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />

        {/* Section divider */}
        <div className="h-px max-w-5xl mx-auto" style={{ background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.25), transparent)' }} />

        <About />

        <div className="h-px max-w-5xl mx-auto" style={{ background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.25), transparent)' }} />

        <Experience />

        <div className="h-px max-w-5xl mx-auto" style={{ background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.25), transparent)' }} />

        <Skills />

        <div className="h-px max-w-5xl mx-auto" style={{ background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.25), transparent)' }} />

        <Projects />

        <div className="h-px max-w-5xl mx-auto" style={{ background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.25), transparent)' }} />

        <Education />

        <div className="h-px max-w-5xl mx-auto" style={{ background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.25), transparent)' }} />

        <Certifications />

        <div className="h-px max-w-5xl mx-auto" style={{ background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.25), transparent)' }} />

        <Contact />
      </main>

      <Footer />

      {/* Interactive terminal */}
      <Terminal />
    </div>
  );
}
