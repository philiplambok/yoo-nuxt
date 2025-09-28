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
Builds the development Docker image with Debian 12, mise, Node.js 20, and all dependencies.

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

### Docker Development Features

- 🐳 **Debian 12** base OS for development compatibility
- 📦 **mise** for Node.js version management  
- 🔄 **Live reload** with volume mounting
- 🚀 **Fast builds** with Docker layer caching
- 📊 **Build insights** with colored output and usage instructions
