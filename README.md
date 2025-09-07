# INNOVERSE TechFest 2025 Portal

Welcome to the codebase for **INNOVERSE TechFest 2025**, the official event management platform for Xavier's TechByte Society at St. Xavier's College, Ranchi. This project is a modern, responsive web application designed to streamline and showcase college tech festival activities, from registration to interactive event timelines and galleries.

---

## 📦 Project Overview

This repository contains a single-page application (SPA) built using React and TypeScript with a focus on smooth user experience, scalable component design, and visually engaging cosmic-themed UI. It handles:

- Event listings and details
- Registration workflows for teams and individuals
- Dynamic countdown dashboard to the festival
- Interactive schedule/timeline display
- Gallery for previous event highlights
- FAQ and contact sections

---

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/) (TypeScript)
- **Build Tool:** [Vite](https://vitejs.dev/) (`vite.config.ts`)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
  - Custom HSL-based theming (“cosmic glass” design)
  - Responsive, glassmorphic UI components
- **UI Components:** Radix UI, Lucide Icons, Embla Carousel
- **State & Data:** React Query (`@tanstack/react-query`)
- **Routing:** React Router
- **Linting:** ESLint (with React & TypeScript configs)
- **Other:** PostCSS (autoprefixer, tailwindcss), custom animations (starfield, float, glow, etc.)

---

## 🗂️ Directory Structure

```
SXT-TECH-FEST/
├── public/            # Static assets (images, favicons, etc.)
├── src/
│   ├── components/    # All major UI feature sections (About, Events, Timeline, Gallery, Registration, Footer, etc.)
│   ├── pages/         # SPA pages (Index, NotFound)
│   ├── assets/        # Event images, past fests, icons
│   ├── index.css      # Tailwind & custom cosmic styles
│   └── main.tsx       # App entrypoint
├── vite.config.ts     # Vite build config
├── package.json       # npm dependencies & scripts
├── postcss.config.js  # PostCSS plugins
└── README.md          # This file
```

---

## 🚀 Getting Started

**Clone & Install:**
```bash
git clone https://github.com/AshutoshCoder2024/SXT-TECH-FEST.git
cd SXT-TECH-FEST
npm install
```

**Run Locally:**
```bash
npm run dev
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🎨 UI/UX Highlights

- **Cosmic-glass theme:** Glassmorphic cards, neon gradients, cosmic colors (HSL-based), starfield and floating effects.
- **Responsive:** Mobile-first layouts, adaptive navigation, and accessible controls.
- **Component-driven:** All UI features (timeline, gallery, countdown, registration) are modular React components.
- **Animations:** CSS keyframes for floating, glowing, twinkling, orbital effects.
- **Quick navigation:** Section links, scroll-to-section, and footer shortcuts.

---

## 🧩 Main Features

- **Event listing, schedule, and registration**
- **Countdown to event launch**
- **Photo gallery of previous fests**
- **FAQ and contact info section**
- **Admin-focused: easy to add new events/components via modular code**

---

## 📝 Contributing

1. Fork this repo
2. Create your feature branch (`git checkout -b feat/my-feature`)
3. Commit your changes (`git commit -am "Add my feature"`)
4. Push and open a pull request

---

## 📬 Contact

- **Email:** xts@sxcran.org
- **Instagram:** [@xaviers_techbyte.society](https://www.instagram.com/xaviers_techbyte.society/)
- **Location:** St. Xavier's College, Ranchi, India

---

## 🪐 License

This project is for educational and event use. See repo for license details.

---

**Made with 💫 for INNOVERSE TechFest 2025**
