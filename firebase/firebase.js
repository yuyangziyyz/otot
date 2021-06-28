import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAI1EPn1wL1NBBuFlYohXes4MWjLrrzuls",
    authDomain: "otot-bb492.firebaseapp.com",
    projectId: "otot-bb492",
    storageBucket: "otot-bb492.appspot.com",
    messagingSenderId: "896755066937",
    appId: "1:896755066937:web:27fcc4e57dc6698e5385e8",
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;