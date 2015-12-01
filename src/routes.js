import React from "react";
import {Route} from "react-router";
import {IndexRoute} from "react-router";
import Wrap from "./components/wrap";
import Home from "./components/home";
import Stopwatch from "./components/stopwatch";
import Timer from "./components/timer";
import Test from "./components/test";

module.exports = (
    <Route path='/' component={Wrap}>
        <IndexRoute component={Home}/>
        <Route path='/stopwatch' component={Stopwatch}/>
        <Route path='/timer' component={Timer}/>
        <Route path='/test' component={Test}/>
    </Route>
);