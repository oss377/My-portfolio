import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaPython, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiCloudinary, SiDjango, SiFirebase, SiCplusplus } from 'react-icons/si';
import { SiReact as SiReactNative } from 'react-icons/si';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';

interface Skill {
  name: string;
  icon: React.ReactNode;
  logoUrl?: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: 'React',
    icon: <FaReact size={40} className="text-blue-500" />,
    description: 'I build dynamic SPAs with reusable components, hooks for state management, and integrate APIs for real-time data fetching in modern web applications.',
  },
  {
    name: 'React Native',
    icon: <SiReactNative size={40} className="text-blue-500" />,
    description: 'I develop cross-platform mobile apps using Expo, implement native modules, and create responsive UIs that work seamlessly on both iOS and Android.',
  },
  {
    name: 'Next.js',
    icon: <SiNextdotjs size={40} className="text-black dark:text-white" />,
    description: 'I leverage SSR and SSG for optimal SEO, implement API routes for full-stack solutions, and use App Router for scalable, high-performance applications.',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={40} className="text-blue-600" />,
    description: 'I implement type safety across projects, define interfaces for complex data structures, and enhance code maintainability in large-scale applications.',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={40} className="text-teal-500" />,
    description: 'I rapidly prototype responsive designs, create custom utility classes, and build consistent design systems with dark mode support.',
  },
  {
    name: 'Python',
    icon: <FaPython size={40} className="text-blue-800" />,
    description: 'I develop backend APIs, automate workflows with scripts, perform data analysis with Pandas, and build machine learning models for various applications.',
  },
  {
    name: 'Django',
    icon: <SiDjango size={40} className="text-green-800" />,
    description: 'I build secure REST APIs with Django REST Framework, implement authentication systems, and create scalable web applications with PostgreSQL.',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs size={40} className="text-green-600" />,
    description: 'I create RESTful APIs with Express.js, implement real-time features with Socket.io, and build scalable server-side applications.',
  },
  {
    name: 'Firebase',
    icon: <SiFirebase size={40} className="text-orange-500" />,
    description: 'I implement user authentication, use Firestore for real-time databases, handle file storage, and deploy serverless functions.',
  },
  {
    name: 'Java',
    icon: <FaJava size={40} className="text-red-600" />,
    description: 'I develop enterprise applications using Spring Boot, create Android apps, and build robust systems with object-oriented design patterns.',
  },
  {
    name: 'C++',
    icon: <SiCplusplus size={40} className="text-blue-700" />,
    description: 'I build high-performance applications, work with memory management, and develop system-level software requiring optimal resource utilization.',
  },
  {
    name: 'Cloudinary',
    icon: <SiCloudinary size={40} className="text-purple-600" />,
    description: 'I optimize image delivery with responsive breakpoints, implement video transformations, and manage digital assets efficiently in web applications.',
  },
  {
    name: 'CapCut',
    icon: null,
    logoUrl: 'https://www.capcut.com/static/capcut-logo.png',
    description: 'I create engaging video content with advanced editing, apply visual effects, and produce professional-grade videos for social media and marketing.',
  },
];

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  // Close toast on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (selectedSkill && !(event.target as HTMLElement).closest('.skill-card') && !(event.target as HTMLElement).closest('.toast')) {
        setSelectedSkill(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [selectedSkill]);

  // Safe function to get skill description from translation
  const getSkillDescription = (skill: Skill): string => {
    if (!t.skills) return skill.description;
    
    // Type-safe access to skill description
    const skillKey = skill.name.toLowerCase() as keyof typeof t.skills;
    return (t.skills as any)[skillKey] || skill.description;
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="skills"
      className={`min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative ${
        theme === 'dark' ? 'shiny-dark-blue bg-gradient-to-r from-gray-900 to-indigo-900' : 'shiny-light-blue bg-gradient-to-r from-indigo-100 to-blue-100'
      } ${selectedSkill ? 'backdrop-blur-sm' : ''}`}
    >
      <div className={`container mx-auto transition-all duration-300 ${selectedSkill ? 'blur-sm' : ''}`}>
        <div className="text-center mb-12">
          <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {t.skills?.title || 'My Skills'}
          </h2>
          <p className={`text-lg sm:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t.skills?.description || 'Explore the technologies and tools I specialize in to build impactful solutions.'}
          </p>
        </div>

        {/* Updated grid layout for 5 cards per row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`skill-card p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                theme === 'dark'
                  ? 'bg-gray-800/70 backdrop-blur-md border border-gray-700/50 hover:bg-white hover:text-gray-900 hover:border-white/30'
                  : 'bg-white/70 backdrop-blur-md border border-gray-200/50 hover:bg-gray-900 hover:text-white hover:border-gray-900/30'
              }`}
              whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleSkillClick(skill)}
            >
              {skill.logoUrl ? (
                <img
                  src={skill.logoUrl}
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="mb-3 w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
              ) : (
                <div className="mb-3">{skill.icon}</div>
              )}
              <span className={`text-base sm:text-lg font-semibold text-center transition-colors duration-300 ${
                theme === 'dark' ? 'text-white group-hover:text-gray-900' : 'text-gray-900 group-hover:text-white'
              }`}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
            
            {/* Toast Card - No hover effects */}
            <motion.div
              className={`toast relative rounded-xl shadow-2xl max-w-md w-full mx-auto z-60 ${
                theme === 'dark'
                  ? 'bg-gray-800/95 border border-gray-600'
                  : 'bg-white/95 border border-gray-300'
              }`}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ 
                duration: 0.3, 
                ease: 'easeOut',
                scale: { type: "spring", damping: 20, stiffness: 300 }
              }}
            >
              <div className="p-6 sm:p-8">
                {/* Header with icon and title */}
                <div className="flex items-center space-x-4 mb-4">
                  {selectedSkill.logoUrl ? (
                    <img
                      src={selectedSkill.logoUrl}
                      alt={selectedSkill.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain flex-shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                      {selectedSkill.icon}
                    </div>
                  )}
                  <div>
                    <h3 className={`text-2xl sm:text-3xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {selectedSkill.name}
                    </h3>
                  </div>
                </div>

                {/* Description with fixed height for 3 lines */}
                <div className="min-h-[84px] mb-4">
                  <p className={`text-base leading-relaxed ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    {getSkillDescription(selectedSkill)}
                  </p>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setSelectedSkill(null)}
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                    theme === 'dark'
                      ? 'bg-gray-700 hover:bg-gray-600 text-white'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  {t.skills?.close || 'Close'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Skills;