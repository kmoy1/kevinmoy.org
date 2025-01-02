# Personal Website

Personal website for Kevin Moy.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploy

This website is hosted through Firebase. To deploy, first run `ng build`, then login to Firebase and deploy.

```
firebase login
firebase deploy
```

Ensure `firebase.json` points to `dist/personalwebsite`.

You may need to run `firebase logout` then `firebase login` again to refresh credentials if these commands return errors.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
