import React, {PropTypes} from 'react';
var {RouteHandler} = require('react-router');
var flux = require('./flux');
var Header = require('./components/common/header');
var Notifications = require('./components/common/notifications');

var App = React.createClass({
    render() {
        return (
            <div>
                <Notifications flux={flux}/>
                <Header flux={flux}/>
                <RouteHandler initialData={this.props.initialData} flux={flux}/>
            </div>
        );
    }
});

module.exports = App;