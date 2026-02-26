import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCsI3U0vpmvt-APyDLIOGbdi7UprVWdEg8",
  authDomain: "nhl-dashboard-53d40.firebaseapp.com",
  projectId: "nhl-dashboard-53d40",
  storageBucket: "nhl-dashboard-53d40.firebasestorage.app",
  messagingSenderId: "225533153727",
  appId: "1:225533153727:web:694a34728096f985d7110a",
  measurementId: "G-YEN8FFWWYL"
};




// // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const storage = getStorage(app);
// export const database = getFirestore(app);
// export const analytics = () => getAnalytics(app);

export default app