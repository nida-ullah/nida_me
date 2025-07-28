"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Trophy, TrendingUp } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Junior Full Stack Developer",
      company: "Tech Innovations Ltd.",
      location: "Remote",
      duration: "2023 - Present",
      type: "Full-time",
      description: "Developing and maintaining web applications using React, Next.js, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built responsive web applications serving 10k+ users",
        "Reduced page load times by 40% through optimization",
        "Implemented new features increasing user engagement by 25%"
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"]
    },
    {
      title: "Frontend Developer Intern",
      company: "Digital Solutions Co.",
      location: "City, Country",
      duration: "2023 (6 months)",
      type: "Internship",
      description: "Focused on frontend development and UI/UX implementation. Worked closely with designers to create pixel-perfect user interfaces.",
      achievements: [
        "Developed 15+ responsive component library",
        "Improved mobile user experience by 30%",
        "Mentored 2 junior interns in React best practices"
      ],
      technologies: ["React", "JavaScript", "CSS3", "Figma"]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      duration: "2022 - 2023",
      type: "Freelance",
      description: "Delivered custom web solutions for small businesses and startups. Managed complete project lifecycle from requirements gathering to deployment.",
      achievements: [
        "Completed 8+ successful projects",
        "Maintained 100% client satisfaction rate",
        "Generated $15k+ in revenue"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "City, Country",
      duration: "2020 - 2024",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for 6 consecutive semesters",
        "President of Computer Science Club",
        "Winner of Annual Hackathon 2023"
      ]
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Experience & Education
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed px-4">
            My professional journey and academic background that shaped my expertise in web development.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
              Professional Experience
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-foreground/20 to-transparent hidden sm:block" />
                  )}
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 glass-effect p-6 rounded-xl hover:bg-background/30 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h4>
                          <h5 className="text-lg font-semibold text-foreground/80 mb-2">
                            {exp.company}
                          </h5>
                        </div>
                        <span className="px-3 py-1 bg-foreground/10 text-foreground rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-foreground/80 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h6 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Trophy className="w-4 h-4" />
                          Key Achievements:
                        </h6>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-foreground/70 text-sm flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full mt-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary/50 text-foreground rounded text-xs"
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
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />
              Education
            </h3>

            {education.map((edu, index) => (
              <div key={index} className="glass-effect p-6 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-1">
                      {edu.degree}
                    </h4>
                    <h5 className="text-lg font-semibold text-foreground/80 mb-2">
                      {edu.institution}
                    </h5>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-foreground/70 mb-1">{edu.duration}</div>
                    <div className="text-sm font-semibold text-foreground">GPA: {edu.gpa}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-foreground/70 mb-4">
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </div>

                {/* Achievements */}
                <div>
                  <h6 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    Academic Achievements:
                  </h6>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-foreground/70 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full mt-2 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 