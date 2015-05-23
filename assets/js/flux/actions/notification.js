var Fluxxor = require('fluxxor');
var constants = require('../constants');

var actions = {
    hide(id) {
        this.dispatch(constants.HIDE_NOTIFICATION, id);
    }
};

module.exports = actions;