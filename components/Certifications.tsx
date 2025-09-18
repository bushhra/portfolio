"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Certifications</h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-lg"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Award className="w-6 h-6 text-primary" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">AWS Cloud Quest: Cloud Practitioner</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive certification covering AWS cloud fundamentals, services, and best practices.
                </p>

                <Button variant="outline" asChild className="glass hover:scale-105 transition-transform bg-transparent">
                  <a
                    href="https://www.credly.com/badges/b3d841b3-9873-4271-b19d-b19d3f975e08"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Badge
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
