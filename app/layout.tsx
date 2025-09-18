import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bushra Khalid - Software Engineer | Cloud & AI Enthusiast",
  description:
    "Building scalable web apps, AI models, and cloud-native systems. Software Engineer specializing in Python, AI/ML, and cloud technologies.",
  keywords: ["Software Engineer", "Cloud Computing", "AI", "Machine Learning", "Python", "Web Development"],
  authors: [{ name: "Bushra Khalid" }],
  creator: "Bushra Khalid",
  openGraph: {
    title: "Bushra Khalid - Software Engineer | Cloud & AI Enthusiast",
    description: "Building scalable web apps, AI models, and cloud-native systems.",
    url: "https://bushrakhalid.dev",
    siteName: "Bushra Khalid Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 600,
        alt: "Bushra Khalid",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bushra Khalid - Software Engineer",
    description: "Building scalable web apps, AI models, and cloud-native systems.",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${sourceSerif.variable}`}>
      <head>
        <link rel="canonical" href="https://bushrakhalid.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bushra Khalid",
              jobTitle: "Software Engineer",
              description: "Software Engineer specializing in Cloud Computing and AI",
              url: "https://bushrakhalid.dev",
              sameAs: ["https://github.com/bushhra", "https://www.linkedin.com/in/bushra-khalid-344006216/"],
              knowsAbout: ["Python", "Java", "Cloud Computing", "AI", "Machine Learning", "Web Development"],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Bennett University",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Suspense fallback={null}>
          <div className="floating-gradient floating-gradient-1"></div>
          <div className="floating-gradient floating-gradient-2"></div>
          <div className="floating-gradient floating-gradient-3"></div>
          <div className="floating-gradient floating-gradient-4"></div>
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
