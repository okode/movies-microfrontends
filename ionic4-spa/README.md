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

# Running host application

Serve the SPA using:

```
npm run serve:single-spa
```

And (in other console) enter `host` folder and run:

```
npx serve -s
```
