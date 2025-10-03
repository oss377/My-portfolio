'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Projects() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'school Management System',
      description: 'A full-stack school Management System solution built with Next.js, TypeScript, and firebase integration. Features user authentication, product management, and secure payments.',
      technologies: ['Next.js', 'firebase', 'Tailwind CSS' ,'Cloudinary' ],
      githubLink: 'https://github.com/yourusername/ecommerce-platform',
      liveDemo: 'https://schoolmaanagment.netlify.app/',
      image: '/project1.jpg'
    },
    {
      title: 'Restaurant Management App',
      description: 'A collaborative Restaurant Management application with QR code ordering, real-time menu updates, and table management. Built with Next.js and Firebase to provide responsive, scalable, and secure operations.',
      technologies: ['Tailwind CSS', 'next.js', 'firebase','Cloudinary'],
      githubLink: 'https://github.com/yourusername/task-manager',
      liveDemo: 'https://ruharestaurant.netlify.app/',
      image: '/project2.jpg'
    },
    {
      title: 'Social Media Platform',
      description: 'Created a high-performance social media platform for short-form video uploads with real-time engagement and creator monetization tools. Designed with secure authentication and cloud-based storage.',
      technologies: ['Tailwind CSS', 'next.js', 'firebase','Cloudinary'],
      githubLink: 'https://github.com/yourusername/fitness-tracker',
      liveDemo: 'https://ethio-tok.netlify.app/',
      image: '/project3.jpg'
    },
    {
      title: 'Cinema Ticketing System',
      description: 'Full-featured ticketing platform with movie listings, seat selection, real-time booking, and secure payment integration. Built with a responsive UI and admin dashboard for managing screenings and sales.',
      technologies: ['Tailwind CSS', 'next.js', 'firebase','Cloudinary' ,'chapa Api'],
      githubLink: 'https://github.com/yourusername/blog-platform',
      liveDemo: 'https://ethocinema.netlify.app/',
      image: '/project4.jpg'
    },
    {
      title: 'gym managment system',
       description: 'A responsive gym website with dark/light mode, smooth animations, and contact form integration chapa payment integration with message suport for users and strong search engine.',
      technologies: ['Tailwind CSS', 'next.js', 'firebase','Cloudinary' ,'chapa Api'],
      githubLink: 'https://github.com/yourusername/weather-dashboard',
      liveDemo: 'https://goledgym.netlify.app/',
      image: '/project5.jpg'
    },
    {
      title: 'ethioCinema Mobile App',
      description: 'A responsive portfolio website with dark/light mode, smooth animations, and contact form integration.',
      technologies: ['Next.js', 'Framer Motion', 'EmailJS', 'Tailwind CSS'],
      githubLink: 'https://github.com/yourusername/portfolio',
      liveDemo: 'https://not.deployed.bc.i.dont.have.account',
      image: '/project6.jpg'
    }
  ];

  const totalSlides = Math.ceil(projects.length / 2);
  const currentSlide = Math.floor(currentIndex / 2);

  const handleNext = () => {
    if (currentIndex + 2 < projects.length) {
      setCurrentIndex(currentIndex + 2);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const handlePrev = () => {
    if (currentIndex - 2 >= 0) {
      setCurrentIndex(currentIndex - 2);
    } else {
      setCurrentIndex(projects.length % 2 === 0 ? projects.length - 2 : projects.length - (projects.length % 2)); // Loop to end
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex * 2);
  };

  // Get current projects to display (2 at a time)
  const currentProjects = [
    projects[currentIndex],
    ...(currentIndex + 1 < projects.length ? [projects[currentIndex + 1]] : [])
  ];

  // Check if buttons should be disabled (for non-looping behavior)
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex + 2 >= projects.length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="projects"
      className={`min-h-screen flex items-center justify-center py-16 ${
        theme === 'dark' ? 'shiny-dark-blue' : 'shiny-light-blue'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-md ${
            theme === 'dark' ? 'text-white' : 'text-white'
          }`}>
            {t.projects?.title || 'My Projects'}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto mb-8 drop-shadow-md ${
            theme === 'dark' ? 'text-gray-100' : 'text-gray-100'
          }`}>
            {t.projects?.description || 'Check out some of my recent work and personal projects.'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-xl shadow-2xl overflow-hidden h-full min-h-[500px] flex flex-col ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700' 
                  : 'bg-white/20 backdrop-blur-sm border border-white/30'
              }`}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <CodeBracketIcon className="w-16 h-16 mx-auto mb-2 opacity-80" />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex-1 p-6 flex flex-col">
                <h3 className={`text-2xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-white'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`mb-4 flex-1 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-100'
                }`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-200'
                  }`}>
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          theme === 'dark'
                            ? 'bg-indigo-600/30 text-indigo-200'
                            : 'bg-white/30 text-white'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto pt-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-lg transition-all duration-300 font-semibold ${
                      theme === 'dark'
                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                        : 'bg-white/30 text-white hover:bg-white/40'
                    }`}
                  >
                    <CodeBracketIcon className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 flex-1 py-3 px-4 rounded-lg transition-all duration-300 font-semibold ${
                      theme === 'dark'
                        ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                        : 'bg-white text-indigo-600 hover:bg-gray-100'
                    }`}
                  >
                    <EyeIcon className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-6">
          <button
            onClick={handlePrev}
            disabled={isPrevDisabled}
            className={`p-3 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? isPrevDisabled
                  ? 'bg-white/5 text-white/30 cursor-not-allowed'
                  : 'bg-white/10 text-white hover:bg-white/20'
                : isPrevDisabled
                ? 'bg-white/10 text-white/30 cursor-not-allowed'
                : 'bg-white/30 text-white hover:bg-white/40'
            }`}
            aria-label="Previous projects"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>

          {/* Project Indicators */}
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? theme === 'dark'
                      ? 'bg-white'
                      : 'bg-white'
                    : theme === 'dark'
                    ? 'bg-white/30 hover:bg-white/50'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className={`p-3 rounded-full transition-all duration-300 ${
              theme === 'dark'
                ? isNextDisabled
                  ? 'bg-white/5 text-white/30 cursor-not-allowed'
                  : 'bg-white/10 text-white hover:bg-white/20'
                : isNextDisabled
                ? 'bg-white/10 text-white/30 cursor-not-allowed'
                : 'bg-white/30 text-white hover:bg-white/40'
            }`}
            aria-label="Next projects"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Project Counter */}
        <div className="text-center mt-4">
          <span className={`text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-200'
          }`}>
            {currentSlide + 1} of {totalSlides}
          </span>
        </div>
      </div>
    </motion.section>
  );
}