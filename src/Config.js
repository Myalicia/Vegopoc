import * as firebase from "firebase";

const config = {
            apiKey: 'AIzaSyDTVbhoeqbhlTy9EcXzJXWkylzX39I44X4',
            authDomain: 'vegotest-ef9a7.firebaseapp.com',
            databaseURL: 'https://vegotest-ef9a7.firebaseio.com',
            projectId: 'vegotest-ef9a7',
            storageBucket: 'vegotest-ef9a7.appspot.com',
            messagingSenderId: '894754942143'

};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
