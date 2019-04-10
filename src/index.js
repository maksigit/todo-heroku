import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {rPosts} from "./reducers/Reducers";
import {createStore} from 'redux';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'

import './index.css';

import FormLogin from './components/FormLogin';
import FormRegister from './components/FormRegister';
import TodoList from './components/TodoList';
import App from './components/App';
import Links from './components/Links';


const store = createStore(rPosts);
console.log('MyStore =>', store);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Links/>
                <Route exact path="/" component={App}/>
                <Route exact path="/login/" component={FormLogin}/>
                <Route exact path="/register/" component={FormRegister}/>
                <Route exact path="/todo/" component={TodoList}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

