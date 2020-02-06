# Ionic 4 Library

Created with:

```
ng new library --createApplication=false
cd library
ng generate library okode-movies --prefix=okode
npm i @ionic/angular
```

## Adding components

```
ng g component movieDetail
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