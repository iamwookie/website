# Project Guidelines

## Code Style
- TypeScript + Next.js App Router; server components by default. Mark client components with `'use client'` only when hooks/events are needed (see app/components/Title.tsx).
- Motion imports: client uses `motion/react`, server uses `motion/react-client`; wrap Base UI primitives with `motion.create()` (see app/components/ui/Button.tsx).
- Use `cn()` for class merging (lib/utils.ts) and Tailwind v4 `@theme`/`@layer` patterns (app/globals.css).
- Add animation timing comments with total durations near the top of animated components (examples in app/components/Spotify.tsx, app/components/Footer.tsx).

## Architecture
- App Router layout composes header/footer and shared providers in app/layout.tsx.
- Spotify flow: token refresh + now playing in lib/spotify.ts; API route disables caching in app/api/spotify/playing/route.ts; client widget polls with SWR in app/components/Spotify.tsx.
- Spotify widget delay timing is driven by SWR `onSuccess` and only runs when data is ready (regardless of whether data exists), so initial renders do not affect animation or update cadence.
- Redis-backed features: views (app/components/Views.tsx), thoughts submission (app/thoughts/actions.ts), and hourly thought rotation (app/components/thoughts/Thought.tsx).
- Server-only modules use `server-only` to prevent client bundling (lib/spotify.ts, lib/limiter.ts, lib/redis.ts).

## Build and Test
- `pnpm dev` (Turbopack dev server)
- `pnpm build` (production build)
- `pnpm lint` (ESLint)
- `ANALYZE=true pnpm build` (bundle analysis)

## Project Conventions
- Data sources live in app/data/*.json with types in types.ts (see app/data/portfolio.json, app/data/social.json).
- SVG imports: component via `@public/.../icon.svg`, URL via `@public/.../icon.svg?url`.
- Path aliases: `@/*`, `@components/*`, `@lib/*`, `@api/*`, `@data/*`, `@public/*`.
- Base UI requires `.root` wrapper in app/globals.css.

## Integration Points
- Spotify API with refresh-token flow in lib/spotify.ts; requires env vars in env.d.ts.
- Upstash Redis for views/thoughts and rate limiting in lib/redis.ts + lib/limiter.ts.

## Security
- Required env vars: SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN (env.d.ts).
- Rate limiting uses `web:limiter:*` namespace in lib/limiter.ts and public routes.
- User input validation + sanitization for thoughts in app/thoughts/actions.ts.

