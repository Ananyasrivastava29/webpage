# Ryze — Redesign ⚡️

A modern, responsive marketing website built with React and Vite. This repository contains a redesign of the Ryze landing site with reusable components, page routing, and simple CSS-based styling.

---

## 🔧 Tech stack

- **Framework:** React (JSX)
- **Bundler / Dev server:** Vite
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Linting:** ESLint

---

## ✨ Features

- Clean component structure: `Header`, `Hero`, `Features`, `Footer`, `PageLayout`
- Multi-page routing: `Home`, `About`, `CaseStudies`
- Lightweight CSS with a global stylesheet at `src/styles/global.css`
- Animations and micro-interactions via `framer-motion`

---

## 🚀 Getting started

### Prerequisites

- Node.js (16+ recommended)
- npm (or your preferred package manager)

### Install

```bash
git clone <repo-url>
cd ryze-redesign
npm install
```

### Development

```bash
npm run dev
# open http://localhost:5173 (or Vite's printed URL)
```

### Build & Preview

```bash
npm run build
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 📁 Project structure

```
ryze-redesign/
├─ index.html
├─ package.json
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ assets/
│  ├─ components/
│  │  ├─ Features.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Header.jsx
│  │  ├─ Hero.jsx
│  │  └─ PageLayout.jsx
│  ├─ pages/
│  │  ├─ About.jsx
│  │  ├─ CaseStudies.jsx
│  │  └─ Home.jsx
│  └─ styles/
│     └─ global.css
└─ public/
```

---

## 🤝 Contributing

Thanks for your interest! To contribute:

1. Fork and create a branch for your change
2. Make changes and add tests where applicable
3. Open a pull request describing the change

---

## 📄 License

No license specified. Add a `LICENSE` file if you want to apply a chosen license (e.g., MIT).

---

If you'd like, I can add a `LICENSE`, update the README with screenshots, or add any missing details (author, demo link, deploy steps).
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
