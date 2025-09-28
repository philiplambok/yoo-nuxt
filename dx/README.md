# Development Tools (DX)

This directory contains development tools and utilities for the Yoo Nuxt Todo application.

## Files

- `Dockerfile` - Development Docker image configuration
- `build` - Build script to create the Docker image
- `.dockerignore` - Files to exclude from Docker build context

## Usage

### Building the Docker Image

1. Make sure Docker is running on your system
2. Run the build script:

```bash
./dx/build
```

This will:
- Build a Docker image named `yoo-nuxt-todo:dev`
- Use the Dockerfile optimized for development
- Show build progress and final image information

### Running the Application

After building, you can run the application in different ways:

#### Development Mode (with live reload)
```bash
docker run -it --rm -p 3000:3000 -v "$(pwd):/app" -v /app/node_modules yoo-nuxt-todo:dev
```

This mounts your local code into the container so changes are reflected immediately.

#### Production-like Mode
```bash
docker run -it --rm -p 3000:3000 yoo-nuxt-todo:dev
```

This uses the code baked into the image.

#### Interactive Shell
```bash
docker run -it --rm yoo-nuxt-todo:dev sh
```

Access the container's shell for debugging.

### Accessing the Application

Once running, the application will be available at:
- **URL**: http://localhost:3000
- **Port**: 3000

## Features

- 🐳 Optimized Docker setup for Nuxt 4
- 📦 Uses pnpm for faster package management
- 🔄 Live reload support in development mode
- 🚀 Production-ready build process
- 📊 Detailed build information and usage instructions

## Requirements

- Docker installed and running
- Node.js 20+ (for local development)
- pnpm (if running locally)

## Troubleshooting

1. **Docker not running**: Make sure Docker Desktop is started
2. **Port conflicts**: Change the port mapping if 3000 is in use: `-p 3001:3000`
3. **Permission issues**: Make sure the build script is executable: `chmod +x dx/build`