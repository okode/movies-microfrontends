# Okode Movies SPA with Library

Created with:

```
ng new okode-movies-spa
cd okode-movies-spa
ng g library okode-movies --prefix=okode
npm i @ionic/angular
ng add single-spa-angular
```

Configuration parameters:

* Use Angular Routing.
* Use SCSS.
* Don't use BrowserAnimationsModule

## Adding components to library

```
ng g component movieDetail --project okode-movies
ng g component movieListPage --project okode-movies
ng g component movieDetailPage --project okode-movies
```

## Building library with watch support

```
npm ci
npx ng build okode-movies -- --watch
```

## Link library

```
cd dist/okode-movies
npm link
```

## Unlink library

```
cd dist/okode-movies
npm unlink
```

## Building SPA

```
npm ci
npm run build
```

## Running SPA

```
npm start
```

