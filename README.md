# Car Preview

Car Preview is a React pet project for browsing cars, opening a configurator, calculating finance payments, and switching app language/theme.

## Status

In progress

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

## Implemented features

- **Routing (`react-router`)**
  - Home, Gallery, Configurator, Finance, Contact, Not Found routes.
  - Lazy-loaded pages in `src/app/router/index.tsx`.
- **Theme**
  - Light/Dark mode toggle in header.
  - User preference persisted to `localStorage`.
- **Localization (`i18next`, `react-i18next`)**
  - Languages: English (`en`) and Ukrainian (`ua`).
  - Locale files in `public/locales/en` and `public/locales/ua`.
- **Data Fetching (`@tanstack/react-query`)**
  - Cars list and car details queries.
  - Built-in loading/error states and caching.
- **State Management (`zustand`)**
  - Accessories selection by car.
  - Accessories total price calculations.
- **UI/UX**
  - Gallery slider with `swiper`.
  - Reusable components (`Button`, `PageTitle`, `Loading`, layout sections).

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Zustand
- i18next + react-i18next + language detector + HTTP backend
- Swiper
- Express + CORS (local API mock server)

## Getting started

### 1) Install dependencies

```bash
npm install
```

### 2) Start API server

```bash
npm run server
```

API will be available at `http://localhost:3001`.

### 3) Start frontend

```bash
npm run dev
```

Frontend runs on Vite dev server (usually `http://localhost:5173`).

## Scripts

- `npm run dev` - start frontend in development mode.
- `npm run server` - start Express API server.
- `npm run build` - run TypeScript build and create production bundle.
- `npm run preview` - preview production build locally.
- `npm run lint` - run ESLint.

## Project structure

- `src/app/router` - route definitions and app layout.
- `src/app/components` - reusable UI blocks and feature sections.
- `src/app/api` - API request helpers.
- `src/app/store/useDataStore.ts` - Zustand store.
- `src/i18n.ts` - i18n initialization.
- `public/locales` - translation JSON files.
- `server.js` - local Express API.

## Usage example

1. Open `/configurator` and choose a car.
2. Open a car details page and add accessories.
3. Navigate to `/finance` to see credit calculation based on selected car and accessories.
4. Switch language in the header (`EN` / `UA`) and toggle theme.
