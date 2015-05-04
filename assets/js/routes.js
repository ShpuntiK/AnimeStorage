var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var NotFound = require('./pages/not-found');
var App = require('./app/app');
var Dashboard = require('./pages/dashboard');
var Profile = require('./pages/profile');

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="profile" handler={Profile}/>

        <DefaultRoute handler={Dashboard}/>
        <NotFoundRoute name="not-found" handler={NotFound}/>
    </Route>
);

module.exports = routes;