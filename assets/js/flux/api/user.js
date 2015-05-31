function sendRequest(url, data) {
    return fetch('/api/' + url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => {
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
    signUp(data) {
        return sendRequest('signup', data);
    },
    login(data) {
        return sendRequest('login', data);
    }
};