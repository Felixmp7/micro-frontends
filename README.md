# Microfrontends Characters App

This monorepo implements a microfrontends architecture with React and Vite. The goal is to demonstrate frontend best practices, responsibility separation, and the use of modern technologies.

## Included Projects

- `host-app`: Main application that orchestrates the microfrontends.
- `arcane-mf`: Microfrontend for Arcane characters.
- `tlou-mf`: Microfrontend for The Last of Us characters.
- `shared-entities`: Shared types and entities package.

## Technologies Used

- React (with hooks and context)
- TypeScript
- Vite
- Styled-components
- Vitest (testing)
- Docker (optional for deployment)

## Architecture

The folder structure follows the classic by-type approach (`components/`, `hooks/`, `context/`, etc.), which is ideal for small and medium-sized projects. If the project grows, it is recommended to migrate to a modular architecture by domain/feature to improve scalability and maintainability.

> **Note:** For the scope of this technical test, the current structure is sufficient and keeps things simple. For larger projects, modularization by feature/domain is recommended.

## Installation

1. Install [pnpm](https://pnpm.io/)
2. Run `pnpm install` in the root

## Development

Run each app's development server:

```
pnpm --filter host-app dev
pnpm --filter arcane-mf dev
pnpm --filter tlou-mf dev
```

> **Note:** To run all apps together in order to test the microfrontends integration, you need to run:

- In host-app:
```
pnpm run dev
```

- In arcane-mf:
```
pnpm run build:watch
```

- In tlou-mf:
```
pnpm run build:watch
```

## Testing

Each app includes Vitest:

```
pnpm --filter <app> test
```

## Containerization

Use `docker-compose up` to start the services.
For more details, see the READMEs of each app.
