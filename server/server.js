var path = require('path');
var express = require('express');
var serverRouter = require('./router');
//var site = require('./site');
//var api = require('./api');

var app = express();

app.use('/assets', express.static('assets'));

app.use(serverRouter);
//app.use('/', site);
//app.use('/api', api);

var server = app.listen(3000, function () {
    var host = server.address();
    console.log('Server is running at %s:%s', host.address, host.port);
});

//TODO:
// Getting data from api
// If not auth then transition in router
// Highlight active link
// Add flux
// Add registration and auth
