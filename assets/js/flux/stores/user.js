var Fluxxor = require('fluxxor');
var objectAssign = require('react/lib/Object.assign');
var constants = require('../constants');
var mixinStore = require('./mixin');

var Store = Fluxxor.createStore(objectAssign({}, mixinStore, {
    initialize() {
        this.user = null;

        this.bindActions(
            constants.LOGIN_SIGNUP_SUCCESS, this.onLoginSignupSuccess
        );
    },
    onLoginSignupSuccess(data) {
        this.user = data;

        this.emitChange();
    }
}));

module.exports = new Store();