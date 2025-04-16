# Dockerfile para desarrollo de monorepo microfrontends
FROM node:20-alpine

# Instala pnpm globalmente
RUN npm install -g pnpm

# Crea directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración primero para aprovechar el cache
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copia los package.json de los paquetes principales y shared-entities
COPY host-app/package.json ./host-app/package.json
COPY arcane-mf/package.json ./arcane-mf/package.json
COPY tlou-mf/package.json ./tlou-mf/package.json
COPY shared-entities/package.json ./shared-entities/package.json

# Instala dependencias de todos los workspaces
RUN pnpm install

# Copia el resto del código fuente
COPY . .

# Expone los puertos típicos para desarrollo
EXPOSE 3000 3001 3002

# Comando por defecto: usar docker-compose para orquestar varios procesos
CMD ["sh", "-c", "echo 'Usa docker-compose para desarrollo local'"]
