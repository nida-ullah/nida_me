"use client"

import { motion } from "framer-motion"
import { Code, Palette, Server, Database, Globe, Smartphone, Award, BookOpen } from "lucide-react"

export default function About() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
      color: "from-blue-500 to-cyan-500",
      proficiency: 85
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "from-green-500 to-emerald-500",
      proficiency: 75
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Responsive Design, Prototyping",
      color: "from-purple-500 to-pink-500",
      proficiency: 70
    },
    {
      icon: Database,
      title: "Database Management",
      description: "SQL, NoSQL, Redis, Database Optimization",
      color: "from-orange-500 to-red-500",
      proficiency: 80
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "HTML5, CSS3, JavaScript, Progressive Web Apps",
      color: "from-indigo-500 to-blue-500",
      proficiency: 90
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Flutter, Mobile-First Design",
      color: "from-teal-500 to-green-500",
      proficiency: 65
    }
  ]

  const technologies = [
    { name: "React", level: 85, color: "#61DAFB", icon: "⚛️" },
    { name: "Next.js", level: 80, color: "#ffffff", icon: "▲", darkColor: "#000000" },
    { name: "TypeScript", level: 75, color: "#3178C6", icon: "TS" },
    { name: "Node.js", level: 70, color: "#339933", icon: "⬢" },
    { name: "Python", level: 75, color: "#3776AB", icon: "Py", isCustom: true },
    { name: "PostgreSQL", level: 70, color: "#336791", icon: "🐘" },
    { name: "MongoDB", level: 65, color: "#47A248", icon: "🍃" },
    { name: "Tailwind CSS", level: 90, color: "#06B6D4", icon: "💨" }
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
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed px-4">
            I&apos;m a passionate full-stack developer with 1+ year of experience creating 
            digital experiences that make a difference. I specialize in modern web technologies 
            and have a keen eye for design. My goal is to bridge the gap between design and 
            development, creating solutions that are both beautiful and functional.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              className="group"
            >
              <div className="p-4 sm:p-6 rounded-xl glass-effect hover:bg-background/50 transition-all duration-300 h-full border-0 shadow-lg hover:shadow-xl backdrop-blur-sm touch-manipulation">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r ${skill.color} p-2 sm:p-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <skill.icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs sm:text-sm text-foreground/60">Proficiency</span>
                    <div className="text-lg sm:text-xl font-bold text-foreground">{skill.proficiency}%</div>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground/70 mb-3">
                  {skill.description}
                </p>
                {/* Progress Bar */}
                <div className="w-full bg-secondary/50 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Proficiency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Technology Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.5 }}
                className="flex items-center justify-between p-3 sm:p-4 glass-effect rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-bold text-white text-sm sm:text-base border border-white/20"
                    style={{ 
                      backgroundColor: tech.name === "Next.js" 
                        ? "var(--foreground)" 
                        : tech.name === "Python"
                        ? "transparent"
                        : tech.color,
                      background: tech.name === "Python" 
                        ? "linear-gradient(135deg, #3776AB 50%, #FFC836 50%)"
                        : tech.name === "Next.js" 
                        ? "var(--foreground)" 
                        : tech.color,
                      color: tech.name === "Next.js" 
                        ? "var(--background)" 
                        : tech.name === "TypeScript" || tech.name === "Python"
                        ? "white" 
                        : "white"
                    }}
                  >
                    {tech.icon || tech.name.charAt(0)}
                  </div>
                  <span className="font-medium text-foreground text-sm sm:text-base">{tech.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-24 sm:w-32 bg-secondary/50 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: tech.name === "Next.js" ? "var(--foreground)" : tech.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: false, amount: 0.5 }}
                    />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-foreground min-w-[3rem]">
                    {tech.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16"
        >
          {[
            { number: "5+", label: "Projects Completed", icon: Code },
            { number: "1+", label: "Years Experience", icon: Award },
            { number: "100%", label: "Client Satisfaction", icon: Globe },
            { number: "24/7", label: "Learning Mode", icon: BookOpen }
          ].map((stat) => (
            <motion.div 
              key={stat.label} 
              className="text-center p-4 glass-effect rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="flex justify-center mb-2">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-foreground/70" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-foreground/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}