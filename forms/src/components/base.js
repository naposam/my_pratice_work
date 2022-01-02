
import firebase from 'firebase'


const config= {
    apiKey: "AIzaSyBRVghpZvf0UyLXFNTrKyvNjlZueoBQQCI",
    authDomain: "newapp-5cde6.firebaseapp.com",
    databaseURL: "https://newapp-5cde6.firebaseio.com",
    projectId: "newapp-5cde6",
    storageBucket: "newapp-5cde6.appspot.com",
    messagingSenderId: "619210116382"
};
const fire=  firebase.initializeApp(config)
export default fire