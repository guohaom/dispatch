import React from 'react';
import { render } from 'react-dom';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import store from './store/store.js';
import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Login from './login.js';
import Home from './home.js';
import EditDiary from './note/editDiary.js';
import IndexPanel from './IndexPanel.js'

const muiTheme = getMuiTheme({

});

console.log('store is ', store);

render((
        <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={Login} />
                <Route path="home" component={Home}>
                    <IndexRoute component={IndexPanel} />
                    <Route path='edit' component={EditDiary} />
                </Route>
            </Router>
    </Provider>
        </MuiThemeProvider>
), document.getElementById('app'));