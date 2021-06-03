// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: 'DEVELOP',
  firebaseConfig: {
    apiKey: 'AIzaSyDXe0TgWIodgP94Upw30vd7AB41d8sH7oM',
    authDomain: 'meddit-4000a.firebaseapp.com',
    projectId: 'meddit-4000a',
    storageBucket: 'meddit-4000a.appspot.com',
    messagingSenderId: '688313026972',
    appId: '1:688313026972:web:110807f21fe7eb52dce059',
    measurementId: 'G-KZVFTMKHZ5'
  },
  apiConfig: {
    api_url: 'http://34.117.170.186:8080',
    api_local_url: 'http://localhost:8080'
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
