'use client';

import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import About from '../../components/About';
import Projects from '../../components/projects';
import Contact from '../../components/Contact';
import Skills from '../../components/Skills';

export default function Home() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const controls = useAnimation();

  // Refs for sections
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Typing animation for hero description
  const descriptionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Debug t and language
  useEffect(() => {
    console.log('Language:', language);
    console.log('Translations (t):', t);
    if (t && t.home) {
      setIsLoading(false);
      controls.start('visible');
    } else {
      console.warn('Translations not ready, t:', t);
    }
  }, [t, language, controls]);

  // Handle scroll for Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to specific section
  const scrollToSection = (sectionId: string) => {
    const sections: { [key: string]: React.RefObject<HTMLElement | null> } = {
      about: aboutRef,
      projects: projectsRef,
      skills: skillsRef,
      contact: contactRef,
    };

    const sectionRef = sections[sectionId];
    if (sectionRef?.current) {
      const offsetTop = sectionRef.current.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show loading state until t.home is available
  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
        }`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-600"></div>
          <p className="mt-4 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative ${
        theme === 'dark'
          ? 'bg-gray-900 text-white'
          : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900'
      } font-noto-serif-ethiopic transition-colors duration-300`}
    >
      <style jsx global>{`
        .shiny-dark-blue {
          background: linear-gradient(135deg, #0a0a23 0%, #1e3a8a 100%);
          position: relative;
          overflow: hidden;
        }
        .shiny-light-blue {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }
        .shiny-dark-blue::before,
        .shiny-light-blue::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          animation: shine 6s infinite linear;
        }
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .section-divider {
          height: 4px;
          background: linear-gradient(
            to right,
            transparent,
            ${theme === 'dark' ? '#4f46e5' : '#818cf8'},
            transparent
          );
        }
        .image-container {
          position: relative;
          width: 192px;
          height: 192px;
          margin: 0 auto 4rem;
          z-index: 10;
        }
        .profile-image {
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid ${theme === 'dark' ? '#374151' : 'white'};
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }
        .hero-content {
          position: relative;
          z-index: 20;
          padding-top: 3rem;
        }
        .text-content {
          position: relative;
          z-index: 15;
          margin-top: 3rem;
        }
        .stats-card {
          background: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.2)'};
          backdrop-filter: blur(10px);
          border: ${theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.3)'};
        }
        .newsletter-input {
          background: ${theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.2)'};
          border: ${theme === 'dark' ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.3)'};
        }
        .light-button-primary {
          background: white;
          color: #4f46e5;
        }
        .light-button-secondary {
          border: 2px solid white;
          color: white;
        }
        .light-button-secondary:hover {
          background: white;
          color: #4f46e5;
        }
        @media (max-width: 640px) {
          .image-container {
            width: 160px;
            height: 160px;
            margin-bottom: 3rem;
          }
          .hero-content {
            padding-top: 2rem;
          }
          .text-content {
            margin-top: 2rem;
          }
        }
        @media (max-width: 480px) {
          .image-container {
            margin-bottom: 2.5rem;
          }
          .text-content {
            margin-top: 1.5rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`min-h-screen flex items-center justify-center py-16 pt-24 relative overflow-hidden ${
          theme === 'dark' ? 'shiny-dark-blue' : 'shiny-light-blue'
        }`}
        role="region"
        aria-label="Hero Section"
      >
        <div className={`absolute inset-0 z-0 ${theme === 'dark' ? 'bg-black/20' : 'bg-black/10'}`}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center hero-content">
          <div className="image-container">
            {!imageLoaded && (
              <div
                className={`absolute inset-0 rounded-full animate-pulse z-0 ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
                }`}
              />
            )}
            <Image
              src="/my photo.JPG"
              alt="Aweke Adisie"
              width={192}
              height={192}
              className="profile-image transition-opacity duration-300 z-10 relative"
              priority
              onLoad={() => setImageLoaded(true)}
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
          </div>

          <div className="text-content">
            <h1
              className={`text-4xl sm:text-5xl font-extrabold mb-8 tracking-tight drop-shadow-md px-4 relative z-10 ${
                theme === 'dark' ? 'text-white' : 'text-white'
              }`}
            >
              {t.home?.title || 'Welcome to My Portfolio'}
            </h1>
            <motion.p
              className={`text-lg max-w-2xl mx-auto mb-10 drop-shadow-md px-4 leading-relaxed relative z-10 ${
                theme === 'dark' ? 'text-gray-100' : 'text-gray-100'
              }`}
              variants={descriptionVariants}
              initial="hidden"
              animate={controls}
              aria-label="Portfolio description"
            >
              {(t.home?.description ||
                "I'm Aweke Adisie, a passionate web and mobile app developer and video editor building innovative solutions with modern technologies.")
                .split('')
                .map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 relative z-10 mt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className={`inline-block py-3 px-6 rounded-full transition-colors duration-300 font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transform hover:scale-105 ${
                  theme === 'dark' ? 'bg-white text-indigo-600 hover:bg-gray-100' : 'bg-white text-indigo-600 hover:bg-gray-50'
                }`}
                aria-label={t.home?.cta || 'Explore My Work'}
              >
                {t.home?.cta || 'Explore My Work'}
              </button>

              <a
                href="/aweke adisie (2).pdf"
                download="Aweke_Adisie_Resume.pdf"
                className="inline-block border-2 border-white text-white py-3 px-6 rounded-full hover:bg-white hover:text-indigo-600 transition-colors duration-300 font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transform hover:scale-105"
                aria-label={t.resume || 'Download Resume'}
              >
                {t.resume || 'Download Resume'}
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="section-divider" />

      {/* About Section */}
      <section
        ref={aboutRef}
        id="about"
        className={`transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
      >
        <About />
      </section>

      <div className="section-divider" />

      {/* Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        className={`transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
      >
        <Projects />
      </section>

      <div className="section-divider" />

      {/* Skills Section */}
      <section
        ref={skillsRef}
        id="skills"
        className={`transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
      >
        <Skills />
      </section>

      <div className="section-divider" />

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="stats"
        className={`min-h-screen flex items-center justify-center py-16 ${
          theme === 'dark' ? 'shiny-dark-blue' : 'shiny-light-blue'
        }`}
        role="region"
        aria-label="Statistics Section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-12 drop-shadow-md px-4 ${
              theme === 'dark' ? 'text-white' : 'text-white'
            }`}
          >
            {t.stats?.title || 'My Achievements'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="p-6 stats-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p
                className={`text-4xl font-bold mb-2 drop-shadow-md ${
                  theme === 'dark' ? 'text-white' : 'text-white'
                }`}
              >
                1+
              </p>
              <p
                className={`drop-shadow-md ${theme === 'dark' ? 'text-gray-100' : 'text-gray-100'}`}
              >
                {t.stats?.years || 'Years of Experience'}
              </p>
            </div>
            <div className="p-6 stats-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p
                className={`text-4xl font-bold mb-2 drop-shadow-md ${
                  theme === 'dark' ? 'text-white' : 'text-white'
                }`}
              >
                6+
              </p>
              <p
                className={`drop-shadow-md ${theme === 'dark' ? 'text-gray-100' : 'text-gray-100'}`}
              >
                {t.stats?.projects || 'Projects Completed'}
              </p>
            </div>
            <div className="p-6 stats-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p
                className={`text-4xl font-bold mb-2 drop-shadow-md ${
                  theme === 'dark' ? 'text-white' : 'text-white'
                }`}
              >
                3+
              </p>
              <p
                className={`drop-shadow-md ${theme === 'dark' ? 'text-gray-100' : 'text-gray-100'}`}
              >
                {t.stats?.clients || 'Happy Clients'}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="section-divider" />

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className={`transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
      >
        <Contact />
      </section>

      <div className="section-divider" />

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="newsletter"
        className={`min-h-screen flex items-center justify-center py-16 ${
          theme === 'dark' ? 'shiny-dark-blue' : 'shiny-light-blue'
        }`}
        role="region"
        aria-label="Newsletter Section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 drop-shadow-md px-4 ${
              theme === 'dark' ? 'text-white' : 'text-white'
            }`}
          >
            {t.newsletter?.title || 'Stay Updated'}
          </h2>
          <p
            className={`mb-8 max-w-2xl mx-auto drop-shadow-md px-4 ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-100'
            }`}
          >
            {t.newsletter?.description || 'Subscribe to my newsletter for the latest updates.'}
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 px-4">
            <input
              type="email"
              placeholder={t.newsletter?.placeholder || 'Enter your email'}
              className={`flex-1 px-4 py-3 rounded-full placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 backdrop-blur-sm transition-all duration-300 ${
                theme === 'dark' ? 'newsletter-input text-white' : 'bg-white/30 text-white border border-white/40'
              }`}
              aria-label={t.newsletter?.placeholder || 'Enter your email'}
            />
            <button
              type="submit"
              className={`px-6 py-3 rounded-full transition-colors duration-300 font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transform hover:scale-105 ${
                theme === 'dark' ? 'bg-white text-indigo-600 hover:bg-gray-100' : 'bg-white text-indigo-600 hover:bg-gray-50'
              }`}
            >
              {t.newsletter?.button || 'Subscribe'}
            </button>
          </form>
        </div>
      </motion.section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 z-50"
          aria-label="Back to Top"
          title="Back to Top"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}