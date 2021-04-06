// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: 'AIzaSyDU8bahRkc15WcS1ixeyw4Nge1ndBR4A34',
    authDomain: 'angular-pwa-platzi-a1a1c.firebaseapp.com',
    projectId: 'angular-pwa-platzi-a1a1c',
    storageBucket: 'angular-pwa-platzi-a1a1c.appspot.com',
    messagingSenderId: '152947519464',
    appId: '1:152947519464:web:13c83165ecef69dad7fe5d'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();