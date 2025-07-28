"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ArrowLeft, Search, Mail } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      <div className="bg-orb bg-orb-3"></div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Large 404 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-8xl sm:text-9xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text mb-8"
          >
            404
          </motion.div>

          {/* Error Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-foreground/70 mb-8 max-w-md mx-auto"
          >
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back to somewhere useful.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Home size={20} />
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground rounded-lg font-semibold hover:bg-foreground/5 transition-all duration-300 backdrop-blur-sm hover:border-foreground/40"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 p-6 glass-effect rounded-xl backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Looking for something specific?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/#about"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-background/30 transition-colors text-foreground/70 hover:text-foreground"
              >
                <Search size={16} />
                About Me
              </Link>
              <Link
                href="/#projects"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-background/30 transition-colors text-foreground/70 hover:text-foreground"
              >
                <Search size={16} />
                My Projects
              </Link>
              <Link
                href="/#contact"
                className="flex items-center gap-2 p-3 rounded-lg hover:bg-background/30 transition-colors text-foreground/70 hover:text-foreground"
              >
                <Mail size={16} />
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-sm text-foreground/50 italic"
          >
            &ldquo;Every error is a step toward perfection.&rdquo; - Let&apos;s build something amazing together.
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 