import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDhPq9BZuI7xTRzLkTdVHEKZ-PoQwDFCTY",
    authDomain: "vuegram-f84b3.firebaseapp.com",
    databaseURL: "https://vuegram-f84b3.firebaseio.com",
    projectId: "vuegram-f84b3",
    storageBucket: "vuegram-f84b3.appspot.com",
    messagingSenderId: "494989699453"
};
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth, 
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}