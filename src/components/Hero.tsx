import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Code2, Terminal, Sparkles, Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
      <div className="absolute inset-0 overflow-hidden opacity-40 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full filter blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full filter blur-3xl floating-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-300 to-emerald-300 rounded-full filter blur-3xl floating"></div>
      </div>

      <div className={`text-center max-w-5xl mx-auto z-10 fade-in ${isVisible ? 'visible' : ''}`}>
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 glass rounded-full mb-6">
            <Rocket className="text-sky-500 mr-2" size={18} />
            <span className="text-sm font-semibold text-sky-600 dark:text-sky-400 tracking-wide">
              Founder & Full Stack Developer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">
              Sohard Pratap Singh
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Building innovative solutions at <span className="font-semibold text-sky-600 dark:text-sky-400">SPSLabs</span>.
            Passionate about creating impactful digital experiences with modern technologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { name: 'Next.js', color: 'from-slate-700 to-slate-900' },
            { name: 'Django', color: 'from-emerald-600 to-teal-700' },
            { name: 'Flutter', color: 'from-sky-500 to-cyan-600' },
            { name: 'Python', color: 'from-blue-600 to-indigo-700' },
            { name: 'React', color: 'from-cyan-500 to-blue-500' }
          ].map((tech, index) => (
            <span
              key={tech.name}
              className={`px-5 py-2 glass rounded-full text-sm font-medium text-white bg-gradient-to-r ${tech.color} hover-scale smooth-transition fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech.name}
            </span>
          ))}
        </div>

        <div className={`flex flex-wrap justify-center gap-4 mb-12 fade-in ${isVisible ? 'visible' : ''}`}>
          <a
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-sky-500 to-cyan-600 text-white font-semibold rounded-xl hover-lift smooth-transition shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center">
              <Mail size={20} className="mr-2" />
              Get In Touch
            </span>
          </a>

          <a
            href="#projects"
            className="px-8 py-4 glass text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover-lift smooth-transition"
          >
            <span className="flex items-center">
              <Code2 size={20} className="mr-2" />
              View Projects
            </span>
          </a>

          <a
            href="https://drive.google.com/file/d/1FBRt1H8V0rDy1B6x70S85B7W4qX701di/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 smooth-transition hover-lift"
          >
            <span className="flex items-center">
              <Download size={20} className="mr-2" />
              Resume
            </span>
          </a>
        </div>

        <div className={`flex justify-center gap-4 mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          {[
            { href: "https://github.com/sohardpratap", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/in/sohard-pratap-singh/", icon: Linkedin, label: "LinkedIn" },
            { href: "https://leetcode.com/u/sohardpratapsingh346", icon: Terminal, label: "LeetCode" }
          ].map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover-scale smooth-transition hover:bg-sky-500 hover:text-white group"
              aria-label={social.label}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <social.icon size={22} className="text-slate-600 dark:text-slate-400 group-hover:text-white smooth-transition" />
            </a>
          ))}
        </div>

        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <a
            href="#about"
            className="inline-flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 smooth-transition group"
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <div className="p-2 glass rounded-full group-hover:bg-sky-500 group-hover:text-white smooth-transition">
              <ArrowDown size={18} className="animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
