# Next Movie

Next Movie is a movie discovery application built with Next.js and the TMDB API. Browse popular and upcoming movies, filter by genre, search for a title, and view movie details with cast information.

![Next Movie demo preview]
(docs/images/next-movie-demo.jpg)

## Features

- Popular and upcoming movie lists
- Genre-based browsing
- Movie search
- Movie detail pages with backdrop, overview, and cast
- Cast member links and a person API route
- Responsive layout built with Tailwind CSS

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui-style components
- TMDB API

## Getting started

### Prerequisites

- Node.js 20 or newer
- A TMDB API Read Access Token

### Installation

```bash
npm install
cp .env.example .env.local
```

Open `.env.local` and set your own TMDB token:

```env
TMDB_TOKEN=your_tmdb_read_access_token
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

## Main routes

| Route                | Description                 |
| -------------------- | --------------------------- |
| `/`                  | Popular and upcoming movies |
| `/genre/[name]/[id]` | Movies in a selected genre  |
| `/search?q=...`      | Search results              |
| `/detail/[id]`       | Movie details and cast      |
| `/person/[id]`       | Person data API route       |

## Project structure

```text
app/                 Next.js pages and route handlers
components/          Reusable UI components
lib/                 Shared utilities
public/              Static assets
types/               Shared TypeScript types
```

## TMDB attribution

This product uses the TMDB API but is not endorsed or certified by TMDB. Movie data and images are provided by [The Movie Database](https://www.themoviedb.org/).

## Language

- 日本語: [README.ja.md](README.ja.md)
