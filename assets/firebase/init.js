if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
    apiKey: "AIzaSyC0kIyNRX0_h7PAvlivr3on2DXbLJH1u-M",
    authDomain: "thaijogging-214013.firebaseapp.com",
    databaseURL: "https://thaijogging-214013.firebaseio.com",
    projectId: "thaijogging-214013",
    storageBucket: "thaijogging-214013.appspot.com",
    messagingSenderId: "159830461119"
});