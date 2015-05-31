var Fluxxor = require('fluxxor');
var constants = require('../constants');

module.exports = {
    hide(id) {
        this.dispatch(constants.HIDE_NOTIFICATION, id);
    }
};