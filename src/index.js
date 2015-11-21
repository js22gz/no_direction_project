import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router";
import {Provider} from "react-redux";

var store = require('./store'),
    routes = require('./routes');

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes}/>
    </Provider>,
    document.getElementById('content')
);
