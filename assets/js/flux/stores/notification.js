var Fluxxor = require('fluxxor');
var objectAssign = require('react/lib/Object.assign');
var constants = require('../constants');
var mixinStore = require('./mixin');

const HIDE_TIMEOUT = 5 * 1000; // 5 sec

var Store = Fluxxor.createStore(objectAssign({}, mixinStore, {
    initialize() {
        this.items = {};
        this.notificationId = 0;

        this.bindActions(
            constants.SHOW_NOTIFICATION, this.onShow,
            constants.HIDE_NOTIFICATION, this.onHide
        );
    },
    onShow(data) {
        var nextId = this.notificationId++;
        this.items[nextId] = {
            id: nextId,
            ...data
        };

        this.emitChange();

        setTimeout(() => {
            this.onHide(nextId);
        }, HIDE_TIMEOUT)
    },
    onHide(id) {
        delete this.items[id];

        this.emitChange();
    }
}));

module.exports = new Store();