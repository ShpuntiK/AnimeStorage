var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('../app');
var NotFound = require('../pages/not-found');
var Login = require('../pages/login');
var SignUp = require('../pages/signup');
var Dashboard = require('../pages/dashboard');
var Profile = require('../pages/profile');

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="login" handler={Login}/>
        <Route name="signup" handler={SignUp}/>
        <Route name="profile" handler={Profile}/>

        <DefaultRoute handler={Dashboard}/>
        <NotFoundRoute name="not-found" handler={NotFound}/>
    </Route>
);

module.exports = routes;