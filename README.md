# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Development with Docker

This project includes development tools (DX) for running the application in Docker containers.

### Prerequisites

- Docker Desktop installed and running

### Available Commands

#### Build Docker Image
```bash
./dx/build
```
Builds the development Docker image with Debian 12, Node.js 20, and all dependencies.

#### Start/Stop Container
```bash
./dx/start
```
Starts the Docker container in background mode. This allows other commands like `dx/dev`, `dx/test` and `dx/lint` to work with the running container.

```bash
./dx/stop
```
Stops the running Docker container.

#### Access Container Shell
```bash
./dx/shell
```
Provides interactive shell access to the running container for debugging and manual operations.


#### Start Development Server
```bash
./dx/dev
```
Starts the Nuxt development server in a Docker container with:
- Live reload support (volume mounted)
- Accessible at http://localhost:3000
- Hot module replacement enabled

#### Run Linter
```bash
./dx/lint
```
Runs ESLint to check JavaScript/TypeScript code quality and style.

```bash
./dx/lint --fix
# or
./dx/lint -f
```
Runs ESLint with auto-fix to automatically correct fixable issues.

#### Run Tests
```bash
./dx/test
```
Runs the Vitest test suite and displays results.

```bash
./dx/test --watch
# or
./dx/test -w
```
Runs tests in watch mode - automatically re-runs tests when files change.

```bash
./dx/test tests/specific-test.spec.ts
```
Runs a specific test file.

The build command also supports a fresh rebuild option:

```bash
./dx/build --no-cache
```
Builds the image without using Docker cache - use this when you add new packages to package.json or want a completely fresh build.


### Docker Development Features

- 🐳 **Debian 12** base OS for development compatibility
- 📦 **Node.js 20** from official NodeSource repository
- 🔄 **Live reload** with volume mounting
- 🚀 **Fast builds** with Docker layer caching
- 📊 **Build insights** with colored output and usage instructions
- 🏃 **No rebuild** - containers use pre-built images for speed

## Getting Help

All DX commands support the `--help` flag for detailed usage information:

```bash
./dx/build --help    # Build command help
./dx/start --help    # Start command help
./dx/stop --help     # Stop command help
./dx/shell --help    # Shell access help
./dx/dev --help      # Development server help
./dx/test --help     # Test command help
./dx/lint --help     # Lint command help
./dx/help            # Overview of all commands
```
