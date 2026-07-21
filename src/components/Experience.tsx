import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Award, Users, Code, TrendingUp, Rocket, UtensilsCrossed, MapPin as PinIcon, PenTool, Video, Zap, Bot } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  companyLink?: string;
  type: 'founder' | 'developer' | 'senior';
}

interface Achievement {
  icon: React.ElementType;
  text: string;
  gradient: string;
}

const Experience: React.FC = () => {
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

  const experiences: ExperienceItem[] = [
    {
      title: 'Founder & Lead Software Engineer',
      company: 'SPS Labs',
      period: 'Jan 2025 – Present',
      location: 'Remote',
      companyLink: 'https://spslabs.vercel.app',
      type: 'founder',
      description:
        'Founded SPS Labs to design and build AI-first SaaS products from idea to production. Led every stage of product development — including customer discovery, product strategy, UX, architecture, backend engineering, deployment, and continuous iteration.',
      highlights: [
        'Built and launched multiple production-ready SaaS applications, including ZapDine, SideQuest, Tutor Bin, and Hydrogen.',
        'Designed scalable backend systems using Django, Django REST Framework, PostgreSQL, and Next.js with a strong focus on maintainability and performance.',
        'Owned complete product lifecycle — from validating ideas with users to prioritizing features, shipping MVPs, collecting feedback, and iterating rapidly.',
        'Engineered secure multi-tenant architectures with JWT authentication, role-based access control, transactional integrity, and RESTful APIs.',
        'Containerized applications using Docker and deployed production workloads on AWS with automated CI/CD pipelines.',
        'Leveraged AI extensively throughout product development for rapid prototyping, research, code generation, debugging, documentation, and workflow automation.',
        'Built responsive frontend experiences using React, Next.js, TypeScript, and Tailwind CSS.',
        'Managed cloud infrastructure, database design, API architecture, authentication, monitoring, and production deployments independently.',
        'Continuously experimented with product ideas, focusing on solving real-world problems through fast iteration and customer feedback.',
      ],
    },
  ];

  const achievements: Achievement[] = [
    { icon: Rocket, text: 'Founded and built SPS Labs from scratch.', gradient: 'from-sky-500 to-blue-600' },
    { icon: UtensilsCrossed, text: 'Developed ZapDine, a SaaS platform for QR-based restaurant ordering and management.', gradient: 'from-amber-500 to-orange-600' },
    { icon: PinIcon, text: 'Built SideQuest, a community platform for discovering hidden local places.', gradient: 'from-emerald-500 to-teal-600' },
    { icon: PenTool, text: 'Built Hydrogen, an AI-powered handwriting generation platform.', gradient: 'from-violet-500 to-purple-600' },
    { icon: Video, text: 'Built Tutor Bin, an AI-powered teaching studio for educators.', gradient: 'from-fuchsia-500 to-pink-600' },
    { icon: Zap, text: 'Shipped multiple full-stack products independently from concept to deployment.', gradient: 'from-cyan-500 to-blue-600' },
    { icon: Bot, text: 'Integrated AI into development workflows to accelerate product delivery and experimentation.', gradient: 'from-rose-500 to-red-600' },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass rounded-lg p-8 hover-lift smooth-transition">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>

                    <div className="flex items-center mb-4">
                      <Briefcase size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                      {exp.companyLink ? (
                        <a
                          href={exp.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center"
                        >
                          {exp.company}
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      ) : (
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</span>
                      )}
                    </div>
                  </div>

                  <div className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                    Founder
                  </div>
                </div>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-blue-600 dark:text-blue-400">
                    Highlights
                  </h4>
                  <div className="space-y-3">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-4"></div>
                        <p className="text-gray-700 dark:text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className={`mt-20 fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Key <span className="gradient-text">Achievements</span>
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex items-start p-5 glass rounded-lg hover-lift smooth-transition fade-in ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className={`flex-shrink-0 w-11 h-11 bg-gradient-to-r ${achievement.gradient} rounded-lg flex items-center justify-center mr-4 shadow-md`}>
                  <achievement.icon size={20} className="text-white" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1.5">
                  {achievement.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, label: 'Companies Founded', value: '2' },
              { icon: Users, label: 'Years Experience', value: '4+' },
              { icon: Code, label: 'Projects Delivered', value: '50+' },
              { icon: TrendingUp, label: 'Leadership Roles', value: '2' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center p-6 glass rounded-lg hover-lift smooth-transition fade-in ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={20} className="text-white" />
                </div>
                <div className="text-2xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
