import { useEffect, useState } from 'react';
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
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

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

    const onMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg text-ink noise overflow-x-hidden">
      {/* Ambient mouse-follow glow */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(91, 140, 255, 0.06), transparent 60%)`,
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
