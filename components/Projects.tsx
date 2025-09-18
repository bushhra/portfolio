"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Suraksha (Disease Prediction)",
    description: "CNN model predicting 8 diseases with 85% accuracy, deployed via Streamlit, 100+ daily users.",
    tech: ["Python", "CNN", "TensorFlow/Keras", "OpenCV", "Streamlit"],
    github: "https://github.com/bushhra/HealthCare-Suraksha",
    demo: null,
  },
  {
    title: "Multi-Modal Emotion Detection",
    description: "Multi-modal (speech/text/motion) system improving accuracy by 42% on 1000+ cases.",
    tech: ["Python", "TensorFlow", "Android Studio"],
    github: "https://github.com/bushhra/Emotion-Detection-in-Speech-",
    demo: null,
  },
  {
    title: "Infra Research @ Wipro",
    description: "Comparative study of GenAI strategies; mapped use cases; evaluated scalability & cost.",
    tech: ["AWS", "Azure", "Google Cloud", "GenAI"],
    github: null,
    demo: null,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-lg hover:glass-strong transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/20 text-accent-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="glass hover:scale-105 transition-transform bg-transparent"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="glass hover:scale-105 transition-transform bg-transparent"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
