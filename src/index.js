import React from 'react';
import {render} from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './components/store';

render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();