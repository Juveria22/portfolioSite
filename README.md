<div align="center">
  <h1>Cafe Portfolio</h1>
  <p><strong>A Cozy, Cafe-Themed Developer Portfolio</strong></p>
  <p>
    <a href="#features">Features</a> •
    <a href="#demo">Demo</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#installation">Installation</a> •
    <a href="#project-structure">Structure</a>
  </p>
</div>

About
A unique, cafe-themed portfolio website that presents projects as menu items in a cozy digital coffee shop. Featuring custom pixel art, calming background music, and an immersive design that turns browsing a portfolio into a relaxing experience.
Instead of a traditional portfolio layout, projects are displayed as drinks on a menu, creating a memorable and creative way to showcase technical work.
Features
Unique Cafe Theme

Custom-made pixel art throughout the site
Calming background music for ambiance
Cozy, welcoming design aesthetic
Coffee shop inspired navigation and layout

Menu Page (Projects)

Projects presented as cafe drinks
Each "drink" represents a different project
Hover effects and interactive elements
Detailed project descriptions on click

Blog Page

Technical writing and thoughts
Clean, readable article layout
Tagged and categorized posts
Responsive reading experience

Contact Page

Easy-to-use contact form
Social media links
Professional contact information
Cafe-themed design consistency

Technical Features

Fully responsive design
Smooth animations and transitions
Fast loading times
Optimized images and assets
Cross-browser compatibility

Demo
Live Site: Visit Cafe Portfolio
Tech Stack
Frontend

React
Tailwind CSS
JavaScript

Design

Custom pixel art (self-made)
Original audio/music
Responsive layouts

Deployment

Render

Project Structure
portfolio-site/
├── public/
│   ├── assets/
│   │   ├── pixel-art/       # Custom pixel art images
│   │   ├── music/           # Background music files
│   │   └── icons/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Menu.jsx         # Projects as drinks
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MenuPage.jsx
│   │   ├── BlogPage.jsx
│   │   └── ContactPage.jsx
│   ├── styles/
│   │   └── tailwind.css
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
Installation
Prerequisites

Node.js (v14 or higher)
npm or yarn

Setup
bash# Clone the repository
git clone https://github.com/yourusername/portfolio-site.git
cd portfolio-site

# Install dependencies
npm install

# Start development server
npm start
The site will be running at http://localhost:3000
Build for Production
bash# Create optimized production build
npm run build

# The build folder will contain production-ready files
Pages Overview
Home
Welcome page with cafe entrance theme, introducing visitors to the portfolio experience.
Menu (Projects)
Projects displayed as cafe drinks with creative names. Each item includes:

Project thumbnail/icon
"Drink" name (project title)
Description (ingredients = tech stack)
Link to live demo and code

Blog
Technical articles and personal thoughts about development, presented in a clean, readable format with cafe-inspired accents.
Contact
Get in touch section with:

Contact form
Email address
Social media links (GitHub, LinkedIn, etc.)
Download resume option

Customization
Adding New Projects
Edit the projects data in src/data/projects.js:
javascript{
  id: 1,
  name: "Matcha Latte",        // Creative drink name
  title: "MatchaAI",            // Actual project name
  description: "A soothing blend of AI and mental health support",
  ingredients: ["React", "FastAPI", "OpenAI"],
  image: "/assets/matcha-latte.png",
  liveUrl: "https://...",
  githubUrl: "https://github.com/..."
}
Changing Theme Colors
Tailwind configuration in tailwind.config.js:
javascriptmodule.exports = {
  theme: {
    extend: {
      colors: {
        cafe: {
          cream: '#F5E6D3',
          brown: '#8B4513',
          dark: '#3E2723',
        }
      }
    }
  }
}
Adding Blog Posts
Create new markdown files in src/content/blog/ or add to the blog data structure.
Design Philosophy
The cafe theme was chosen to create a warm, approachable portfolio that stands out from traditional developer portfolios. The pixel art aesthetic adds personality while maintaining professionalism, and the calming music creates an immersive browsing experience.
Projects are presented as drinks to make technical work more accessible and memorable to visitors, whether they are recruiters, fellow developers, or clients.
Performance

Lighthouse score: 95+ performance
Optimized images with lazy loading
Code splitting for faster initial load
Minimal dependencies for small bundle size

Browser Support

Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)
Mobile browsers (iOS Safari, Chrome Mobile)

Roadmap
Future enhancements:

Dark mode (night cafe theme)
More interactive animations
Project filtering by technology
Guest book feature
Seasonal theme variations
Music playlist selection
Accessibility improvements (WCAG 2.1 AA compliance)

Credits
Design & Development

Juveria Amin

Assets

Pixel art: Custom-made
Background music: Original composition / Licensed from [source]
Fonts: [List fonts used]

Contributing
This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue if you spot any bugs or have ideas for improvements.
License
This project is open source and available under the MIT License. Feel free to use the code as inspiration for your own portfolio, but please create your own original designs and assets.

<div align="center">
  <p>Designed and built by <a href="https://github.com/yourusername">Juveria Amin</a></p>
  <p>Enjoyed the experience? Consider giving it a ⭐</p>
</div>
