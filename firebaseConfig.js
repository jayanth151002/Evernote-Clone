import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD_hK5AThTi67pHVUYVKiQqb1mrU5PfCJg",
    authDomain: "evernote-clone-1510.firebaseapp.com",
    projectId: "evernote-clone-1510",
    storageBucket: "evernote-clone-1510.appspot.com",
    messagingSenderId: "650820076912",
    appId: "1:650820076912:web:45c517137d58f923f8bbb5",
    measurementId: "G-YFE3TPKWCT"
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const database = getFirestore(app)