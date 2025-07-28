"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    console.log("Current theme:", theme, "Setting to:", newTheme)
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <header className="fixed top-0 w-full bg-white dark:bg-black backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">NUK</div>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                <Moon size={20} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }

  return (
    <header className="fixed top-0 w-full glass-effect backdrop-blur-md border-b border-border/50 z-50 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold text-foreground"
          >
            NUK
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-secondary/50"
              >
                {item.name}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 sm:p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 sm:mt-4 py-3 sm:py-4 border-t border-border"
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-2 text-foreground/80 hover:text-foreground transition-colors hover:bg-secondary/30 rounded-lg min-h-[48px] touch-manipulation"
                >
                  {item.name}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}