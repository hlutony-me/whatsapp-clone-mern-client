// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyBq3tcMpyryZ6fJQDdorq5Mg-7_H9fpu9w",
	authDomain: "han-whatsapp-clone.firebaseapp.com",
	projectId: "han-whatsapp-clone",
	storageBucket: "han-whatsapp-clone.appspot.com",
	messagingSenderId: "537988993006",
	appId: "1:537988993006:web:17d12e3db07c8290eac8ff",
	measurementId: "G-MLH7SN4CFD"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)


const auth = getAuth();
auth.useDeviceLanguage() 
// To apply the default browser preference instead of explicitly setting it.
// firebase.auth().useDeviceLanguage();

export { app ,auth} 