'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Database, Globe, Cpu, Brain } from 'lucide-react';
import FloatingNav from '@/components/FloatingNav';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const projects = [
    {
      title: 'LLM Query System',
      description: 'Advanced query system powered by Large Language Models for intelligent data retrieval and processing.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'streamlit', 'OpenAI', 'LLM', 'PostgreSQL'],
      github: 'https://github.com/Vaibhav5941/llm_query_system',
      live: 'https://llm-query-system-2.onrender.com/',
      featured: true,
      category: 'AI/ML',
      icon: Brain
    },
    {
      title: 'SevenShades',
      description: 'Modern e-commerce platform with advanced UI/UX and real-time inventory management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Django', 'React.js', 'MySQL'],
      github: 'https://github.com/Vaibhav5941/sevenshades',
      live: 'https://sevenshade.vercel.app/',
      featured: true,
      category: 'Web App',
      icon: Globe
    },
    {
      title: 'job_application_agent',
      description: 'Built an Agentic AI Job Application Assistant that matches skills, highlights gaps, and generates tailored cover letters and more.',
      image: 'https://img.freepik.com/free-vector/business-people-isometric-concept-with-images-recruitment-phone-agent-with-smartphones-pictogram-elements-vector-illustration_1284-30152.jpg',
      tech: ['Python', 'Streamlit', 'PostgreSQL', 'OpenAI', 'Agentic AI'],
      github: 'https://github.com/Vaibhav5941/job_application_agent',
      live: 'https://github.com/Vaibhav5941/job_application_agent',
      featured: false,
      category: 'AI/ML',
      icon: Database
    },
    {
      title: 'Binance Bot',
      description: 'A Python-based Binance Futures trading bot using python-binance SDK with CLI interface used for stock market.',
      image: 'https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg?semt=ais_hybrid&w=740&q=80',
      tech: ['Python', 'OpenAI','JSON'],
      github: 'https://github.com/Vaibhav5941/vaibhav_gupta_binance_bot',
      live: 'https://github.com/Vaibhav5941/vaibhav_gupta_binance_bot',
      featured: false,
      category: 'Dashboard',
      icon: Cpu
    },
    {
      title: 'Speech Segmentation',
      description: 'automated speech segmentation pipeline that processes audio/video files to identify and extract speech segments using RMS energy analysis.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'NumPy', 'SciPy', 'FFmpeg'],
      github: 'https://github.com/Vaibhav5941/Speech_Segmentation',
      live: 'https://github.com/Vaibhav5941/Speech_Segmentation',
      featured: false,
      category: 'AI/ML',
      icon: Zap
    },
  ];

  const categories = ['All', 'Web App', 'AI/ML', 'Dashboard'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />
      <FloatingNav />
      
      <section className="relative pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-[#64ffda] bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A showcase of innovative solutions and cutting-edge applications I've built 
              using modern technologies and best practices.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-mono text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#64ffda] text-black'
                    : 'bg-gray-900/50 text-gray-400 hover:text-[#64ffda] border border-gray-700/50 hover:border-[#64ffda]/50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#64ffda]">Featured Work</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-[#64ffda]/50 transition-all duration-500"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80"></div>
                  </div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="flex items-center mb-3">
                      <project.icon className="w-6 h-6 text-[#64ffda] mr-2" />
                      <Badge className="bg-[#64ffda]/20 text-[#64ffda] border-[#64ffda]/30">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800/80 text-[#64ffda] text-xs font-mono rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <Button
                        size="sm"
                        className="bg-[#64ffda] hover:bg-[#4fd1c7] text-black font-semibold"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-600 text-gray-300 hover:border-[#64ffda] hover:text-[#64ffda]"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects Grid */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-[#64ffda]/50 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <project.icon className="w-5 h-5 text-[#64ffda] mr-2" />
                        <Badge className="bg-[#64ffda]/20 text-[#64ffda] border-[#64ffda]/30 text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-800/60 text-[#64ffda] text-xs font-mono rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-gray-500 text-xs">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-gray-600 text-gray-300 hover:border-[#64ffda] hover:text-[#64ffda] text-xs"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-gray-600 text-gray-300 hover:border-[#64ffda] hover:text-[#64ffda] text-xs"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}