import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/database'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase ,ref, set ,push} from "firebase/database";
// import { getDatabase ,ref,set} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzX_J6JrN2ADSlZFaFc7WkvTlHYzuHe1E",
  authDomain: "nsmini-f5427.firebaseapp.com",
  databaseURL: "https://nsmini-f5427-default-rtdb.firebaseio.com",
  projectId: "nsmini-f5427",
  storageBucket: "nsmini-f5427.appspot.com",
  messagingSenderId: "664224419941",
  appId: "1:664224419941:web:6340d5686095b6211db68c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);
// var db = firebase.database().ref();
const auth = getAuth(app);
const database = getDatabase();

export function writeUserData(userDetails) {
  const db = getDatabase();
  push(ref(db, 'users/'), userDetails);
}



export function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password).then(()=>{console.log("passed")}).catch((e)=>{console.log(e)});

}


// function writeUserData(){
//     set(ref(db,'/users'),{
//         username:"naHIIIme"
//     });
// }

// export default db;