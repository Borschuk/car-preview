# Car Preview

Car Preview is a React pet project for browsing cars, opening a configurator, calculating finance payments, and switching app language/theme.

## What is implemented

- Routing with `react-router` (home, gallery, configurator, finance, contact, not-found).
- Route-level lazy loading for pages to reduce initial bundle size.
- Light/Dark mode using Tailwind CSS classes and persisted user preference.
- Internationalization with `i18next` + `react-i18next`:
  - Languages: English (`en`) and Ukrainian (`ua`)
  - Namespace-based translations loaded from locale JSON files.
- Server data fetching with `@tanstack/react-query`:
  - Cars list query
  - Car-by-id query
  - Built-in caching and loading/error handling.
- Local state management with `zustand` for accessories and total accessories price.
- Gallery slider with `swiper`.
- Reusable UI components (`Button`, `PageTitle`, `Loading`, sections, layout).

## Tech stack

- `React` + `TypeScript`
- `Vite`
- `Tailwind CSS`
- `react-router`
- `@tanstack/react-query`
- `zustand`
- `i18next`, `react-i18next`, `i18next-http-backend`, `i18next-browser-languagedetector`
- `swiper`
- `react-icons`
- `express` + `cors` (local API server)

## Project scripts

- `npm run dev` - start Vite dev server
- `npm run server` - start local API server (`server.js`)
- `npm run build` - type-check and build for production
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run local API server in one terminal:

   ```bash
   npm run server
   ```

3. Run frontend in another terminal:

   ```bash
   npm run dev
   ```

4. Open the app in browser (Vite URL shown in terminal, usually `http://localhost:5173`).

## Main architecture notes

- Router is configured in `src/app/router`.
- App layout and shared sections are in `src/app/components`.
- Server request helpers are in `src/app/api`.
- Client store is in `src/app/store/useDataStore.ts`.
- i18n initialization is in `src/i18n.ts`.

## Future improvements

- Add unit/integration tests (Vitest + React Testing Library).
- Add route-level prefetch for better navigation performance.
- Persist selected accessories per car across sessions.
