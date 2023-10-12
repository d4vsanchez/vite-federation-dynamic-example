# Vite Module Federation Dynamic URL

This is a quick example showing how to use Module Federation in Vite with a dynamic origin.

## How to run

Install dependencies

```shell
npm install
```

### Remote

1. Go to the `remote` project

```shell
cd remote
```

2. Build dist

```shell
npm build
```

3. Serve the `remoteEntry.js`` file

```shell
npx serve ./dist/assets --cors -l 8080
```

### Host

1. Open a new terminal and go to the `host` project

```shell
cd host
```

2. Run the project in dev-mode

```shell
npm run dev
```

## Changing config

You can change the dynamic URL changing the `remoteUrl` variable value in `./host/index.html`
