# Landing Page

A modern, visually engaging landing page built with [Next.js](https://nextjs.org/), featuring advanced UI components, smooth animations, and multimedia integration. This project leverages [shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible components, and includes video backgrounds, animated banners, and interactive charts for a compelling user experience.

## Live Demo

Visit the live site: [https://your-live-url.com](https://your-live-url.com)

---

## Introduction

This landing page template is designed for startups, SaaS products, and marketing campaigns. It combines the power of Next.js with the flexibility of shadcn/ui, Tailwind CSS, and modern animation libraries. The project demonstrates best practices for performance, accessibility, and responsive design.

---

## Features

- **Next.js 13+**: App Router, server-side rendering, and static site generation.
- **shadcn/ui**: Prebuilt, customizable, and accessible UI components.
- **Tailwind CSS**: Utility-first styling for rapid development.
- **Video Integration**: Background and embedded videos (see [`public/demo.mp4`](public/demo.mp4)).
- **Image Assets**: Optimized banners and avatars ([`public/banner*.png`](public/), [`public/face*.webp`](public/)).
- **Animations**: Smooth transitions and interactive effects using CSS and animation libraries.
- **Charts & Data Visualization**: Interactive charts for showcasing data (see [`src/components/ui/chart.tsx`](src/components/ui/chart.tsx)).
- **SEO Optimized**: Meta tags and best practices for discoverability.
- **Responsive Design**: Mobile-first and fully responsive layouts.
- **Easy Customization**: Modular components and clear structure.

---

## Project Structure

```
landing-page/
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
├── .next/
│   └── ...build output...
├── public/
│   ├── banner1.png
│   ├── banner2.png
│   ├── banner3.jpg
│   ├── banner4.png
│   ├── banner5.jpg
│   ├── banner6.jpg
│   ├── demo.mp4
│   ├── face.webp
│   ├── face2.webp
│   ├── face3.jpg
│   └── ...other assets
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Main landing page
│   │   └── ...other routes
│   ├── components/
│   │   └── ui/
│   │       └── chart.tsx   # Chart UI components
│   └── ...other source files
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/landing-page.git
   cd landing-page
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm start` — Start the production server
- `npm run lint` — Run ESLint

---

## Customization

- **UI Components**: Modify or extend components in [`src/components/ui`](src/components/ui).
- **Images & Videos**: Replace assets in [`public/`](public/).
- **Animations**: Customize animation logic in your components or add new libraries as needed.
- **shadcn/ui**: Refer to [shadcn/ui documentation](https://ui.shadcn.com/docs) for component usage and customization.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

---

## License

This project is licensed under
