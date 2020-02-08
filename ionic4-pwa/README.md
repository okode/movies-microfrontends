# Ionic 4 PWA

Created with:

```
ionic start ionic4-pwa blank --type=angular
```

Add `"preserveSymlinks": true` in `angular.json` (projects.app.architect.build.options)

## Building

Ensure you have built and npm-linked the `library` project.

```
npm ci
npm link okode-movies
ionic build
```

## Running Serve

```
ionic serve
```
