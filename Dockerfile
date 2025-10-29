# ================================
# Build stage
# ================================
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit && npm cache clean --force

# Copy source code and build
COPY . .
RUN npm run build

# ================================
# Production stage
# ================================
FROM node:18-alpine AS production

WORKDIR /app

# Only install production dependencies
COPY package*.json ./
RUN npm ci --only=production --prefer-offline --no-audit && npm cache clean --force

# Copy required files from builder
COPY --from=builder /app/dist ./dist
COPY server.js ./
COPY routes ./routes

# Copy optional config and .well-known (won’t fail if missing)
RUN mkdir -p config .well-known
COPY config ./config/
COPY .well-known ./.well-known/

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app
USER nodejs

EXPOSE 5000

# Lightweight healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:5000/ > /dev/null || exit 1

CMD ["node", "server.js"]
