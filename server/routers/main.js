var React = require('react');
var Router = require('react-router');
var DocumentTitle = require('react-document-title');
var api = require('../services/api');
var getInitialData = require('../services/get-initial-data');
var routes = require('../../assets/js/router/routes');
var Layout = require('../views/layout');

function router(req, res) {
    var router = Router.create({
        routes,
        location: req.url,
        onAbort(options) {
            var {to, params, query} = options;
            var destination = router.makePath(to, params, query);

            res.redirect(302, destination);
        },
        onError: function (err) {
            console.log('Routing error: ' + err);
        }
    });

    router.run((Handler, state) => {
        getInitialData(state).then(data => {
            var layout = renderLayout(Handler, data);
            res.send(layout);
        });
        //api.search('bleach').done(function (data) {
        //    var layout = renderLayout({items: data}, Handler);
        //    res.send(layout);
        //}, function (err) {
        //    var layout = renderLayout({items: []}, Handler);
        //    res.send(layout);
        //});
    });
}

function renderLayout(Handler, data) {
    var storesInitialDataScript = 'var storesInitialData = ' + JSON.stringify(data) + ';';
    var component = React.renderToString(<Handler storesInitialData={data}/>);

    return React.renderToStaticMarkup(
        <Layout environment={process.env.NODE_ENV}
                title={DocumentTitle.rewind()}
                component={component}
                storesInitialDataScript={storesInitialDataScript}/>
    );
}

module.exports = router;