## Ionic 4 SPA

# Starting

Created as Angular 8 SPA with support for Single SPA before adding Ionic 4 support.

```
ng new ionic4-spa
cd ionic4-spa
ng g component list
ng g component detail
ng add single-spa-angular
```

* Add providers: `[{ provide: APP_BASE_HREF, useValue: '/' }]` to `app-routing.module.ts`.
* Add `{ path: '**', component: EmptyRouteComponent }` to your `app-routing.module.ts` routes.
* Add a declaration for `EmptyRouteComponent` in `app.module.ts`.

# Building

```
npm ci
npm run build:single-spa
```

# Validating in Single SPA Playground

Run `npm run serve:single-spa` and g o to http://single-spa-playground.org/ and register new Application with the following configuration values:

* Framework: Angular
* Application Name: ionic4-spa
* Download URL: http://localhost:4200/main.js
* Prefix for frontend routes: /

Go to the configured application and *Start test* and download sample host application if needed.

# Running host application (external)

Serve the SPA using:

```
npm run serve:single-spa
```

And (in other console) enter `host/external` folder and run:

```
npx serve -s
```

# Running host application (embedded)

Enter `host/embedded` folder and run:

```
npx serve -s
```

# Adding Ionic support

```
npm i @ionic/angular
```

* Import `node_modules/ionicons/dist/ionicons/svg` in `angular.json`.
* Add `src/theme/variables.scss` styles to `angular.json`.
* Create file `src/theme/variables.scss`.
* ¿¿ Add `{ preloadingStrategy: PreloadAllModules }` to `RouterModule.forRoot` configuration. ?? -> NOT APPLYIED
* Replace contents in `app.component.html` with:

```
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>
```

* Import `IonicModule.forRoot()` in `app.module.ts`.
* Add provier `{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }`.
* Added Ionic global styles to `src/styles.scss`.