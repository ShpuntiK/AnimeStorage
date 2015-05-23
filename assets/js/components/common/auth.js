import React, {PropTypes} from 'react';
var userStore = require('../../flux/stores/user');

module.exports = function (Component) {
    return React.createClass({
        statics: {
            willTransitionTo(transition) {
                if (!userStore.user) {
                    transition.redirect('/login', {}, {
                        nextPath: transition.path
                    });
                }
            }
        },
        render() {
            return <Component {...this.props}/>;
        }
    });
};