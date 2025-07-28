"use client"

import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-foreground/70 text-sm sm:text-base text-center sm:text-left">
            © 2024 NIDA ULLAH. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-foreground/70 text-sm sm:text-base">
            <span>Made with</span>
            <Heart size={14} className="sm:hidden text-red-500 fill-current" />
            <Heart size={16} className="hidden sm:block text-red-500 fill-current" />
            <span className="hidden sm:inline">using Next.js & Tailwind CSS</span>
            <span className="sm:hidden">Next.js & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  )
}