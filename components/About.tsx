'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="about"
      className={`min-h-screen flex items-center justify-center py-12 ${
        theme === 'dark' ? 'shiny-dark-blue' : 'shiny-light-blue'
      }`}
    >
      <style jsx global>{`
        .about-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }
        .about-card p {
          text-shadow: ${theme === 'dark' ? '0 2px 4px rgba(0, 0, 0, 0.5)' : '0 2px 4px rgba(0, 0, 0, 0.3)'};
          transition: transform 0.3s ease;
        }
        .about-card:hover p {
          transform: scale(1.05);
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md ${
          theme === 'dark' ? 'text-white' : 'text-white'
        }`}>
          {t.about?.title || 'About Me'}
        </h2>
        <p className={`text-lg max-w-2xl mx-auto mb-8 drop-shadow-md ${
          theme === 'dark' ? 'text-gray-100' : 'text-gray-100'
        }`}>
          {t.about?.description || 'Learn more about my journey and experience.'}
        </p>
        <div className={`max-w-4xl mx-auto p-6 rounded-lg shadow-xl about-card ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600' 
            : 'bg-gradient-to-r from-blue-500 to-purple-500'
        }`}>
          <p className="text-white text-lg leading-relaxed">
            I,am Aweke Adisie, a Computer Science graduate from Woldia University, driven by a passion for crafting innovative web and mobile applications. With expertise in next.js, React Native,java and other modern web technologies, I’ve built user-focused solutions like a cinema ticketing app and a student clearance system, delivering seamless digital experiences. My work focuses on creating intuitive, scalable applications that solve real-world problems. I also dabble in video editing and content creation, using tools like Adobe Premiere Pro to craft engaging stories for platforms like TikTok, enhancing my ability to bring a creative edge to my technical projects.
          </p>
        </div>
      </div>
    </motion.section>
  );
}