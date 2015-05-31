var Fluxxor = require('fluxxor');
var objectAssign = require('react/lib/Object.assign');
var constants = require('../constants');
var mixinStore = require('./mixin');

var Store = Fluxxor.createStore(objectAssign({}, mixinStore, {
    actions: {
        [constants.LOAD_MY_ANIMES_SUCCESS]: 'onLoadSuccess'
    },
    initData(data) {
        this.items = data;
    },
    initialize() {
        this.items = [];
    },
    onLoadSuccess(data) {
        this.items = data;

        this.emitChange();
    }
}));

module.exports = new Store();