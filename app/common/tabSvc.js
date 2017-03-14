function tabSvc($http, $q) {
    this.getTabs = function () {
        //create the deferred Object.
        var dfd = $q.defer();

        $http.get('app/data/tabs.json')
            .success(function (response) {
                dfd.resolve(response);
            })
            .error(function (errorResponse) {
                dfd.reject(errorResponse);
            });

        return dfd.promise;
    };
}


angular.module('twitterApp')
    .service('tabSvc', ['$http', '$q', tabSvc])
