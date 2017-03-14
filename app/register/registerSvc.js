var registerSvcFn = function ($http, $q) {

    this.registerUser = function () {
        var response = {
            data: ""
        };
        var dfd = $q.defer();
        response.data = "user created";
        dfd.resolve(response);

        return dfd.promise;
    };

};


angular.module('twitterApp.register')
    .service('registerSvc', ['$http', '$q', registerSvcFn])
