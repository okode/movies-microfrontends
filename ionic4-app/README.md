# Ionic 4 App

Created with:

```
ionic start ionic4-app blank --type=angular --capacitor
cd ionic4-app
npx cap add ios
npx cap add android
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

### Running iOS

```
ionic build
npx cap sync ios
npx cap open ios
```

Build and run with Xcode.

### Running Android

```
ionic build
npx cap sync android
npx cap open android
```

Build and run with Android Studio.