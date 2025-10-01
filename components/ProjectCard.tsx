'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  featured?: boolean;
  category: string;
  icon: any;
  index: number;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  tech, 
  github, 
  live, 
  featured = false, 
  category, 
  icon: Icon,
  index 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`group relative overflow-hidden rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-[#64ffda]/50 transition-all duration-500 ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className={`aspect-video overflow-hidden ${featured ? 'md:aspect-[2/1]' : ''}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80"></div>
      </div>
      
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
        <div className="flex items-center mb-3">
          <Icon className="w-6 h-6 text-[#64ffda] mr-2" />
          <Badge className="bg-[#64ffda]/20 text-[#64ffda] border-[#64ffda]/30">
            {category}
          </Badge>
          {featured && (
            <Badge className="ml-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/30">
              Featured
            </Badge>
          )}
        </div>
        
        <h3 className={`font-bold text-white mb-3 ${featured ? 'text-3xl' : 'text-xl'}`}>
          {title}
        </h3>
        <p className={`text-gray-300 mb-4 leading-relaxed ${featured ? 'text-lg' : 'text-sm'}`}>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.slice(0, featured ? 6 : 4).map((techItem) => (
            <span
              key={techItem}
              className={`px-3 py-1 bg-gray-800/80 text-[#64ffda] font-mono rounded-full ${
                featured ? 'text-sm' : 'text-xs'
              }`}
            >
              {techItem}
            </span>
          ))}
          {tech.length > (featured ? 6 : 4) && (
            <span className={`px-3 py-1 text-gray-500 ${featured ? 'text-sm' : 'text-xs'}`}>
              +{tech.length - (featured ? 6 : 4)} more
            </span>
          )}
        </div>
        
        <div className="flex space-x-4">
          <Button
            size={featured ? 'default' : 'sm'}
            className="bg-[#64ffda] hover:bg-[#4fd1c7] text-black font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open(live, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
          <Button
            variant="outline"
            size={featured ? 'default' : 'sm'}
            className="border-gray-600 text-gray-300 hover:border-[#64ffda] hover:text-[#64ffda] transition-all duration-300"
            onClick={() => window.open(github, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        </div>
      </div>
    </motion.div>
  );
}