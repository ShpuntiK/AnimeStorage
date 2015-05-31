var React = require('react');
var Router = require('react-router');
var routes = require('./router/routes');
var container = require('./router/container');

require('isomorphic-fetch');

var router = Router.create({
    routes,
    location: Router.HistoryLocation
});

container.set(router);

router.run(Handler => {
    React.render(<Handler storesInitialData={window.storesInitialData}/>, document.getElementById('app'));
});
