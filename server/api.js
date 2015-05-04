var Q = require('q');
var request = require('request');

var BASE_URL = 'https://hummingbird.me/api/v1/';

function search(query) {
    var deferred = Q.defer();

    request.get({
        url: BASE_URL + 'search/anime?query=' + query,
        json: true
    }, function (err, res, body) {
        if (err) {
            console.log(err);
            deferred.reject(err);
        }

        return res.statusCode === 200 ? deferred.resolve(body) : deferred.reject('Failed with code' + res.statusCode);
    });

    return deferred.promise;
}

module.exports = {
    search: search
};