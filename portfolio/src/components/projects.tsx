"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Code2, Palette, Database } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with Next.js, featuring user authentication, payment integration, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      icon: Code2,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      icon: Database,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Design System",
      description: "A comprehensive design system and component library used across multiple projects, featuring reusable components and design tokens.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Storybook", "Tailwind CSS", "Figma"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      icon: Palette,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Analytics Dashboard",
      description: "A data visualization dashboard for business analytics with interactive charts, real-time data updates, and export functionality.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      icon: Code2,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      icon: Database,
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Learning Platform",
      description: "An interactive online learning platform with video streaming, progress tracking, and gamification elements.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Prisma", "AWS", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      icon: Palette,
      color: "from-teal-500 to-green-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed px-4">
            Here are some of my recent projects that showcase my skills and passion 
            for creating innovative solutions. Each project represents a unique 
            challenge and learning experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-effect rounded-xl overflow-hidden hover:bg-background/30 transition-all duration-500 h-full border-0 shadow-lg hover:shadow-2xl backdrop-blur-sm group-hover:scale-[1.02] touch-manipulation">
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`} />
                  <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
                    <project.icon size={48} className="sm:hidden text-white/80 group-hover:scale-110 transition-transform duration-300" />
                    <project.icon size={64} className="hidden sm:block text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass-effect rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm min-h-[40px] min-w-[40px] flex items-center justify-center touch-manipulation"
                      aria-label="View live project"
                    >
                      <ExternalLink size={14} className="sm:hidden text-white" />
                      <ExternalLink size={16} className="hidden sm:block text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass-effect rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm min-h-[40px] min-w-[40px] flex items-center justify-center touch-manipulation"
                      aria-label="View source code"
                    >
                      <Github size={14} className="sm:hidden text-white" />
                      <Github size={16} className="hidden sm:block text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground/70 mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs sm:text-sm bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-colors text-sm sm:text-base min-h-[48px] touch-manipulation"
          >
            <Github size={18} />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}