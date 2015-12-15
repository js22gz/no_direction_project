/*
This is the "sitemap" of our app!
*/

import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {Wrapper} from './pages/wrapper';
import Home from './pages/home';
import Timer from './pages/timer';
import Stopwatch from './pages/stopwatch';

export default (
	<Route component={Wrapper} path="/" >
     	<IndexRoute component={Home}/>
    	<Route path='/timer' component={Timer}/>
    	<Route path='/stopwatch' component={Stopwatch}/>
    </Route>
);