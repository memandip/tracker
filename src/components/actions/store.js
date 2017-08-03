import { createStore } from 'redux';
import trackerApp from './reducers';
import { fetchUser, addUser, updateUser, deleteUser  } from './action';
import * as firebase from 'firebase';

let mapDb = firebase.database().ref().child('users');

let initialState = {};

mapDb.once('value', (snap) => {
    initialState = snap.val();
    store.dispatch(fetchUser(snap.val()));
});

let store = createStore(trackerApp, initialState);

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

unsubscribe();