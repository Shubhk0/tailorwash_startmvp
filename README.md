# Remix + Tailwind CSS + Supabase

This is a starter template for Remix with Tailwind CSS and Supabase.

- Tailwind CSS for styling.
- Supabase for database.

## What's in the stack?

- [Remix](https://remix.run)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase](https://supabase.com)
- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)

## Development

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

**Note:** that you'll need to create a Supabase project and set the `DATABASE_URL` environment variable to your Supabase database URL.

## Relevant files

This template includes the following files and directories:

- `remix.config.js`:  Remix configuration file.
- `package.json`:  Dependencies and scripts.
- `public/`:  Static assets.
- `app/`:  App source code.
  - `entry.client.tsx`:  Client-side entry point.
  - `entry.server.tsx`:  Server-side entry point.
  - `root.tsx`:  Root route and layout.
  - `routes/`:  Application routes.
  - `tailwind.config.ts`:  Tailwind CSS configuration.
  - `postcss.config.js`:  PostCSS configuration.
  - `app/tailwind.css`:  Tailwind CSS entry file.
  - `app/routes/_index.tsx`:  Index route.
  - `app/components/`:  React components.
  - `app/utils/`:  Utility functions.
  - `app/data/`: Data fetching and models.
  - `app/styles/`: Global styles and CSS modules.
  - `app/hooks/`: Custom React hooks.
  - `app/context/`: React context providers.

## Learn More

- [Remix Docs](https://remix.run/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Supabase Docs](https://supabase.com/docs)
```
