import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5LkEJdOgsvk0iSXSvRH0Tvb5I9doZZPM",
  authDomain: "fir-login-29803.firebaseapp.com",
  projectId: "fir-login-29803",
  storageBucket: "fir-login-29803.appspot.com",
  messagingSenderId: "68630957005",
  appId: "1:68630957005:web:5cc181343b29a730cd1284",
  measurementId: "G-3FL38GZ0Y2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
