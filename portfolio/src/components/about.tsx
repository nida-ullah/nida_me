"use client"

import { motion } from "framer-motion"
import { Code, Palette, Server, Database, Globe, Smartphone } from "lucide-react"

export default function About() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Responsive Design, Prototyping",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "SQL, NoSQL, Redis, Database Optimization",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "HTML5, CSS3, JavaScript, Progressive Web Apps",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Flutter, Mobile-First Design",
      color: "from-teal-500 to-green-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed px-4">
            I&apos;m a passionate full-stack developer with 1+ year of experience creating 
            digital experiences that make a difference. I love turning complex problems 
            into simple, beautiful, and intuitive solutions. When I&apos;m not coding, you&apos;ll 
            find me exploring new technologies, contributing to open source, or designing 
            user interfaces that delight and inspire.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              className="group"
            >
              <div className="p-4 sm:p-6 rounded-xl glass-effect hover:bg-background/50 transition-all duration-300 h-full border-0 shadow-lg hover:shadow-xl backdrop-blur-sm touch-manipulation">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${skill.color} p-2 sm:p-3 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <skill.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground/70">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16"
        >
          {[
            { number: "5+", label: "Projects Completed" },
            { number: "1+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}