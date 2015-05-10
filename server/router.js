var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var api = require('./api');
var routes = require('../assets/js/routes');
var Layout = require('../assets/js/app/layout');

function router(req, res) {
    Router.run(routes, req.url, function (Handler) {
        api.search('bleach').done(function (data) {
            var layout = renderLayout({items: data}, Handler);
            res.send(layout);
        }, function (err) {
            var layout = renderLayout({items: []}, Handler);
            res.send(layout);
        });
    });
}

function renderLayout(initialData, Handler) {
    var initialScript = 'var initialData = ' + JSON.stringify(initialData) + ';';
    var component = React.renderToString(<Handler initialData={initialData}/>);

    return React.renderToStaticMarkup(
        <Layout environment={process.env.NODE_ENV}
                title={DocumentTitle.rewind()}
                component={component}
                initialScript={initialScript}/>
    );
}

module.exports = router;