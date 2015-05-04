var path = require('path');
var express = require('express');
var React = require('react');
var Router = require('react-router');
var api = require('./api');
var routes = require('../assets/js/routes');
var Layout = require('../assets/js/app/layout');

var app = express();

app.use('/assets', express.static('assets'));

app.use(function (req, res) {
    Router.run(routes, req.url, function (Handler) {
        api.search('bleach').done(function (data) {
            var layout = renderLayout({items: data}, Handler);
            res.send(layout);
        }, function (err) {
            var layout = renderLayout({items: []}, Handler);
            res.send(layout);
        });
    });
});


function renderLayout (initialData, Handler) {
    var initialScript = 'var initialData = ' + JSON.stringify(initialData) + ';';
    var component = React.renderToString(<Handler initialData={initialData}/>);

    return React.renderToStaticMarkup(<Layout component={component} initialScript={initialScript}/>);
}

//app.use(function (req, res) {
//    Router.run(routes, req.url, function (Handler) {
//        var initialData = {
//            items: [{
//                id: 1,
//                title: 'Bleach',
//                rating: 8.43
//            }, {
//                id: 2,
//                title: 'Darker than black',
//                rating: 9.45
//            }]
//        };
//        var initialScript = 'var initialData = ' + JSON.stringify(initialData) + ';';
//        var component = React.renderToString(<Handler initialData={initialData}/>);
//        var layout = React.renderToStaticMarkup(<Layout component={component} initialScript={initialScript}/>);
//
//        res.send(layout);
//    });
//});

var server = app.listen(3000, function () {
    var host = server.address();
    console.log('Server is running at %s:%s', host.address, host.port);
});

//TODO:
// Getting data from api
// Add title
// Highlight active link
// Add flux
// Add registration and auth
