import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCT3eKOoTiWObVWu-tp4YyQwVdjqvobmXM",
  authDomain: "react.omarouafi.com",
  databaseURL: "https://crwnproject-a0af3.firebaseio.com",
  projectId: "crwnproject-a0af3",
  storageBucket: "crwnproject-a0af3.appspot.com",
  messagingSenderId: "982442455268",
  appId: "1:982442455268:web:4355753663ecd1dd133cf1",
  measurementId: "G-ZXQLFFLP02",
});

export const uploadCollection = async (collection, data) => {
  const collectionRef = firestore.collection(collection);
  const collectionSnapshot = await collectionRef.get();
  console.log(collectionSnapshot);
  if (collectionSnapshot.empty) {
    const batch = firestore.batch();

    data.forEach((obj) => {
      const docRef = collectionRef.doc();
      batch.set(docRef, obj);
    });
    await batch.commit();
  }
};

export const createUserDocument = async (user, add) => {
  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exist) {
    const { email, displayName } = user;
    await userRef.set({
      id: user.uid,
      email,
      displayName,
      createdAt: Date.now(),
      ...add,
    });
  }

  return userRef;
};

export const convertSnapShotToArray = (snapshot) => {
  const converted = snapshot.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
    };
  });

  const objectOriented = converted.reduce((acc, obj) => {
    acc[obj.routeName] = obj;
    return acc;
  }, {});

  return objectOriented;
};

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      resolve(user);
    }, reject);
  });
export const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
