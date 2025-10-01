'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex ${
          scrolled ? 'backdrop-blur-md' : ''
        }`}
      >
        <div className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-2xl">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-[#64ffda] text-black'
                    : 'text-gray-300 hover:text-[#64ffda]'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#64ffda] rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 right-6 z-50 w-14 h-14 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-[#64ffda]" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6 text-[#64ffda]" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900/90 rounded-2xl p-8 border border-gray-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-2 gap-4">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 ${
                          pathname === item.href
                            ? 'bg-[#64ffda] text-black'
                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-[#64ffda]'
                        }`}
                      >
                        <item.icon className="w-6 h-6" />
                        <span className="text-sm font-medium">{item.name}</span>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Logo/Brand */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-6 left-6 z-40"
      >
        <Link href="/">
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50">
            <div className="w-8 h-8 bg-gradient-to-br from-[#64ffda] to-[#4fd1c7] rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">VG</span>
            </div>
            <span className="text-white font-mono text-sm font-semibold hidden sm:block">
              VAIBHAV.DEV
            </span>
          </div>
        </Link>
      </motion.div>
    </>
  );
}