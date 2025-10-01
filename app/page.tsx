'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail, MapPin, Phone } from 'lucide-react';
import FloatingNav from '@/components/FloatingNav';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      <FloatingNav />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto max-w-6xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center"
          >
            {/* Glitch Effect Name */}
            <div className="relative mb-6">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                VAIBHAV
              </motion.h1>
              <motion.h1 
                className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#64ffda] via-[#4fd1c7] to-[#3abab4] bg-clip-text text-transparent"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                GUPTA
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-6 py-3 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-sm mb-4">
                <div className="w-2 h-2 bg-[#64ffda] rounded-full animate-pulse mr-3"></div>
                <span className="text-gray-300 font-mono text-sm">STATUS: AVAILABLE FOR WORK</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-xl md:text-2xl text-gray-400 mb-8 font-light leading-relaxed max-w-3xl mx-auto"
            >
              Full-Stack Developer crafting digital experiences with modern technologies.
              Specializing in scalable web applications and innovative solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                size="lg" 
                onClick={() => window.open("https://sevenshade.vercel.app/")}
                className="bg-gradient-to-r from-[#64ffda] to-[#4fd1c7] hover:from-[#4fd1c7] hover:to-[#3abab4] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("https://drive.google.com/uc?export=download&id=1GbUg02xOrbftOqDvN0gHvKO2DMeugN6U", "_blank")} 
                className="border-gray-600 text-gray-300 hover:border-[#64ffda] hover:text-[#64ffda] px-8 py-3 rounded-full transition-all duration-300"
              >
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gray-500 text-sm font-mono mb-2">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-[#64ffda]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-[#64ffda]/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-[#64ffda] mb-2">1+</div>
              <div className="text-gray-400">Company Experience</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-[#64ffda]/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-[#64ffda] mb-2">5+</div>
              <div className="text-gray-400">Projects Completed</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 hover:border-[#64ffda]/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-[#64ffda] mb-2">100%</div>
              <div className="text-gray-400">Learning & Growth</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Technology Arsenal
            </h2>
            <p className="text-gray-400 text-lg">
              Mastering modern tools to build exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[ 'c','c++','Python', 'MySQL', 'Django', 'React.js','Next.js', 'MongoDB','Postgresql','Power BI','HTML','JavaScript'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="p-4 rounded-xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-[#64ffda]/50 transition-all duration-300 text-center"
              >
                <div className="text-[#64ffda] font-mono text-sm font-semibold">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}