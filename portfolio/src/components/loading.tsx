"use client"

import { motion } from "framer-motion"

export function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="fixed top-0 w-full glass-effect backdrop-blur-md border-b border-border/50 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-16 h-8 bg-secondary/50 rounded"
            />
            <div className="hidden md:flex items-center space-x-6">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                  className="w-16 h-6 bg-secondary/50 rounded"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Image Skeleton */}
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-secondary/50 mb-6 sm:mb-8"
            />

            {/* Name Skeleton */}
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              className="w-80 h-12 sm:h-16 bg-secondary/50 rounded mx-auto mb-3 sm:mb-4"
            />

            {/* Title Skeleton */}
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              className="w-64 h-6 sm:h-8 bg-secondary/50 rounded mx-auto mb-4 sm:mb-6"
            />

            {/* Description Skeleton */}
            <motion.div className="space-y-2 mb-6 sm:mb-8">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                className="w-full max-w-2xl h-4 bg-secondary/50 rounded mx-auto"
              />
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                className="w-3/4 h-4 bg-secondary/50 rounded mx-auto"
              />
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                className="w-5/6 h-4 bg-secondary/50 rounded mx-auto"
              />
            </motion.div>

            {/* Buttons Skeleton */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.7 }}
                className="w-40 h-12 bg-secondary/50 rounded"
              />
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
                className="w-44 h-12 bg-secondary/50 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl mb-4"
        >
          NUK
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-foreground/70 mb-4"
        >
          Loading portfolio...
        </motion.p>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-secondary/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
          />
        </div>
      </div>
    </div>
  )
}

export function ComponentLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full"
      />
    </div>
  )
} 