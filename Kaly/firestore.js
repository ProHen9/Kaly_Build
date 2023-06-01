"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app"); // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIRESTORE_TOKEN,
    authDomain: process.env.FIRESTORE_AUTHDOMAIN,
    projectId: process.env.FIRESTORE_PROJECTID,
    storageBucket: process.env.FIRESTORE_STORAGEBUCKET,
    messagingSenderId: process.env.FIRESTORE_MESSAGINGSENDERID,
    appId: process.env.FIRESTORE_APPID
};
// Initialize Firebase
exports.app = (0, app_1.initializeApp)(firebaseConfig);
