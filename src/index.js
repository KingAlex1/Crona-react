import 'normalize.css'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './copmonents/Main'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import 'semantic-ui-css/semantic.min.css'
import createStore from './store'

export const store = createStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Main/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
