import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode, FaPalette, FaMobile, FaDatabase } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-800 dark:text-white">
              Your Name
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">YN</span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              Full Stack Developer passionate about creating beautiful and functional web applications
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get In Touch
              </a>
              <a href="#projects" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I'm a passionate developer with expertise in modern web technologies. 
                I love building user-friendly applications that solve real-world problems 
                and create meaningful experiences for users.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                With experience in both frontend and backend development, I enjoy the 
                full development cycle from concept to deployment. I'm always eager 
                to learn new technologies and best practices.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://twitter.com" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Senior Developer</h4>
                  <p className="text-blue-100">Tech Company • 2022 - Present</p>
                </div>
                <div>
                  <h4 className="font-semibold">Full Stack Developer</h4>
                  <p className="text-blue-100">Startup • 2020 - 2022</p>
                </div>
                <div>
                  <h4 className="font-semibold">Frontend Developer</h4>
                  <p className="text-blue-100">Agency • 2018 - 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <div className="text-blue-600 mb-4">
                <FaCode size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Frontend</h3>
              <p className="text-slate-600 dark:text-slate-300">React, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <div className="text-green-600 mb-4">
                <FaDatabase size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Backend</h3>
              <p className="text-slate-600 dark:text-slate-300">Node.js, Express, Python, Django</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <div className="text-purple-600 mb-4">
                <FaMobile size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Mobile</h3>
              <p className="text-slate-600 dark:text-slate-300">React Native, Flutter</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
              <div className="text-orange-600 mb-4">
                <FaPalette size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Design</h3>
              <p className="text-slate-600 dark:text-slate-300">Figma, Adobe XD, UI/UX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Project 1</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">E-Commerce Platform</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">TypeScript</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Project 2</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Task Management App</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  A collaborative task management application with real-time updates and team features.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Firebase</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Tailwind</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">Project 3</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Portfolio Website</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  A modern, responsive portfolio website showcasing projects and skills.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Tailwind</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            I'm always interested in new opportunities and exciting projects. 
            Let's work together to bring your ideas to life!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:your.email@example.com" className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              <FaEnvelope size={20} />
              <span>Email Me</span>
            </a>
            <a href="https://linkedin.com" className="flex items-center space-x-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
