'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, Cog6ToothIcon, GlobeAltIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  className?: string;
  onNavigate?: (sectionId: string) => void;
}

export default function Navbar({ className, onNavigate }: NavbarProps) {
  const { t, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('#about');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Safe access to navbar titles with fallback
  const titles = t?.navbar?.titles || ['Aweke Adisie', 'Mobile Developer', 'Web Developer', 'Video Editor'];

  // Cycle through languages (only English and Amharic)
  const languages = ['en', 'am'];
  const nextLang = languages[(languages.indexOf(language) + 1) % languages.length];

  // Animate titles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [titles.length]);

  // Handle scroll to update active link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSettingsOpen) setIsSettingsOpen(false);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleLanguageChange = () => {
    setLanguage(nextLang);
    setIsSettingsOpen(false);
  };

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setIsMenuOpen(false);
    
    // Use the callback if provided, otherwise use default scrolling
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    } else {
      const sectionId = href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  // Helper function to build class names without clsx
  const buildClassName = (...classes: (string | undefined | null | false)[]) => {
    return classes.filter(Boolean).join(' ');
  };

  // Safe access to navbar labels with fallbacks
  const navbarLabels = {
    about: t?.navbar?.about || 'About',
    projects: t?.navbar?.projects || 'Projects',
    skills: t?.navbar?.skills || 'Skills',
    contact: t?.navbar?.contact || 'Contact'
  };

  return (
    <nav className={buildClassName(
      'fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700',
      className
    )}>
      <style jsx global>{`
        .nav-link {
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-link:hover {
          color: #4f46e5;
        }
        .dark .nav-link:hover {
          color: #818cf8;
        }
        .active-link {
          color: #4f46e5;
          font-weight: 600;
        }
        .dark .active-link {
          color: #818cf8;
        }
        .active-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: #4f46e5;
          border-radius: 1px;
        }
        .dark .active-link::after {
          background: #818cf8;
        }
        .title-container {
          height: 2rem;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .mobile-settings-dropdown {
          background: white;
          border: 1px solid #e5e7eb;
        }
        .dark .mobile-settings-dropdown {
          background: #1f2937;
          border: 1px solid #374151;
        }
      `}</style>

      {/* Animated Title */}
      <div className="title-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTitleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-xl font-bold text-gray-800 dark:text-gray-200 whitespace-nowrap"
          >
            {titles[currentTitleIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex items-center space-x-2">
        {/* Settings Button for Mobile - Always visible */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={toggleSettings}
          className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors duration-200 sm:hidden"
          aria-label="Settings"
          title="Settings"
        >
          <Cog6ToothIcon className="w-6 h-6" />
        </motion.button>
        
        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="text-gray-800 dark:text-gray-200 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 sm:hidden"
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex sm:space-x-6 sm:items-center">
        <li>
          <a
            href="#about"
            className={buildClassName(
              'nav-link block py-2 text-gray-800 dark:text-gray-200 text-sm font-medium',
              activeLink === '#about' && 'active-link'
            )}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#about');
            }}
          >
            {navbarLabels.about}
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={buildClassName(
              'nav-link block py-2 text-gray-800 dark:text-gray-200 text-sm font-medium',
              activeLink === '#projects' && 'active-link'
            )}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#projects');
            }}
          >
            {navbarLabels.projects}
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={buildClassName(
              'nav-link block py-2 text-gray-800 dark:text-gray-200 text-sm font-medium',
              activeLink === '#skills' && 'active-link'
            )}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#skills');
            }}
          >
            {navbarLabels.skills}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={buildClassName(
              'nav-link block py-2 text-gray-800 dark:text-gray-200 text-sm font-medium',
              activeLink === '#contact' && 'active-link'
            )}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
          >
            {navbarLabels.contact}
          </a>
        </li>
        
        {/* Settings Dropdown for Desktop */}
        <li className="relative">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={toggleSettings}
            className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors duration-200"
            aria-label="Settings"
            title="Settings"
          >
            <Cog6ToothIcon className="w-6 h-6" />
          </motion.button>
          
          {isSettingsOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-12 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 z-50 min-w-[180px] border border-gray-200 dark:border-gray-600"
            >
              <button
                onClick={handleLanguageChange}
                className="flex items-center space-x-3 w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 text-sm"
              >
                <GlobeAltIcon className="w-4 h-4" />
                <span>{t?.switchTo ? t.switchTo(nextLang) : `Switch to ${nextLang === 'am' ? 'Amharic' : 'English'}`}</span>
              </button>
              <button
                onClick={() => { toggleTheme(); setIsSettingsOpen(false); }}
                className="flex items-center space-x-3 w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 text-sm"
              >
                {theme === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </motion.div>
          )}
        </li>
      </ul>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sm:hidden z-40"
          >
            <div className="p-4 space-y-1">
              {[
                { href: '#about', label: navbarLabels.about },
                { href: '#projects', label: navbarLabels.projects },
                { href: '#skills', label: navbarLabels.skills },
                { href: '#contact', label: navbarLabels.contact },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={buildClassName(
                    'nav-link block py-3 px-4 text-gray-800 dark:text-gray-200 rounded-lg transition-colors duration-200',
                    activeLink === item.href && 'active-link bg-gray-100 dark:bg-gray-800'
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Settings Dropdown - Separate from menu */}
      <AnimatePresence>
        {isSettingsOpen && !isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-3 z-50 min-w-[200px] border border-gray-200 dark:border-gray-600 sm:hidden"
          >
            <div className="space-y-2">
              <button
                onClick={handleLanguageChange}
                className="flex items-center space-x-3 w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 text-sm"
              >
                <GlobeAltIcon className="w-5 h-5" />
                <span>{t?.switchTo ? t.switchTo(nextLang) : `Switch to ${nextLang === 'am' ? 'Amharic' : 'English'}`}</span>
              </button>
              <button
                onClick={() => { toggleTheme(); setIsSettingsOpen(false); }}
                className="flex items-center space-x-3 w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 text-sm"
              >
                {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu and settings */}
      {(isMenuOpen || isSettingsOpen) && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => {
            setIsMenuOpen(false);
            setIsSettingsOpen(false);
          }}
        />
      )}
    </nav>
  );
}