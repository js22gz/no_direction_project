import React from "react";
import {Route} from "react-router";
import {IndexRoute} from "react-router";
import Wrap from "./components/wrap";
import Home from "./components/home";
import Count from "./components/count";
import Stopwatch from "./components/stopwatch";
import Timer from "./components/timer";

module.exports = (
    <Route path='/' component={Wrap}>
        <IndexRoute component={Home}/>
        <Route path='/count' component={Count}/>
        <Route path='/stopwatch' component={Stopwatch}/>
        <Route path='/timer' component={Timer}/>
    </Route>
);