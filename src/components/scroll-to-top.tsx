"use client"

import { useEffect } from "react"

export default function ScrollToTop() {
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0)
    
    // Disable browser's scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }
  }, [])

  return null
} 