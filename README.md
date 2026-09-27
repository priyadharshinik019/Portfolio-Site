# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Priyadharshini K — Portfolio

A responsive React portfolio for Priyadharshini K, a final-year Computer Science student and full-stack developer.

## Features

- Dark and light theme toggle
- Responsive sticky navigation
- Animated full-stack developer role
- About, skills, experience, projects, certifications, and contact sections
- Project detail modals with screenshots and GitHub links
- Internship document and certificate viewers
- Contact form email delivery through FormSubmit

## Tech stack

- React 19
- Vite
- CSS3
- JavaScript

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Production build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project structure

```text
src/
├── assets/       # Profile, project, certificate, and document images
├── App.jsx       # Portfolio sections and interactive modals
├── App.css       # Layout, theme, responsive, and animation styles
└── index.css     # Global styles and page background
```

## Contact form

The contact form sends messages to `priyadharshinik735@gmail.com` using FormSubmit's AJAX endpoint. FormSubmit may require one-time email activation before messages are delivered.

## Deployment

This Vite app can be deployed to Vercel, Netlify, GitHub Pages, or any static hosting provider. Use `npm run build` and publish the generated `dist/` directory.
## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
