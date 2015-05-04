var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('../components/header');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header/>
                <RouteHandler {...this.props.initialData}/>
            </div>
        );
    }
});

module.exports = App;