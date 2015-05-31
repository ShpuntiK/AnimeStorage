module.exports = function (url) {
    return process ? process.env.HOST + url : url;
};