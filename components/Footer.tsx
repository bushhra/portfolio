"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm">
            © 2025 Bushra Khalid — Built with Next.js, Tailwind, Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
