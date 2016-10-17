import React from 'react';
import {render} from 'react-dom';

import TaskList from './taskList.js';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Login from './login.js';

const muiTheme = getMuiTheme({

});

render((
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={hashHistory}>
            <Route path="/" component={Login}/>   
            <Route path="/list" component={TaskList}></Route>
        </Router>
    </MuiThemeProvider>
), document.getElementById('app'));