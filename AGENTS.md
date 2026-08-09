# Project Guidelines

## Project Conventions & Code Style

- TypeScript + Next.js App Router; server components by default. Mark client components with `'use client'` only when needed (see app/components/Title.tsx).
- Use `cn()` for class merging (lib/utils.ts) and Tailwind v4 `@theme`/`@layer` patterns (app/globals.css).
- SVG imports: component via `@public/.../icon.svg`, URL via `@public/.../icon.svg?url`.
- Path aliases: `@/*`, `@components/*`, `@lib/*`, `@api/*`, `@data/*`, `@public/*`.
- Base UI requires `.root` wrapper in app/globals.css.

### Motion

- Motion imports: client uses `motion/react`, server uses `motion/react-client`; wrap Base UI primitives with `motion.create()` (see app/components/ui/Button.tsx).

### Redis

- Redis keys should follow the format: `web:<scope>:<name>` (examples in lib/limiter.ts, app/components/thoughts/Thought.tsx).
- Define Redis constants in caps and prefix with `R_` (examples in app/components/thoughts/Thought.tsx).

## Design (will be replaced with DESIGN.md in the future)

- Use hex values for colours where possible (examples in app/globals.css).
- Use Tailwind classes with the `@apply` in css files where possible (examples in app/globals.css).
- Add animation timing comments with total durations near the top of animated components that have load-in animations (examples in app/components/Spotify.tsx, app/components/Footer.tsx).

## Architecture

- Redis is used as the primary database due to flexibility (examples in app/components/Views.tsx, app/thoughts/actions.ts, app/components/thoughts/Thought.tsx).

### Spotify

- Spotify flow: lib/spotify.ts manages currently playing + token refresh logic; caching is not used; client widget polls with SWR in app/components/Spotify.tsx.
- Spotify widget delay timing is driven by SWR `onSuccess` and only runs when data is ready (regardless of whether data exists), so initial renders do not affect animation or update cadence.

## Security

- Required env vars are defined in env.d.ts.
- Authentication system uses `iron-session` for encrypted cookie-based sessions (lib/session.ts).
- Views (app/components/Views.tsx) uses IP based filtering for unrealistic users (bots etc.) via `getClientIP` (lib/utils.ts).
- `/thoughts` route protected by password authentication with 24-hour session expiry (app/thoughts/page.tsx, app/actions/auth.ts).
- `createThought` server action validates session before allowing submission (app/actions/thoughts.ts).
- User input validation + sanitization for thoughts: strips newlines, collapses whitespace, enforces length limits (app/actions/thoughts.ts).

## Build and Test

- `pnpm dev` (Turbopack dev server)
- `pnpm build` (production build)
- `pnpm lint` (ESLint)
- `ANALYZE=true pnpm build` (bundle analysis)
