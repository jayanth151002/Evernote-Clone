import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: "evernote-clone-1510.appspot.com",
    messagingSenderId: "650820076912",
    appId: "1:650820076912:web:45c517137d58f923f8bbb5",
    measurementId: "G-YFE3TPKWCT"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const database = getFirestore(app)