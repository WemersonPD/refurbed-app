# Frontend — Vue 3 + TypeScript + Tailwind CSS

## Tech Stack

- **Vue 3** — Composition API with `<script setup>`
- **TypeScript** — strict mode enabled
- **Vite** — dev server and build tooling
- **Tailwind CSS** — utility-first styling with custom design tokens

## Getting Started

**Prerequisites:** Node.js 18+

```bash
cd assignment_vue/frontend-vue
npm install
npm run dev     # http://localhost:5173
npm run build   # production build
```

> The Go backend must be running on `http://localhost:8080` before starting the frontend.

## Architecture

The frontend follows **Atomic Design** to organize components by complexity:

```
src/
├── components/
│   ├── atoms/           # Button, Text, CheckboxCell, RadioInput
│   ├── molecules/       # ProductCard, SearchInput, CheckboxInput, RangeInput
│   ├── organisms/       # (planned — SearchBar, FilterSidebar)
│   └── templates/       # DefaultLayout (header + sidebar + content)
├── composables/         # useProducts, useDebounce
├── services/            # API layer (fetchProducts)
├── types/               # TypeScript interfaces
└── utils/               # Price formatting
```

**No state management library** — the app uses Vue's built-in reactivity (`ref`, `reactive`, `computed`) and composables for encapsulated logic. This keeps the architecture lightweight for the current scope.

## Features

- **Search** — debounced text input (300ms) to avoid excessive API calls
- **Filters** — category, brand, condition (checkboxes), color (radio), price range (dual slider), bestseller
- **Load more** — offset-based pagination that appends products progressively
- **Product cards** — image, name, available colors, original/discounted price, discount badge, bestseller badge
- **Empty state** — clear messaging with option to reset filters
- **Accessibility** — skip-to-content link, semantic HTML (`header`, `aside`, `main`, `article`, `fieldset`, `legend`), ARIA labels, screen-reader-only price text, focus-visible states

## Known Limitations / TODO

- **Unit tests** — not implemented; would use Vitest + Vue Test Utils
- **Responsiveness** — needs improvement across breakpoints
- **A11Y** — product cards accessibility can be enhanced further
- **Sort by popularity** — backend supports it, frontend toggle not wired up
- **Price range UI** — dual-range slider needs visual polish
- **Organisms layer** — SearchBar and FilterSidebar, and card list should be extracted from App.vue
- **i18n** — all strings are hardcoded in English (price formatting uses `de-DE` locale for EUR)
- **URL-driven filters** — filter state should be persisted in query params for shareable links
- **Filter options from API** — categories, brands, and conditions are hardcoded; should come from a dedicated endpoint
