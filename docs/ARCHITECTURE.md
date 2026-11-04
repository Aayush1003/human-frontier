# Architecture

Human Frontier is a pnpm monorepo with a small mobile client, an API service, and a shared TypeScript package.

```text
apps/mobile  -> Expo / React Native client
services/api -> Express JSON API
packages/shared -> opportunity models and deterministic guide logic
```

The initial vertical slice is deliberately low-dependency: opportunities are static examples; guide suggestions are rule-based; event intake discards the payload and confirms `stored: false`. There is no account system, tracking, external model, or database yet.

## Next technical steps

1. Add automated tests for guide logic and API validation.
2. Replace examples with a curated, community-reviewed opportunity directory.
3. Add a client API adapter with configurable base URL and offline-friendly caching.
4. If persistence becomes necessary, define retention, deletion, consent, access controls, and a threat model before selecting a datastore.
5. Evaluate any future AI feature for reliability and harm; keep an understandable non-AI fallback.
