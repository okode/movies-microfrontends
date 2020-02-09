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

Complete setup applying manual steps from https://single-spa.js.org/docs/ecosystem-angular#configure-routes

Apply Ionic 4 requirements:

* Import `node_modules/ionicons/dist/ionicons/svg` in `angular.json`.
* Add `src/theme/variables.scss` styles to `angular.json`.
* Create file `src/theme/variables.scss`.
* Load routing from library module in `app-routing.module.ts`.
* ¿¿ Add `{ preloadingStrategy: PreloadAllModules }` to `RouterModule.forRoot` configuration. ?? -> NOT APPLYIED
* Replace contents in `app.component.html` with:

```
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>
```

* Import `IonicModule.forRoot()` and the library module in `app.module.ts`.
* Add provier `{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }`.
* Added Ionic global styles to `src/styles.scss`.

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

## Building single-spa

```
npm ci
npm run build:single-spa
```
