"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
          >
            <span className="text-foreground">Bushra Khalid</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 text-balance"
          >
            Software Engineer | Cloud & AI Enthusiast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty"
          >
            Building scalable web apps, AI models, and cloud-native systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button asChild className="hover:scale-105 transition-transform">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" asChild className="hover:scale-105 transition-transform bg-transparent">
              <a href="https://github.com/bushhra" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="hover:scale-105 transition-transform bg-transparent">
              <a href="https://www.linkedin.com/in/bushra-khalid-344006216/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              onClick={scrollToContact}
              className="hover:scale-105 transition-transform bg-transparent"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
