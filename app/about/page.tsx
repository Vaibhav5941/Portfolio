'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Globe, Zap, Brain, Rocket } from 'lucide-react';
import FloatingNav from '@/components/FloatingNav';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function About() {
  const skills = [
    { name: 'Frontend Development', level: 95, icon: Globe },
    { name: 'Backend Development', level: 88, icon: Database },
    { name: 'Full-Stack Architecture', level: 92, icon: Code2 },
    { name: 'Problem Solving', level: 96, icon: Brain },
    { name: 'Performance Optimization', level: 85, icon: Zap },
    { name: 'Modern Frameworks', level: 90, icon: Rocket },
  ];

  const experience = [
    {
      title: 'Full-Stack Developer',
      company: 'Numeric Infosystem Pvt. Ltd',
      period: 'Jan 2024 - Apr 2024',
      description: 'Leading development of scalable web applications using modern tech stack.',
    },

  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      <FloatingNav />
      
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-[#64ffda] bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#64ffda] to-[#4fd1c7] rounded-full"></div>
          </motion.div>

          {/* Bio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#64ffda] mb-6">
                Crafting Digital Excellence
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
               I am an Computer Science student with a solid foundation in full-stack web development,
                seeking opportunities to apply and enhance my technical skills. I focus on building scalable, user-centric applications that deliver real value. My experience also includes data visualization and analysis using Power BI, creating insightful dashboards and reports.</p>
              <p className="text-gray-300 leading-relaxed text-lg">
                I have developed several projects, including Seven Shades,
                 an AI chatbot for the Bajaj Policy Hackathon,
                  and Power BI dashboards for Amazon and hospital data, strengthening my skills in development, analytics, and problem-solving.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Through my internship at Numeric Infosystem Pvt. Ltd., I gained hands-on experience with Python, Django, SQL, and Power BI, learning real-world workflows and team collaboration. Awarded a college topper medal, I am passionate about crafting digital excellence and
                 exploring modern technologies while contributing to innovative solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-2xl font-semibold mb-6 text-[#64ffda]">Core Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#64ffda] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Innovation First</h4>
                      <p className="text-gray-400">Always seeking creative solutions to complex problems.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#64ffda] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Quality Focused</h4>
                      <p className="text-gray-400">Committed to writing clean, maintainable, and scalable code.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#64ffda] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Continuous Learning</h4>
                      <p className="text-gray-400">Embracing new technologies and best practices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-[#64ffda]/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-6 h-6 text-[#64ffda] mr-3" />
                    <span className="text-lg font-semibold text-white">{skill.name}</span>
                    <span className="ml-auto text-[#64ffda] font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className="h-2 bg-gradient-to-r from-[#64ffda] to-[#4fd1c7] rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Professional Journey
              </span>
            </h2>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#64ffda] via-[#4fd1c7] to-transparent"></div>
              
              <div className="space-y-12">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative flex items-start space-x-8"
                  >
                    {/* Timeline Dot */}
                    <div className="w-16 h-16 bg-gradient-to-br from-[#64ffda] to-[#4fd1c7] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#64ffda]/20">
                      <div className="w-8 h-8 bg-black rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-6 rounded-xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-[#64ffda]/30 transition-all duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="text-[#64ffda] font-semibold mb-1">{exp.company}</div>
                      <div className="text-gray-500 text-sm font-mono mb-3">{exp.period}</div>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}