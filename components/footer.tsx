'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`backdrop-blur-md border-t py-8 ${
        theme === 'dark' 
          ? 'bg-gray-800/90 border-gray-700' 
          : 'bg-white/80 border-gray-200'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-[60%] mx-auto">
          {/* Copyright Section - Moved to the left side */}
          <div className={`text-sm ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            &copy; 2025 Aweke Adisie. All rights reserved.
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Social Media Links - Simplified */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Connect
              </h3>
              <ul className="space-y-1">
                {[
                  { href: 'https://linkedin.com', label: 'LinkedIn' },
                  { href: 'https://github.com', label: 'GitHub' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-200 text-sm ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:text-indigo-400' 
                          : 'text-gray-600 hover:text-indigo-600'
                      }`}
                      aria-label={`Follow on ${item.label}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Contact
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="mailto:aweke@example.com"
                    className={`transition-colors duration-200 text-sm ${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:text-indigo-400' 
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                    aria-label="Email Aweke Adisie"
                  >
                    aweke@example.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className={`transition-colors duration-200 text-sm ${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:text-indigo-400' 
                        : 'text-gray-600 hover:text-indigo-600'
                    }`}
                    aria-label="Call Aweke Adisie"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}