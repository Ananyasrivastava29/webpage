<img width="1891" height="874" alt="Screenshot 2026-01-08 232621" src="https://github.com/user-attachments/assets/a3a18de9-5b94-4e9d-b326-3c4e07e420d1" />
<img width="1885" height="871" alt="Screenshot 2026-01-08 232602" src="https://github.com/user-attachments/assets/0f768969-a59f-48e7-a06e-5b13efa11029" />
<img width="1884" height="822" alt="Screenshot 2026-01-08 232540" src="https://github.com/user-attachments/assets/250c43ad-db29-41be-ba0e-e24cce0cdb3b" />
<img width="1892" height="877" alt="Screenshot 2026-01-08 232518" src="https://github.com/user-attachments/assets/8fe6ec9c-b812-4f89-acbe-188dc244f69b" />
<img width="1894" height="883" alt="Screenshot 2026-01-08 232502" src="https://github.com/user-attachments/assets/a07bb306-d0aa-4b5e-8b27-fa6222e55433" />
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

## Future Improvements

1. We can add shadow effect to the pictures
2. We can also add animation in testimonials
3. About page can be made as path animation showing impotant events with pictures and anecdotes
4. Case Study page can be designed with contrast colour gradients

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
