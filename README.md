# Next.js, Storybook, and Tailwind Starter Template

[![Next.js](https://img.shields.io/badge/Next.js-latest-black)](https://nextjs.org/)
[![Storybook](https://img.shields.io/badge/Storybook-latest-ff4785)](https://storybook.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-latest-38bdf8)](https://www.tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-latest-3178c6)](https://www.typescriptlang.org/)

A modern, production-ready frontend development environment combining the power of **Next.js** for server-side rendering and routing, **Storybook** for component development and documentation, and **Tailwind CSS** for utility-first styling - all with **TypeScript** support for enhanced developer experience and code quality.

## Why This Stack?

This template provides a robust foundation for modern web applications:
- **Next.js**: Server-side rendering, optimized performance, and intuitive routing
- **Storybook**: Isolated component development and comprehensive documentation
- **Tailwind CSS**: Rapid UI development with utility-first approach
- **TypeScript**: Type safety and improved developer tooling

## Template Setup

```bash
# Clone the repository
git clone https://github.com/element-software/next-storybook-tailwind-starter.git my-project

# Navigate to project directory
cd my-project

# Initialize as a new git repository
rm -rf .git
git init
git add .
git commit -m "Initial commit from template"

# Install dependencies
npm install
# or
yarn install
```

## Project Structure

```bash
.
├── README.md                # Project documentation (this file)
├── next-env.d.ts            # TypeScript declarations for Next.js
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration for Tailwind
├── public                   # Static assets served by Next.js
│   ├── next.svg             # Next.js logo
│   └── vercel.svg           # Vercel logo
├── src                      # Source code directory
│   ├── app                  # App router folder containing main pages and API routes
│   ├── components           # Storybook components 
│   ├── lib                  # Shared functions such as auth and email handler 
│   └── styles               # Tailwind globals.css and custom CSS files
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Development Workflow

### Starting the Development Server

Launch the Next.js development server with hot-reloading:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view your application.

### Component Development with Storybook

This template includes Storybook integration for isolated component development:

```bash
npm run storybook
# or
yarn storybook
```

Storybook will launch at [http://localhost:6006](http://localhost:6006), allowing you to build and test components in isolation.

### Editing Content

The application entry point is at `src/app/page.tsx`. The page auto-updates as you edit files.

This project leverages [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) for automatic optimization and loading of Inter, a custom Google Font.

## Key Features

- **App Router Architecture**: Built using Next.js 13+ with the modern App Router
- **Component Library**: Pre-configured Storybook setup for component documentation
- **Styling System**: Tailwind CSS configured for consistent design language
- **TypeScript Integration**: Full type safety throughout the project
- **Developer Experience**: Optimized workflow with hot reloading and isolated testing

## Learn More

### Next.js Resources:
- [Next.js Documentation](https://nextjs.org/docs) - comprehensive feature guide
- [Learn Next.js](https://nextjs.org/learn) - interactive tutorial

### Storybook Resources:
- [Storybook Documentation](https://storybook.js.org/docs) - learn component development
- [Component Driven Development](https://www.componentdriven.org/) - design methodology

### Tailwind Resources:
- [Tailwind Documentation](https://tailwindcss.com/docs) - utility classes reference
- [Tailwind UI](https://tailwindui.com/) - component examples

## Deployment

The recommended deployment method is through [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), created by the team behind Next.js.

For additional deployment options, consult the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

---

*This template was created to demonstrate proficiency in modern frontend development
