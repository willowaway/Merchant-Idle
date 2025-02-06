import { initializeApp }  from "firebase/app";

// Firebase Initialization
const firebaseConfig = {
	apiKey: "AIzaSyAR7Ey9ug-EQm_Pccbzm4OYlhN95qg9jvU",
	authDomain: "merchant-idle.firebaseapp.com",
	projectId: "merchant-idle",
	storageBucket: "merchant-idle.firebasestorage.app",
	messagingSenderId: "633736565783",
	appId: "1:633736565783:web:14ee3884795261945df852",
	measurementId: "G-R0GRBC9FSS"
  };

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;