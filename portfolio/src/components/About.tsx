'use client'

import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Mail } from 'lucide-react'

const About = () => {
  const infoItems = [
    { icon: User, label: 'Name', value: 'Your Name' },
    { icon: Calendar, label: 'Age', value: '25 years' },
    { icon: Mail, label: 'Email', value: 'your.email@example.com' },
    { icon: MapPin, label: 'Location', value: 'Your City, Country' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with a love for creating innovative web solutions. 
              With expertise in modern technologies like React, Node.js, and cloud platforms, 
              I bring ideas to life through clean, efficient code and beautiful user experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in continuous learning and staying 
              up-to-date with the latest industry trends.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {infoItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg"
                >
                  <item.icon className="text-purple-400" size={20} />
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6">
                What I Do
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Web Development</h4>
                    <p className="text-gray-300">Building responsive and modern web applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">UI/UX Design</h4>
                    <p className="text-gray-300">Creating intuitive and beautiful user interfaces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Mobile Development</h4>
                    <p className="text-gray-300">Developing cross-platform mobile applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-white font-semibold">Cloud Solutions</h4>
                    <p className="text-gray-300">Deploying and managing cloud infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About