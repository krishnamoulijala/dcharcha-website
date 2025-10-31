# ================================
# Production stage
# ================================
FROM node:18-alpine AS production

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production --prefer-offline --no-audit && npm cache clean --force

COPY --from=builder /app/dist ./dist
COPY server.js ./server.js
COPY routes ./routes
COPY public ./public

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app
USER nodejs

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost:5000/ > /dev/null || exit 1

CMD ["node", "server.js"]
