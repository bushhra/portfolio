"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "bushrakhalid423@gmail.com",
    href: "mailto:bushrakhalid423@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9548019193",
    href: "tel:+919548019193",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/bushhra",
    href: "https://github.com/bushhra",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/bushra-khalid-344006216",
    href: "https://www.linkedin.com/in/bushra-khalid-344006216/",
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Get In Touch</h2>

          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology. Feel free to reach out!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="glass p-6 rounded-lg hover:glass-strong transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-muted-foreground mb-1">{contact.label}</p>
                      <Button
                        variant="link"
                        asChild
                        className="p-0 h-auto text-foreground hover:text-primary text-left justify-start"
                      >
                        <a href={contact.href} target="_blank" rel="noopener noreferrer">
                          <span className="truncate">{contact.value}</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
