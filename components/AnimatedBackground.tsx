'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particles system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }> = [];

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: Math.random() * 300 + 100,
        maxLife: Math.random() * 300 + 100,
      };
    };

    // Initialize particles
    for (let i = 0; i < 80; i++) {
      particles.push(createParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Reset particle if it dies or goes off screen
        if (particle.life <= 0 || particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
          particles[i] = createParticle();
          continue;
        }

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        const size = Math.max(0.5, alpha * 2);
        
        ctx.save();
        ctx.globalAlpha = alpha * 0.6;
        ctx.fillStyle = '#64ffda';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 100) * alpha * (other.life / other.maxLife) * 0.2;
            ctx.strokeStyle = '#64ffda';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  const floatingElements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 5,
    size: Math.random() * 60 + 20,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  const codeSnippets = [
    'const dev = "Vaibhav";',
    'function() { return awesome; }',
    '{ skill: "React.js" }',
    'npm run build',
    'git commit -m "magic"',
    'console.log("Hello World");',
    'import { innovation } from "mind";',
    'export default creativity;'
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Canvas for particle system */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-40"
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black opacity-90"></div>
      
      {/* Floating Geometric Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute pointer-events-none"
          style={{
            left: `${element.left}%`,
            top: `${Math.random() * 100}%`,
            opacity: element.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: element.animationDelay,
            ease: "linear"
          }}
        >
          <div 
            className="bg-gradient-to-br from-[#64ffda]/20 to-[#4fd1c7]/10 rounded-lg border border-[#64ffda]/20"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
          />
        </motion.div>
      ))}

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute pointer-events-none font-mono text-xs text-[#64ffda]/30 whitespace-nowrap"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          {snippet}
        </motion.div>
      ))}

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-[#64ffda] text-sm"
            style={{
              left: `${i * 5}%`,
              top: '-100px',
            }}
            animate={{
              y: ['-100px', '100vh'],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {Array.from({ length: 10 }).map((_, j) => (
              <div key={j} className="mb-2">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#64ffda]/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4fd1c7]/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-[#64ffda]/8 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
    </div>
  );
}