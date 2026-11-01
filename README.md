# ForexSpider — public engineering showcase

> A safe, representative demonstration of how I approach trading-platform architecture, not the ForexSpider production source code.

ForexSpider is presented here as a system-design case study for a market-aware product: a responsive web experience, a typed service boundary, asynchronous market-event handling, and a quality-first release workflow. The real project remains private.

## What this showcase demonstrates

- **System design:** clear separation between the web client, API layer, domain services, and event consumers.
- **Typed contracts:** small, explicit TypeScript types make the API boundary easier to reason about and test.
- **Event safety:** the sample reducer accepts events idempotently and rejects stale revisions.
- **Quality engineering:** validation belongs at the edge, before data reaches business logic.

## Technology lens

| Area | Representative tools |
| --- | --- |
| Web product | Next.js, React, TypeScript |
| Services | Python, FastAPI |
| State & data | PostgreSQL, Redis |
| Delivery | Docker, CI, contract checks |

## Safe sample code

[`src/marketEventReducer.ts`](src/marketEventReducer.ts) is a standalone, dependency-free TypeScript example. It models a tiny stream of **synthetic** pricing events; it connects to no broker, exchange, credentials, account, or production endpoint.

```bash
npm run demo
```

## Architecture

See [the architecture notes](docs/architecture.md) for a public-safe system diagram, delivery approach, and deliberate exclusions.

## Boundaries

This repository contains independently written illustrative material only. It intentionally excludes proprietary source, trading logic, strategies, production schemas, infrastructure, credentials, vendor configuration, and customer data. It is not financial advice and not a trading product.

© Chidiebere Offor. Demonstration material; no licence to use the ForexSpider name or underlying private implementation is granted.
