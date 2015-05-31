var Fluxxor = require('fluxxor');
var constants = require('../constants');

//TODO: use object payload!!!

module.exports = {
    loadDashboard() {
        setTimeout(() => {
            this.dispatch(constants.LOAD_MY_ANIMES_SUCCESS, []) // !!!
        }, 1000);
    }
};