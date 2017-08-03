import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import trackerApp from './components/actions/reducers';
import store from './components/store';
import { deleteUser, addUser } from './components/actions/userActions.js';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();

store.subscribe( () => {
    console.log(store.getState())
});

// let user = {
//     name:'Sanjay Khadka',
//     connection:false,
//     createdAt:1497719872563,
//     id: "2hSs5DJNByX7gdasjQ5J4pGmUFAeXaK212",
//     latitude:57.47,
//     longitude:73.41
// };

// store.dispatch(deleteUser('-Kqbn2jAU25zFbSRohv5'));

// store.dispatch({type:'DELETE_USER',id:'-Kqbn2jAU25zFbSRohv5'});

// store.dispatch({type:'UPDATE_USER', id:'-Kqbn2jAU25zFbSRohv5', payload:user});

// store.dispatch({type:'ADD_USER',payload:user});

// let reducer = function(state, action){
//     if(action.type == 'INC'){
//         return state + action.payload;
//     }
//     return state;
// }

// const store = createStore(reducer, 0);


// store.subscribe( () => {
//     console.log("Store changed.", store.getState());
// });

// store.dispatch({type:'INC', payload:1});
// store.dispatch({type:'INC', payload:10});
// store.dispatch({type:'INC', payload:100});
// store.dispatch({type:'INC', payload:1000});

