# Development Dockerfile for Nuxt Todo App
FROM debian:12

# Set environment variables for development
ENV NODE_ENV=development
ENV PATH="/root/.local/bin:/root/.local/share/mise/shims:$PATH"

# Update package lists and install system dependencies
RUN apt-get update --quiet --yes && \
    apt-get install --quiet --yes \
    curl \
    build-essential \
    git \
    vim \
    && rm -rf /var/lib/apt/lists/*

# Install mise for Node.js version management
RUN curl https://mise.run | sh && \
    echo 'eval "$(~/.local/bin/mise activate bash)"' >> ~/.bashrc

# Set working directory
WORKDIR /app

# Copy mise.toml to install Node.js version specified in the file
COPY mise.toml ./
RUN mise trust && \
    mise install && \
    mise reshim

# Install pnpm globally
RUN npm install -g pnpm

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