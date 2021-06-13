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
npm install @heroicons/react
```

`tailwind.config.js`

```bash
mode: 'jit',
purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
darkMode: 'class', // or 'media' or 'class',
```

`styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Absolute Imports and Module path aliases

These options allow you to configure module aliases, for example a common
pattern is aliasing certain directories to use absolute paths.

One useful feature of these options is that they integrate automatically into
certain editors, for example vscode.

The `baseUrl` configuration option allows you to import directly from the root
of the project.

An example of this configuration:

```json
// tsconfig.json or jsconfig.json
{
   "compilerOptions": {
      "baseUrl": "."
   }
}
```

So, if the path is like this:

```
├──components
│  ├──shared
│     ├──Layout.tsx
│
├──pages
│  ├──index.tsx

```

and if we import `Layout.tsx` inside `index.tsx`:

> before:

```tsx
//pages/index.tsx
import Layout from '../components/shared/Layout';

export default function Home() {
   return <Layout title='Home'></Layout>;
}
```

> after `"baseUrl": "."`

```tsx
//pages/index.tsx
import Layout from 'components/shared/Layout';

export default function Home() {
   return <Layout title='Home'></Layout>;
}
```

While baseUrl is useful you might want to add other aliases that don't match 1
on 1. For this TypeScript has the `"paths"` option.

Using `"paths"` allows you to configure module aliases. For example
`@/components/*` to `components/*`

An example of this configuration:

```json
// tsconfig.json or jsconfig.json
{
   "compilerOptions": {
      "baseUrl": ".",
      "paths": {
         "@/components/*": ["components/*"]
      }
   }
}
```

Now,

```tsx
//pages/index.tsx
import Layout from '@/components/shared/Layout';

export default function Home() {
   return <Layout title='Home'></Layout>;
}
```
