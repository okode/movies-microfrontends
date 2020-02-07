# Ionic 4 Library

Created with:

```
ng new library --createApplication=false
cd library
ng g library okode-movies --prefix=okode
npm i @ionic/angular
```

## Adding components

```
ng g component movieDetail
ng g component movieListPage
ng g component movieDetailPage
```

## Building

```
npm ci
ng build --watch
```

## Link Library

```
cd dist/okode-movies
npm link
```