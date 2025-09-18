"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>

          <div className="glass p-8 rounded-lg space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              I am a passionate Software Engineer specializing in cloud computing and artificial intelligence. Completed
              my BCA from Bennett University with a strong academic record (CGPA: 7.56) and currently pursuing Masters
              from Amity University.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              My expertise spans across full-stack development, machine learning, and cloud native systems. I have hands
              on experience building scalable web applications, developing AI models for healthcare, and conducting
              research on GenAI strategies in enterprise environments.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              I'm particularly interested in the intersection of artificial intelligence and cloud computing, where I've
              worked on projects ranging from multi-modal emotion detection systems to healthcare applications that
              serve hundreds of users daily. My goal is to create technology that makes a meaningful impact while
              continuously learning and adapting to the evolving tech landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
