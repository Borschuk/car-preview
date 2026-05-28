# Car Preview

Car Preview is a React pet project for browsing cars, opening a configurator, calculating finance payments, and switching app language and theme.

## Status

In progress

## Why this project is useful

- Demonstrates a practical split between server state (TanStack Query) and client state (Zustand).
- Shows routing, lazy-loaded pages, and reusable UI sections in a small product-style app.
- Includes internationalization (EN/UA) and a persisted dark/light theme with Tailwind CSS.
- Uses a local Express API so frontend data fetching can be developed and tested end-to-end.

## Implemented features

- **Routing (`react-router`)**
  - Routes: Home, Gallery, Configurator, Finance, Contact, Not Found.
  - Lazy-loaded pages with `Suspense` in `src/app/router/index.tsx`.
- **Theme**
  - Light/Dark toggle in the header (`src/app/components/headerSection.tsx`).
  - Preference persisted in `localStorage`; `dark` class applied on `document.documentElement`.
- **Localization (`i18next`, `react-i18next`)**
  - Languages: English (`en`) and Ukrainian (`ua`).
  - Locale files in `public/locales/en` and `public/locales/ua`.
  - Initialized in `src/i18n.ts`.
- **Data fetching (`@tanstack/react-query`)**
  - Cars list and car-by-id queries via `src/app/api/carsApi.ts`.
  - Loading and error handling in configurator views.
- **State management (`zustand`)**
  - Accessories per car and total accessories price in `src/app/store/useDataStore.ts`.
- **UI/UX**
  - Gallery slider with `swiper` (`src/app/components/gallerySection.tsx`).
  - Credit calculator on the Finance page.
  - Reusable components: `Button`, `PageTitle`, `Loading`, layout sections.

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Zustand
- i18next, react-i18next, i18next-http-backend, i18next-browser-languagedetector
- Swiper, react-icons, react-spinners
- Express + CORS (local API in `server.js`)

## Getting started

### Install dependencies

```bash
npm install
```

### Start backend/API

```bash
npm run server
```

API runs at `http://localhost:3001` (`GET /cars`, `GET /cars/:id`).

### Start frontend

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

| Command           | Description                     |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start Vite dev server           |
| `npm run server`  | Start Express API (`server.js`) |
| `npm run build`   | Type-check and production build |
| `npm run preview` | Preview production build        |
| `npm run lint`    | Run ESLint                      |

## Project structure

| Path                            | Purpose                           |
| ------------------------------- | --------------------------------- |
| `src/main.tsx`                  | App entry, QueryClient, router    |
| `src/app/router`                | Route definitions and root layout |
| `src/app/pages`                 | Page components                   |
| `src/app/components`            | UI sections and shared components |
| `src/app/api`                   | Fetch helpers for cars API        |
| `src/app/store/useDataStore.ts` | Zustand store (accessories)       |
| `src/i18n.ts`                   | i18n setup                        |
| `public/locales`                | Translation JSON (en, ua)         |
| `server.js`                     | Local Express mock API            |

## Usage example

1. Start API and frontend (see **Getting started**).
2. Open `/` to browse cars, then go to `/configurator/:id` for details and accessories.
3. Use **Finance** (`/finance`) for credit calculation; open it from a car via router state when configured.
4. Open **Gallery** (`/gallery`) for interior/exterior slides.
5. Switch **EN** / **UA** and toggle light/dark theme from the header.

## Where to get help

- Check this README and `package.json` scripts first.
- Review `src/app/router/index.tsx` for routes and `server.js` for API behavior.
- Open a repository issue with steps to reproduce, OS/Node version, and command output if something fails.
