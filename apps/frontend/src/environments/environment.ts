import { environmentLocal } from './environment-local';

export const environment = {
  production: false,
  API_URL: environmentLocal.API_URL,
  firebase: {
    apiKey: environmentLocal.firebase.apiKey,
    authDomain: environmentLocal.firebase.authDomain,
    projectId: environmentLocal.firebase.projectId,
    storageBucket: environmentLocal.firebase.storageBucket,
    messagingSenderId: environmentLocal.firebase.messagingSenderId,
    appId: environmentLocal.firebase.appId,
    measurementId: environmentLocal.firebase.measurementId,
  },
};
