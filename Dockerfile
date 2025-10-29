# ================================
# Build stage
# ================================
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit

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
# COPY config ./config         # uncomment if exists
COPY .well-known ./.well-known # ✅ Serve Android asset links

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app
USER nodejs

EXPOSE 5000

# Use curl instead of node for faster healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:5000/ > /dev/null || exit 1

CMD ["node", "server.js"]
