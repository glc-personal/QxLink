This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure and Organization
### Folder and File Conventions
Top-level folders are used to organize your application's code and static assets.
Top-level files are used to configure your application, manage dependencies, 
run proxy, integrate monitoring tools, and define environment variables.
- `/app`: App Router
- `/pages`: Pages Router
- `/public`: Static assets to be served
- `/components`: Reusable UI components used across the application.
- `next.config.js`: Configuration files for Next.js
- `package.json`: Project dependencies and scripts
- `.env`: Environment variables (should not be tracked by version control)
- `.env.local`: local environment variables (should not be tracked by version control)

### Routing Files
Add `page` to expose a route, `layout` for shared UI such as header, nav, or 
footer, `loading` for skeletons, `error` for error boundaries, and `route` for APIs.

### Nested Routes
Folders define URL segments. Nesting folders nests segments. 
Layouts at any level wrap their child segments. A route becomes public 
when a `page` or `route` file exists.

Path	URL pattern	Notes
- `app/layout.tsx`	—	Root layout wraps all routes
- `app/blog/layout.tsx`	—	Wraps /blog and descendants
- `app/page.tsx` -> `/`	Public route
- `app/blog/page.tsx` -> `/blog`	Public route
- `app/blog/authors/page.tsx` -> `/blog/authors`	Public route

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
