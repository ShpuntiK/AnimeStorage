// dashboard - все твои аниме, там же будет search типа найди новое и добавь его к своим аниме
var getUrl = require('./get-url');

function sendRequest(url, data) {
    return fetch(getUrl('/api/' + url), {
        method: 'get',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        //body: JSON.stringify(data)
    }).then(res => {
        //TODO: why it needed?
        return new Promise((resolve) => {
            res.json().then(json => {
                res.jsonData = json;
                resolve(res);
            });
        });
    }).then(res => {
        return res.status >= 200 && res.status < 300 ? Promise.resolve(res) : Promise.reject(res);
    });
}

module.exports = {
    getMyAnimes() {
        return sendRequest('me/animes');
    }
    //search(data) {
    //    return sendRequest('animes', data);
    //}
};