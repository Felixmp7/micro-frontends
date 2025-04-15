# Dockerfile para arcane-mf
FROM node:20-alpine AS builder

# Habilita corepack y pnpm
RUN corepack enable && corepack prepare pnpm@8.15.5 --activate

WORKDIR /app

# Copia solo los archivos de dependencias primero (mejor caché)
COPY package.json pnpm-lock.yaml ./

# Instala dependencias
RUN pnpm install --frozen-lockfile

# Copia el resto del código
COPY . .

# Build de la app
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3001
CMD ["pnpm", "preview", "--host", "0.0.0.0", "--port", "3001"]
