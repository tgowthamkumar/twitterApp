function userSvc($http, $q) {
    this.getUsers = function () {
        return $http.get('app/data/profile.json');
    };

    var users;
    this.getUsersByPromise = function () {
        //creating the deferred Object
        var dfd = $q.defer();
        if (users) {
            dfd.resolve(users);
        } else {
            $http.get('app/data/profile.json')
                .success(function (response) {
                    users = response;
                    dfd.resolve(users);
                })
                .error(function (response) {
                    dfd.reject(response)
                });
        }
        return dfd.promise;
    };
}

angular.module('twitterApp')
    .service('userSvc', ['$http', '$q',
        userSvc])
    //step 1 injec the $q
