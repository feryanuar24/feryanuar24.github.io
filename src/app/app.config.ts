import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAlIhQyJs_NztxImACYH6p1pFohp-rHwwA',
  authDomain: 'my-portofolio-63497.firebaseapp.com',
  projectId: 'my-portofolio-63497',
  storageBucket: 'my-portofolio-63497.firebasestorage.app',
  messagingSenderId: '938872717107',
  appId: '1:938872717107:web:b6ddafbfab9d73af69c846',
  measurementId: 'G-V6B20828N0',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};
