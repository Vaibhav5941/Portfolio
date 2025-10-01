'use client';

import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  level: number;
  icon: LucideIcon;
  index: number;
}

export default function SkillCard({ name, level, icon: Icon, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="p-6 rounded-xl bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 hover:border-[#64ffda]/30 transition-all duration-300 group"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#64ffda]/20 to-[#4fd1c7]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-[#64ffda]" />
        </div>
        <div className="ml-4 flex-1">
          <span className="text-lg font-semibold text-white block">{name}</span>
          <span className="text-[#64ffda] font-mono text-sm">{level}%</span>
        </div>
      </div>
      
      <div className="relative">
        <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            className="h-3 bg-gradient-to-r from-[#64ffda] to-[#4fd1c7] rounded-full relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1 + index * 0.2,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}