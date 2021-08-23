import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCeyva2aNuZH6RMYP4UQiApaJqTHIZuZ4I",
    authDomain: "proyecto-react-d4cf2.firebaseapp.com",
    projectId: "proyecto-react-d4cf2",
    storageBucket: "proyecto-react-d4cf2.appspot.com",
    messagingSenderId: "350463124580",
    appId: "1:350463124580:web:2a68250cfd441496c6ab71"
};

const app = firebase.initializeApp(firebaseConfig)

//exporto acceso directo al servicio
export const firestore = firebase.firestore(app)