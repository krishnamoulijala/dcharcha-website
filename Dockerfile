# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build frontend
RUN npm run build

# Expose port
EXPOSE 5000

# Start the server
CMD ["node", "server.js"]
