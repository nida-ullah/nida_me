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
            I create beautiful, functional, and user-friendly web applications 
            using modern technologies. Passionate about clean code, great design, 
            and delivering exceptional user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4"
          >
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-colors text-sm sm:text-base min-h-[48px] touch-manipulation">
              View My Work
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border border-foreground/20 text-foreground rounded-lg font-semibold hover:bg-foreground/5 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base min-h-[48px] touch-manipulation">
              <Download size={18} />
              Download CV
            </button>
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