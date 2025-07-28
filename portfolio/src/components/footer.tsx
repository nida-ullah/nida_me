"use client"

import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-foreground/70 mb-4 md:mb-0">
            © 2024 John Doe. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}