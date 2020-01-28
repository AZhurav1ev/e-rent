import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAa1_whsbrm-q9oPka3Dto3Ibg-7DB3q3k",
    authDomain: "rental-store.firebaseapp.com",
    databaseURL: "https://rental-store.firebaseio.com",
    projectId: "rental-store",
    storageBucket: "rental-store.appspot.com",
    messagingSenderId: "279293473639",
    appId: "1:279293473639:web:ee767dee7e80f85444f5c2",
    measurementId: "G-9EFZCTST1R"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(`Error occured: ${error.message}`)
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);




export default firebase;

