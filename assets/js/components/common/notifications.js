import React, {PropTypes} from 'react';
var {FluxMixin, StoreWatchMixin} = require('fluxxor');

var NotificationItem = React.createClass({
    propTypes: {
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        onHide: PropTypes.func.isRequired
    },
    render() {
        var {type: classType, text} = this.props;

        if (classType === 'ERROR') {
            classType = 'danger';
        }

        return (
            <div className={`alert alert-dismissible alert-${classType}`}>
                <button type="button"
                        className="close"
                        data-dismiss="alert"
                        onClick={this.onClick}>&times;</button>
                <p>{text}</p>
            </div>
        );
    },
    onClick() {
        var {id, onHide} = this.props;
        onHide(id);
    }
});

var NotificationList = React.createClass({
    mixins: [
        FluxMixin(React),
        StoreWatchMixin('notification')
    ],
    propTypes: {
        flux: PropTypes.object.isRequired
    },
    getStateFromFlux() {
        var store = this.getFlux().store('notification');

        return {
            items: store.items
        };
    },
    render() {
        var {items} = this.state;
        var itemElements = Object.keys(items).map((key) => <NotificationItem {...items[key]} key={key} onHide={this.onHide}/>);

        return <div className="notifications">{itemElements}</div>;
    },
    onHide(id) {
        this.getFlux().actions.notification.hide(id);
    }
});

module.exports = NotificationList;