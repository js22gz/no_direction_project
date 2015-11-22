import React from "react";
import {Route} from "react-router";
import {IndexRoute} from "react-router";
import Wrap from "./components/wrap";
import Home from "./components/home";
import Count from "./components/count";
import Timeteller from "./components/timeteller";

module.exports = (
    <Route path='/' component={Wrap}>
        <IndexRoute component={Home}/>
        <Route path='/count' component={Count}/>
        <Route path='/timeteller' component={Timeteller}/>
    </Route>
);