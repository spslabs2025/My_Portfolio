import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight, Check, MapPin, PenTool, Video, UtensilsCrossed, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  demoLink: string;
  codeLink: string;
  icon: React.ElementType;
  gradient: string;
  accent: string;
  ring: string;
  badge: string;
}

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: 'SideQuest',
      tagline: 'Discover hidden places that never show up on Google Maps.',
      description:
        'Most memorable places in a city are rarely tourist attractions. The sunset point locals know. The hidden café everyone discovers through friends. The quiet viewpoint. The photography spot nobody talks about. SideQuest is a community-driven discovery platform where users explore and share hidden gems around them instead of popular tourist destinations.',
      features: [
        'Discover hidden local places',
        'Community-driven recommendations',
        'Scenic viewpoints & hidden cafés',
        'Photography locations & night views',
        'Couple-friendly local gems',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      demoLink: 'https://sidequest0.vercel.app/',
      codeLink: '#',
      icon: MapPin,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      accent: 'text-emerald-600 dark:text-emerald-400',
      ring: 'group-hover:ring-emerald-500/40',
      badge: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    },
    {
      title: 'Hydrogen',
      tagline: 'Generate realistic handwritten pages from digital text.',
      description:
        'Hydrogen is a modern handwriting generator that converts typed text into authentic-looking handwritten pages. Designed for students, professionals, and content creators, it eliminates hours of manual writing while preserving a natural handwritten appearance.',
      features: [
        'Realistic handwriting generation',
        'Custom ink colors',
        'Adjustable page margins',
        'Multi-page PDF export',
        'Secure encrypted local storage',
      ],
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
      demoLink: 'https://hydrogen20.vercel.app/',
      codeLink: '#',
      icon: PenTool,
      gradient: 'from-sky-500 via-blue-500 to-indigo-600',
      accent: 'text-sky-600 dark:text-sky-400',
      ring: 'group-hover:ring-sky-500/40',
      badge: 'bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400',
    },
    {
      title: 'Tutor Bin',
      tagline: 'AI-powered teaching studio for educators and creators.',
      description:
        'Tutor Bin is an all-in-one platform for creating educational content. Instead of switching between multiple tools, educators can record, teach, draw, and manage lessons inside a single workspace.',
      features: [
        'Screen, webcam & audio recording',
        'Infinite interactive whiteboard',
        'Slide management',
        'Auto-save & cloud synchronization',
        'Modern responsive interface',
      ],
      technologies: ['React', 'Vite', 'Tailwind CSS'],
      demoLink: 'https://tutorbin.vercel.app/',
      codeLink: '#',
      icon: Video,
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-600',
      accent: 'text-violet-600 dark:text-violet-400',
      ring: 'group-hover:ring-violet-500/40',
      badge: 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400',
    },
    {
      title: 'ZapDine',
      tagline: 'Modern QR-based restaurant ordering and management platform.',
      description:
        'ZapDine is a SaaS platform built for restaurants to digitize ordering, streamline operations, and improve customer experience. Customers simply scan a QR code to browse the menu and place orders, while restaurants manage everything through a centralized dashboard.',
      features: [
        'QR-based ordering',
        'Digital menu management',
        'Live order tracking',
        'Restaurant dashboard & analytics',
        'Table management & customer insights',
      ],
      technologies: ['Django', 'Django REST Framework', 'Next.js', 'PostgreSQL', 'AWS', 'Docker'],
      demoLink: 'https://zapdine.food/',
      codeLink: '#',
      icon: UtensilsCrossed,
      gradient: 'from-amber-500 via-orange-500 to-rose-600',
      accent: 'text-amber-600 dark:text-amber-400',
      ring: 'group-hover:ring-amber-500/40',
      badge: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-amber-500 mr-2" size={20} />
            <span className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
              Flagship Products
            </span>
            <Sparkles className="text-amber-500 ml-2" size={20} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-600 to-cyan-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real products solving real problems — built end-to-end and shipped to production
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group relative glass rounded-2xl overflow-hidden hover-lift smooth-transition fade-in ${
                  isVisible ? 'visible' : ''
                } ring-1 ring-transparent ${project.ring}`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {/* Gradient Banner */}
                <div className={`relative h-32 bg-gradient-to-r ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/20 rounded-full filter blur-2xl floating"></div>
                    <div className="absolute -bottom-10 -left-6 w-32 h-32 bg-white/10 rounded-full filter blur-2xl floating-delayed"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-between px-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg ring-1 ring-white/30">
                        <project.icon size={26} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white drop-shadow-sm">
                          {project.title}
                        </h3>
                        <p className="text-white/90 text-sm font-medium max-w-xs leading-snug">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8">
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${project.accent}`}>
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className={`flex-shrink-0 mt-0.5 mr-2 w-5 h-5 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                            <Check size={12} className="text-white" strokeWidth={3} />
                          </span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${project.accent}`}>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${project.badge}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100 dark:border-gray-800">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-5 py-2.5 bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold rounded-lg hover-lift smooth-transition shadow-md`}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-5 py-2.5 glass text-sm font-semibold rounded-lg hover-lift smooth-transition ${project.accent}`}
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* View More CTA */}
        <div className={`text-center mt-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <a
            href="https://spslabs.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-600 text-white font-semibold rounded-xl hover-lift smooth-transition shadow-lg hover:shadow-xl"
          >
            <span>Explore All Products</span>
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
