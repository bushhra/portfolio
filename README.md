# Bushra Khalid - Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS v4, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, professional design with glass morphism effects
- 🌓 **Dark/Light Mode**: Toggle between themes with persistent localStorage
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Performance Optimized**: Built with Next.js for optimal loading speeds
- 🎭 **Smooth Animations**: Framer Motion animations with reduced-motion support
- ♿ **Accessible**: WCAG compliant with proper ARIA attributes
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and JSON-LD structured data

## Tech Stack

- **Framework**: Next.js 15.1.3 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion 11.15.0
- **Icons**: Lucide React
- **Typography**: Inter, JetBrains Mono, Source Serif 4
- **Analytics**: Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/bushhra/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and theme variables
├── components/
│   ├── Navbar.tsx          # Navigation with smooth scroll
│   ├── Hero.tsx            # Hero section with CTA buttons
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills showcase
│   ├── Projects.tsx        # Featured projects
│   ├── Experience.tsx      # Work experience
│   ├── Education.tsx       # Educational background
│   ├── Certifications.tsx  # Professional certifications
│   ├── Contact.tsx         # Contact information
│   ├── Footer.tsx          # Site footer
│   └── ThemeToggle.tsx     # Dark/light mode toggle
├── styles/
│   └── custom-theme.css    # Custom theme variables
└── public/
    ├── avatar.jpg          # Profile image
    └── resume.pdf          # Resume download
\`\`\`

## Theme Customization

The website uses a custom brown/beige color palette defined in `app/globals.css`. The theme variables are:

- **Background**: Dark brown shades for depth
- **Foreground**: Beige tones for readability  
- **Primary**: Warm brown accents
- **Glass Effects**: Backdrop blur with transparency

## Deployment

The site is optimized for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Performance Features

- **Image Optimization**: Next.js Image component with proper sizing
- **Font Optimization**: Self-hosted fonts with display: swap
- **Code Splitting**: Automatic route-based code splitting
- **SEO**: Comprehensive meta tags and structured data
- **Accessibility**: Keyboard navigation and screen reader support

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Bushra Khalid - [bushrakhalid423@gmail.com](mailto:bushrakhalid423@gmail.com)

Project Link: [https://github.com/bushhra/portfolio](https://github.com/bushhra/portfolio)
