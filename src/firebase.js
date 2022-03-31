import * as firebase from 'firebase/app';
import {
    // getFirestore,
    initializeFirestore,
    // collection,
    doc,
    setDoc,
} from "firebase/firestore";
// import 'firebase/firebase-app';
// import 'firebase/firebase-storage';
import 'firebase/firestore';
import { nanoid } from 'nanoid'

// import {
//     // ref,
//     onUnmounted
// } from 'vue'
const config = {
    apiKey: "AIzaSyCyDUeP9uLTBe2gw1mTZ9LQZa2q_5659W0",
    authDomain: "codehat-cademy-front-mgmt.firebaseapp.com",
    projectId: "codehat-cademy-front-mgmt",
    storageBucket: "codehat-cademy-front-mgmt.appspot.com",
    messagingSenderId: "880438966353",
    appId: "1:880438966353:web:6f291abbd8ca730808e070",
    measurementId: "G-JR3YNKRPWZ"
}
const firebaseApp = firebase.initializeApp(config)
// const db = firebaseApp.firestore()
// const db = firebase.firestore()
// const db = getFirestore();
const db = initializeFirestore(firebaseApp, {
    ignoreUndefinedProperties: true,
});
// const messagesCollection = collection(db, 'contact-us-form');
// messagesCollection.add({
// });
// const usersCollection = db.collection('users')
// export const createUser = user => {
//     return usersCollection.add(user)
// }
// export const getUser = async id => {
//     const user = await usersCollection.doc(id).get()
//     return user.exists ? user.data() : null
// }
// export const updateUser = (id, user) => {
//     return usersCollection.doc(id).update(user)
// }
// export const deleteUser = id => {
//     return usersCollection.doc(id).delete()
// }
// export const useLoadUsers = () => {
//     const users = ref([])
//     const close = usersCollection.onSnapshot(snapshot => {
//         users.value = snapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data()
//         }))
//     })
//     onUnmounted(close)
//     return users
// }
// export const isPlainObj = (o) => Boolean(
//     o && o.constructor && o.constructor.prototype && o.constructor.prototype.hasOwnProperty("isPrototypeOf")
// )

export const addContactUsMessage = async (message) => {
    console.log(message)
    const frankDocRef = doc(db, 'contact-us-form', nanoid());
    return await setDoc(frankDocRef, message)
    // return add(messagesCollection, message)
    // return messagesCollection.add(message)
}
