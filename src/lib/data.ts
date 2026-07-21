import {
  MapPin, PenTool, Video, UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react';

export interface Product {
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  demoLink: string;
  icon: LucideIcon;
  accent: string;
  glow: string;
}

export const products: Product[] = [
  {
    name: 'ZapDine',
    tagline: 'A modern operating system for restaurants.',
    problem: 'Restaurants juggle phone calls, paper tickets, and fragmented tools just to take an order.',
    solution: 'QR-based ordering, live kitchen tickets, and a dashboard that brings the whole floor online.',
    features: [
      'QR-based table ordering',
      'Digital menu management',
      'Live order tracking',
      'Dashboard & analytics',
      'Table & customer insights',
    ],
    technologies: ['Django', 'DRF', 'Next.js', 'PostgreSQL', 'AWS', 'Docker'],
    demoLink: 'https://zapdine.food/',
    icon: UtensilsCrossed,
    accent: 'from-amber-400 to-orange-500',
    glow: 'rgba(251, 146, 60, 0.35)',
  },
  {
    name: 'SideQuest',
    tagline: 'Discover the places Google Maps never will.',
    problem: 'The best spots in any city are found through friends, not search engines.',
    solution: 'A community-driven platform where people share hidden local gems instead of tourist traps.',
    features: [
      'Community-driven discovery',
      'Hidden cafés & viewpoints',
      'Photography locations',
      'Local recommendations',
      'Save & share lists',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    demoLink: 'https://sidequest0.vercel.app/',
    icon: MapPin,
    accent: 'from-emerald-400 to-teal-500',
    glow: 'rgba(45, 212, 191, 0.35)',
  },
  {
    name: 'Hydrogen',
    tagline: 'Realistic handwritten pages from typed text.',
    problem: 'Writing pages by hand is repetitive, slow, and doesn\'t scale.',
    solution: 'Turn any text into natural-looking handwritten pages with adjustable ink, margins, and PDF export.',
    features: [
      'Realistic handwriting generation',
      'Custom ink colors & styles',
      'Adjustable page margins',
      'Multi-page PDF export',
      'Encrypted local storage',
    ],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    demoLink: 'https://hydrogen20.vercel.app/',
    icon: PenTool,
    accent: 'from-sky-400 to-blue-500',
    glow: 'rgba(56, 189, 248, 0.35)',
  },
  {
    name: 'Tutor Bin',
    tagline: 'An AI-powered teaching studio for educators.',
    problem: 'Teachers switch between five tools just to record, draw, and present a single lesson.',
    solution: 'One workspace for screen recording, an infinite whiteboard, slides, and cloud sync.',
    features: [
      'Screen, webcam & audio recording',
      'Infinite interactive whiteboard',
      'Slide management',
      'Auto-save & cloud sync',
      'Built for remote teaching',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    demoLink: 'https://tutorbin.vercel.app/',
    icon: Video,
    accent: 'from-violet-400 to-purple-500',
    glow: 'rgba(167, 139, 250, 0.35)',
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Dart', 'C / C++', 'Java'] },
  { label: 'Backend', items: ['Django', 'Django REST', 'FastAPI', 'Node.js', 'REST', 'JWT Auth'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'Vite'] },
  { label: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Redis'] },
  { label: 'Cloud & DevOps', items: ['AWS EC2', 'Docker', 'Kubernetes', 'CI / CD', 'Vercel'] },
  { label: 'AI', items: ['LangChain', 'RAG Pipelines', 'TensorFlow', 'Pandas', 'NumPy'] },
  { label: 'Product', items: ['Product Strategy', 'Discovery', 'Agile', 'User Research', 'Iteration'] },
  { label: 'Security', items: ['Nmap', 'Burp Suite', 'Wireshark', 'Pen Testing'] },
];

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  { year: '2025', title: 'Founded SPS Labs', description: 'Started an AI-first software studio to build products end-to-end.' },
  { year: '2025', title: 'Shipped ZapDine', description: 'A restaurant OS handling menus, orders, and live table flows.' },
  { year: '2025', title: 'Shipped Hydrogen', description: 'A handwriting generator turning typed text into realistic pages.' },
  { year: '2025', title: 'Shipped Tutor Bin', description: 'A teaching studio combining recording, whiteboard, and slides.' },
  { year: '2025', title: 'Shipped SideQuest', description: 'A community platform for discovering hidden local places.' },
  { year: 'Now', title: 'Building what\'s next', description: 'Exploring more AI-native products and shipping fast.' },
];

export interface Achievement {
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  { title: 'Founded SPS Labs', description: 'Built an AI-first software studio from zero — owning every layer.' },
  { title: 'Four production SaaS products', description: 'ZapDine, SideQuest, Hydrogen, and Tutor Bin — all shipped and live.' },
  { title: 'Scalable backend systems', description: 'Multi-tenant Django architectures with transactional integrity.' },
  { title: 'Cloud-native deployments', description: 'Dockerized workloads on AWS with automated CI/CD pipelines.' },
  { title: 'AI-first workflow', description: 'AI embedded across prototyping, research, code, and iteration.' },
  { title: 'Full product ownership', description: 'From customer discovery to deployment — one person, the whole loop.' },
];

export interface BuildStep {
  step: string;
  title: string;
  description: string;
}

export const buildSteps: BuildStep[] = [
  { step: '01', title: 'Problem', description: 'Start with a real, repetitive friction someone lives with every day.' },
  { step: '02', title: 'Research', description: 'Talk to users. Understand the workflow. Ignore what\'s trendy.' },
  { step: '03', title: 'Validation', description: 'Test the simplest version of the idea before writing any real code.' },
  { step: '04', title: 'Prototype', description: 'Build the thinnest end-to-end slice that proves the concept.' },
  { step: '05', title: 'Build', description: 'Turn the prototype into a production-grade, multi-tenant system.' },
  { step: '06', title: 'Deploy', description: 'Ship to real users with CI/CD, monitoring, and rollback safety.' },
  { step: '07', title: 'Feedback', description: 'Listen, measure, and watch how people actually use it.' },
  { step: '08', title: 'Iterate', description: 'Cut what didn\'t work. Double down on what did. Repeat.' },
];

export const socials = [
  { href: 'https://github.com/sohardpratap', label: 'GitHub' },
  { href: 'https://linkedin.com/in/sohard-pratap-singh/', label: 'LinkedIn' },
  { href: 'https://leetcode.com/u/sohardpratapsingh346', label: 'LeetCode' },
];

export const contactInfo = {
  email: 'sohardpratapsingh346@gmail.com',
  phone: '+91 9997697716',
  location: 'Dehradun, Uttarakhand, India',
  resume: 'https://drive.google.com/file/d/1FBRt1H8V0rDy1B6x70S85B7W4qX701di/view?usp=sharing',
};
