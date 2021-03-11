// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebase: {
    apiKey: config.MY_API_TOKEN,
    authDomain: "angular-test1-9da2f.firebaseapp.com",
    databaseURL: "https://angular-test1-9da2f-default-rtdb.firebaseio.com",
    projectId: "angular-test1-9da2f",
    storageBucket: "angular-test1-9da2f.appspot.com",
    messagingSenderId: "210886273660",
    appId: "1:210886273660:web:d26d147220da70680db7f9"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
