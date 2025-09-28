# Development Dockerfile for Nuxt Todo App
FROM debian:12-slim

# Set environment variables for development
ENV NODE_ENV=development
ENV DEBIAN_FRONTEND=noninteractive

# Install system dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends --allow-unauthenticated \
    curl \
    ca-certificates \
    gnupg \
    && apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Node.js 20
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Install pnpm globally
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Expose the development port
EXPOSE 3000

# Keep container running for development
CMD ["sleep", "infinity"]