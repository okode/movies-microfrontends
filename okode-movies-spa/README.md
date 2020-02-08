# Okode Movies SPA with Library

Created with:

```
ng new okode-movies-spa
cd okode-movies-spa
ng g library okode-movies --prefix=okode
npm i @ionic/angular
```

## Adding components

```
ng g component movieDetail --project okode-movies
ng g component movieListPage --project okode-movies
ng g component movieDetailPage --project okode-movies
```

## Building

```
npm ci
npx ng build okode-movies -- --watch
```

## Link Library

```
cd dist/okode-movies
npm link
```

## Unlink Library

```
cd dist/okode-movies
npm unlink
```
