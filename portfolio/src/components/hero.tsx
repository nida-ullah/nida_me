"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:nida@example.com", label: "Email" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full glass-effect flex items-center justify-center text-2xl sm:text-4xl font-bold text-foreground backdrop-blur-sm shadow-inner">
                NUK
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 sm:mb-4 leading-tight"
          >
            NIDA ULLAH
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-4 sm:mb-6"
          >
            Full Stack Developer & UI/UX Designer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Passionate Full-Stack Developer specializing in creating exceptional digital experiences. 
            I transform ideas into scalable web applications using cutting-edge technologies like React, 
            Next.js, and Node.js. My focus is on delivering clean, efficient code and intuitive user interfaces 
            that make a real impact.
          </motion.p>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 px-4"
          >
            {[
              "🚀 Fast Development",
              "💡 Creative Solutions", 
              "📱 Mobile-First Design",
              "⚡ Performance Focused"
            ].map((item) => (
              <span 
                key={item}
                className="px-3 py-1 bg-secondary/50 text-foreground rounded-full text-xs sm:text-sm backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4"
          >
            <motion.button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-48 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base min-h-[48px] touch-manipulation shadow-lg backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              View My Work
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download
              className="w-full sm:w-48 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base min-h-[48px] touch-manipulation shadow-lg backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Download size={18} />
              </motion.div>
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center gap-4 sm:gap-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center touch-manipulation"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-foreground/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-2 sm:h-3 bg-foreground/30 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}