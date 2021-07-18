import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import { useHistory } from "react-router-dom";


const firebaseApp = firebase.initializeApp({
  databaseURL:
    "https://react-maju-r-system-default-rtdb.asia-southeast1.firebasedatabase.app/",
  apiKey: "AIzaSyBHtjbVjDwOCcVECn5OZGW0LT8U70qHb2Q",
  authDomain: "react-maju-r-system.firebaseapp.com",
  projectId: "react-maju-r-system",
  storageBucket: "react-maju-r-system.appspot.com",
  messagingSenderId: "533915380955",
  appId: "1:533915380955:web:f44f5a831d07cd8db0f0fe",
});

export const firestore = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();

export const createUserProfileDocumentForUsers = async (
  userAuth,
  additionalData
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`Users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("Error Creating Users", err.message);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
      if(userAuth){
       
      }
    }, reject );
  });
};
