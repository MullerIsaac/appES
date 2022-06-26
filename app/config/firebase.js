import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQBbS09uz5oFPioyXZH_um2gRMMIVMpv4",
    authDomain: "kilo-14408.firebaseapp.com",
    projectId: "kilo-14408",
    storageBucket: "kilo-14408.appspot.com",
    messagingSenderId: "517834117820",
    appId: "1:517834117820:web:5df3466576e61ac08676b9",
    measurementId: "G-VT5HKMF32Q"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);