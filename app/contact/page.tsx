'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import FloatingNav from '@/components/FloatingNav';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gvaibhav5941@gmail.com',
      link: 'mailto:gvaibhav5941@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7067193832',
      link: 'tel:+91XXXXXXXXXX'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      link: '#'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'vaibhav-gupta-559ba9280',
      link: 'https://linkedin.com/in/vaibhav-gupta-559ba9280'
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
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-[#64ffda] bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's collaborate and build something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-gray-700/50">
                <h2 className="text-3xl font-bold mb-8 text-[#64ffda]">Let's Connect</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-700/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#64ffda] to-[#4fd1c7] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-mono">{info.label}</div>
                        <div className="text-white font-semibold group-hover:text-[#64ffda] transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h3 className="text-lg font-semibold mb-4 text-white">Follow My Journey</h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://github.com"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 bg-gray-800 hover:bg-[#64ffda] rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-white hover:text-black transition-colors duration-300" />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/vaibhav-gupta-559ba9280"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="w-12 h-12 bg-gray-800 hover:bg-[#64ffda] rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-white hover:text-black transition-colors duration-300" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="p-6 rounded-xl bg-gradient-to-r from-green-900/30 to-green-800/30 border border-green-700/50"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                  <span className="text-green-400 font-semibold">Available for new projects</span>
                </div>
                <p className="text-green-300 text-sm mt-2">
                  Currently accepting new client work and exciting opportunities.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form 
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 space-y-6"
              >
                <h2 className="text-3xl font-bold mb-8 text-white">Send a Message</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <Input
                      {...register('name')}
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <Input
                      {...register('email')}
                      type="email"
                      className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <Input
                    {...register('subject')}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-[#64ffda] focus:ring-[#64ffda]/20"
                    placeholder="Project inquiry"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea
                    {...register('message')}
                    rows={5}
                    className="bg-gray-800/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-[#64ffda] focus:ring-[#64ffda]/20 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#64ffda] to-[#4fd1c7] hover:from-[#4fd1c7] hover:to-[#3abab4] text-black font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}