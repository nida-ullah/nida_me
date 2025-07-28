"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nida@example.com",
      href: "mailto:nida@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Your City, Country",
      href: "#"
    }
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
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
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and design. Let&apos;s connect!
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
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-secondary/50 border border-border rounded-lg focus:ring-2 focus:ring-foreground/20 focus:border-foreground/20 transition-colors text-foreground placeholder-foreground/50 min-h-[48px] touch-manipulation"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 sm:py-4 bg-secondary/50 border border-border rounded-lg focus:ring-2 focus:ring-foreground/20 focus:border-foreground/20 transition-colors text-foreground placeholder-foreground/50 min-h-[48px] touch-manipulation"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 sm:py-4 bg-secondary/50 border border-border rounded-lg focus:ring-2 focus:ring-foreground/20 focus:border-foreground/20 transition-colors resize-none text-foreground placeholder-foreground/50 touch-manipulation"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-colors text-sm sm:text-base min-h-[48px] touch-manipulation"
                >
                  <Send size={18} />
                  Send Message
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
                Follow Me
              </h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 glass-effect border-0 rounded-lg flex items-center justify-center hover:bg-background/30 transition-colors touch-manipulation"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="sm:hidden" />
                    <social.icon size={24} className="hidden sm:block" />
                  </a>
                ))}
              </div>
            </div>

            {/* Available for work */}
            <div className="p-4 sm:p-6 glass-effect rounded-xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
                <span className="font-semibold text-foreground text-sm sm:text-base">Available for work</span>
              </div>
              <p className="text-foreground/70 text-sm sm:text-base">
                I&apos;m currently available for freelance projects and full-time opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}