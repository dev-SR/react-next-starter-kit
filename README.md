This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `pages/index.js`. The page
auto-updates as you edit the file.

# Installations

```bash
npx create-next-app --typescript
yarn add --dev tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

ADD lines\
tailwind.config.js

```bash
mode: 'jit',
purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
darkMode: 'class', // or 'media' or 'class',
```

styles/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
