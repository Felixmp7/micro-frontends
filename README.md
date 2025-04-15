# Microfrontends Characters App

Aplicación modular para consultar personajes de Arcane y The Last of Us usando microfrontends, React, TypeScript, Vite y Docker.

## Estructura del Monorepo

- `host-app`: Proyecto principal (host)
- `arcane-mf`: Microfrontend de Arcane
- `tlou-mf`: Microfrontend de The Last of Us

## Instalación

1. Instala [pnpm](https://pnpm.io/)
2. Ejecuta `pnpm install` en la raíz

## Desarrollo

Cada app tiene su propio script de desarrollo:

```
pnpm --filter host-app dev
pnpm --filter arcane-mf dev
pnpm --filter tlou-mf dev
```

## Pruebas

Cada app incluye Vitest:

```
pnpm --filter <app> test
```

## Contenerización

Usa `docker-compose up` para levantar los servicios.

---

Más detalles en los README de cada app.
# micro-frontends
