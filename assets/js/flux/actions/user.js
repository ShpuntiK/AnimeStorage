var Fluxxor = require('fluxxor');
var RouterContainer = require('../../router/container');
var constants = require('../constants');
var api = require('../api/user');

function callAPI(method, data) {
    api[method](data)
        .then(res => {
            var router = RouterContainer.get();

            this.dispatch(constants.LOGIN_SIGNUP_SUCCESS, res.jsonData);

            router.replaceWith(router.getCurrentQuery().nextPath || '/');
        })
        .catch(err => {
            this.dispatch(constants.SHOW_NOTIFICATION, {
                type: constants.NOTIFICATION_TYPES.ERROR,
                text: err.jsonData ? err.jsonData.error : 'Server error'
            });
        });
}

var actions = {
    signUp(data) {
        callAPI.call(this, 'signUp', data);
    },
    login(data) {
        callAPI.call(this, 'login', data);
    }
};

module.exports = actions;