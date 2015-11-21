var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Wrap = require('./components/wrap');
    Home = require('./components/home'),
    Count = require('./components/count');

module.exports = (
    <Route path='/' component={Wrap}>
        <IndexRoute component={Home}/>
        <Route path='/count' component={Count}/>
    </Route>
);