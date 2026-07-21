import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowIBuild from './components/HowIBuild';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Products from './components/Products';
import Philosophy from './components/Philosophy';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sohard Pratap Singh',
      jobTitle: 'Founder & Lead Software Engineer',
      description:
        'Founder of SPSLabs, building AI-native software products end-to-end.',
      url: 'https://sohardpratapsingh.netlify.app',
      sameAs: [
        'https://github.com/sohardpratap',
        'https://linkedin.com/in/sohard-pratap-singh/',
        'https://leetcode.com/u/sohardpratapsingh346',
      ],
      knowsAbout: [
        'Product Engineering',
        'AI-native Software',
        'Django',
        'Next.js',
        'Multi-tenant SaaS',
        'Cloud & DevOps',
      ],
    });
    document.head.appendChild(schemaScript);

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if (glowRef.current) {
          glowRef.current.style.setProperty('--mx', `${(e.clientX / window.innerWidth) * 100}%`);
          glowRef.current.style.setProperty('--my', `${(e.clientY / window.innerHeight) * 100}%`);
        }
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg text-ink noise overflow-x-hidden">
      {/* Ambient mouse-follow glow (CSS-driven, no React re-renders) */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 -z-10 will-change-[background]"
        style={{
          ['--mx' as string]: '50%',
          ['--my' as string]: '30%',
          background:
            'radial-gradient(600px circle at var(--mx) var(--my), rgba(91, 140, 255, 0.05), transparent 60%)',
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <HowIBuild />
        <Skills />
        <Experience />
        <Products />
        <Philosophy />
        <Timeline />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
