# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY host-app/package.json ./host-app/
COPY arcane-mf/package.json ./arcane-mf/
COPY tlou-mf/package.json ./tlou-mf/

# Install dependencies
RUN pnpm install

# Copy the rest of the monorepo
COPY . .

# Expose required ports
EXPOSE 3000 3001 3002

# Start all apps in parallel
CMD ["pnpm", "start:all"]
