"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setFormState('loading')
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData)
      
      setFormState('success')
      setFormData({ name: "", email: "", message: "" })
      
      // Reset success state after 5 seconds
      setTimeout(() => setFormState('idle'), 5000)
    } catch {
      setFormState('error')
      setTimeout(() => setFormState('idle'), 5000)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nidaullah2002@gmail.com",
      href: "mailto:nidaullah2002@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 XXX XXX XXXX",
      href: "tel:+92XXXXXXXXX"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pakistan",
      href: "#"
    }
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/nida-ullah", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/nida-ullah", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/nida_ullah", label: "Twitter" },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed px-4">
            Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together. 
            I&apos;m always excited to take on new challenges and collaborate with passionate people.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect p-6 sm:p-8 rounded-xl border-0 shadow-lg backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                Send me a message
              </h3>
              
              {formState === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-green-700 dark:text-green-300 text-sm">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </span>
                </motion.div>
              )}
              
              {formState === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <span className="text-red-700 dark:text-red-300 text-sm">
                    Something went wrong. Please try again later.
                  </span>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 sm:py-4 bg-secondary/50 border rounded-lg focus:ring-2 focus:ring-foreground/20 focus:border-foreground/20 transition-colors text-foreground placeholder-foreground/50 min-h-[48px] touch-manipulation ${
                      errors.name ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Your Name"
                    disabled={formState === 'loading'}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 sm:py-4 bg-secondary/50 border rounded-lg focus:ring-2 focus:ring-foreground/20 focus:border-foreground/20 transition-colors text-foreground placeholder-foreground/50 min-h-[48px] touch-manipulation ${
                      errors.email ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="your@email.com"
                    disabled={formState === 'loading'}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 sm:py-4 bg-secondary/50 border rounded-lg focus:ring-2 focus:ring-foreground/20 focus:border-foreground/20 transition-colors resize-none text-foreground placeholder-foreground/50 touch-manipulation ${
                      errors.message ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder="Tell me about your project..."
                    disabled={formState === 'loading'}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-all duration-300 text-sm sm:text-base min-h-[48px] touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
                >
                  {formState === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass-effect rounded-lg border-0 hover:bg-background/30 transition-colors group touch-manipulation min-h-[64px]"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary/50 rounded-lg flex items-center justify-center group-hover:bg-foreground/10 transition-colors flex-shrink-0">
                      <info.icon size={20} className="sm:hidden text-foreground" />
                      <info.icon size={24} className="hidden sm:block text-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-foreground text-sm sm:text-base">{info.title}</h4>
                      <p className="text-foreground/70 text-sm sm:text-base truncate">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 glass-effect border-0 rounded-lg flex items-center justify-center hover:bg-background/30 transition-all duration-300 touch-manipulation group shadow-lg hover:shadow-xl transform hover:scale-105"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="sm:hidden group-hover:scale-110 transition-transform" />
                    <social.icon size={24} className="hidden sm:block group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="p-4 sm:p-6 glass-effect rounded-xl border border-blue-500/20 bg-blue-500/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="font-semibold text-foreground text-sm sm:text-base">Quick Response</span>
              </div>
              <p className="text-foreground/70 text-sm sm:text-base">
                I typically respond within 24 hours. For urgent projects, feel free to call or connect on LinkedIn.
              </p>
            </div>

            {/* Available for work */}
            <div className="p-4 sm:p-6 glass-effect rounded-xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="font-semibold text-foreground text-sm sm:text-base">Available for Projects</span>
              </div>
              <p className="text-foreground/70 text-sm sm:text-base">
                Currently accepting new projects and freelance opportunities. Let&apos;s build something amazing together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}