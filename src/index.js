import 'normalize.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './copmonents/Main'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import './config'
import username from './utils/name'
import setupSocket from './sockets'
import 'semantic-ui-css/semantic.min.css'


import createStore from './store'



const store = createStore();

export const socket = setupSocket(store.dispatch, username)


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Main/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
