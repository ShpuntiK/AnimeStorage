module.exports = function (state) {
    var storesInitialData = {};

    var storesInitialDataPromises = state.routes.reduce((promises, route) => {
        let routeInitialData = route.handler.getInitialData;

        if (routeInitialData) {
            routeInitialData = routeInitialData(route.params);  // for getting id from url and etc

            Object.keys(routeInitialData).forEach(storeName => promises[storeName] = routeInitialData[storeName]);
        }

        return promises;
    }, {});

    return Promise.all(
        Object.keys(storesInitialDataPromises)
        .map(storeName => storesInitialDataPromises[storeName].then(storeInitialData => storesInitialData[storeName] = storeInitialData.jsonData))
    ).then(result => storesInitialData);
};