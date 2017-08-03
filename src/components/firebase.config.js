import * as firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAEHHp8w0bkXJp8KuW1W0mkEHfM5BMeqRE",
    authDomain: "trackingsystem-3b755.firebaseapp.com",
    databaseURL: "https://trackingsystem-3b755.firebaseio.com",
    projectId: "trackingsystem-3b755",
    storageBucket: "trackingsystem-3b755.appspot.com",
    messagingSenderId: "595472006293"
};
firebase.initializeApp(config);

export default firebase;