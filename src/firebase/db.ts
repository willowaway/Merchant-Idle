import firebaseApp from "./firebase-app";
import { getFirestore } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

export default db;