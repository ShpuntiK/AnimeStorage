var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var container = require('./container');

var router = Router.create({
    routes,
    location: Router.HistoryLocation
});

container.set(router);

router.run(Handler => {
    React.render(<Handler initialData={window.initialData}/>, document.getElementById('app'));
});

module.exports = router;