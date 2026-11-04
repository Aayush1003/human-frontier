# Human Frontier

**Turn curiosity into a small, meaningful real-world action.** Human Frontier is a human-centered exploration platform: a mobile-friendly way to find learning and community opportunities, a privacy-first data foundation, and a transparent guide that helps people plan their next step.

This repository is an early, working foundation—not a claim of superhuman AI or a finished product. The first version uses sample opportunities and a predictable guide so it can be explored without API keys or personal data.

## What's here

- `apps/mobile` — Expo / React Native starter for browsing opportunities and getting a practical exploration prompt.
- `services/api` — small TypeScript API with a health check, sample opportunities, minimal event intake, and a guide endpoint.
- `packages/shared` — shared, typed models and guide logic.
- `docs/` — architecture, privacy and safety principles, and an impact-focused roadmap.

## Run locally

Requirements: Node.js 20+ and pnpm 9+.

```bash
pnpm install
pnpm dev:api
```

The API listens on `http://localhost:3000` by default. Try `GET /health`, `GET /opportunities`, and `POST /guide/plan`.

In another terminal, run the mobile app:

```bash
pnpm dev:mobile
```

Expo will show instructions for opening the app in a simulator or on a device. The starter currently uses local sample content; connecting it to the API is a next-step contribution.

## Example API

```bash
curl http://localhost:3000/opportunities
curl -X POST http://localhost:3000/guide/plan \
  -H 'content-type: application/json' \
  -d '{"interest":"nature","availableMinutes":30}'
```

The guide returns a modest suggested next step and explains that it is a suggestion, not expert or emergency advice. Event intake is intentionally in-memory demo plumbing: do not send personal or sensitive data, and do not treat it as durable analytics.

## Product principle

The goal is not to maximize screen time or collect more data. Help people discover worthwhile things, make participation accessible, and give them control over their information. See [the principles](docs/PRINCIPLES.md) and [roadmap](docs/ROADMAP.md).

## Contributing

Issues and small, testable improvements are welcome. Before adding tracking, personalization, or generative AI, document what data is needed, how it is protected, how users opt out, and how the feature can be evaluated for harm and usefulness.

## License

MIT. See [LICENSE](LICENSE).
