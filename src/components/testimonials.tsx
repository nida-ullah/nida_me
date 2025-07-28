"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      content: "Nida delivered exceptional work on our e-commerce platform. Her attention to detail and ability to translate complex requirements into elegant solutions was impressive.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      company: "Digital Solutions",
      content: "Working with Nida was a pleasure. She brought fresh ideas to our team and her code quality is top-notch. Highly recommend for any web development project.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      company: "Creative Studio",
      content: "Nida perfectly implemented our designs with pixel-perfect accuracy. Her understanding of both design and development made our collaboration seamless.",
      rating: 5,
      avatar: "ER"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            What People Say
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed px-4">
            Don&apos;t just take my word for it. Here&apos;s what clients and colleagues have to say about working with me.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="group"
            >
              <div className="p-6 sm:p-8 rounded-xl glass-effect hover:bg-background/30 transition-all duration-500 h-full border-0 shadow-lg hover:shadow-2xl backdrop-blur-sm group-hover:scale-[1.02] touch-manipulation relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote size={32} className="text-foreground" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 mb-6 leading-relaxed text-sm sm:text-base italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-foreground/60 text-xs sm:text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-foreground/50 text-xs">
                      {testimonial.company}
                    </p>
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
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
            Ready to work together?
          </h3>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-all duration-300 text-sm sm:text-base min-h-[48px] touch-manipulation shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Let&apos;s Start a Project
          </button>
        </motion.div>
      </div>
    </section>
  )
} 