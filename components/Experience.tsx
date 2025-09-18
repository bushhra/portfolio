"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Experience</h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-16 pb-8"
            >
              <div className="absolute left-6 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

              <div className="glass p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Project Research Intern</h3>
                    <p className="text-primary font-medium">Wipro Ltd.</p>
                    <p className="text-sm text-muted-foreground">February 2024</p>
                  </div>
                </div>

                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>
                    • Conducted comprehensive comparative study of GenAI strategies across AWS, Azure, and Google Cloud
                    platforms
                  </li>
                  <li>
                    • Mapped use cases and evaluated scalability & cost implications for enterprise implementations
                  </li>
                  <li>
                    • Delivered actionable insights that informed strategic decision-making for cloud infrastructure
                    investments
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
