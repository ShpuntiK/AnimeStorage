import React, {PropTypes} from 'react';
var {RouteHandler} = require('react-router');
var flux = require('./flux');
var stores = require('./flux/stores');
var Header = require('./components/common/header');
var Notifications = require('./components/common/notifications');

var App = React.createClass({
    propTypes: {
        storesInitialData: PropTypes.object
    },
    render() {
        var {storesInitialData} = this.props;

        Object.keys(storesInitialData).forEach(storeName => stores[storeName].initData(storesInitialData[storeName]));

        return (
            <div>
                <Notifications flux={flux}/>
                <Header flux={flux}/>
                <RouteHandler flux={flux}/>
            </div>
        );
    }
});

module.exports = App;