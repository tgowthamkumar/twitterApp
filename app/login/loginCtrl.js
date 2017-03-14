function loginCtrl($scope, $http, $state) {
    $scope.login = {
        username: "",
        password: ""
    };

    $scope.loginUser = function () {
        console.log("I am the begging");
        //$http.get 
        //will have call back functions
        // then,cath
        // success,error
        // finally
        $http.get('app/data/logins.json')
            .success(function (response) {
                var isSuccess = false;
                angular.forEach(response.users, function (item) {
                    if (item.username == $scope.login.username && item.password == $scope.login.password) {
                        isSuccess = true;
                    }
                });
                if (isSuccess) {
                    $state.go('tweets', {
                        userDetails: $scope.login.username
                    });
                } else {
                    $scope.showError = true;
                }

            }).error(function (response) {
                console.log(response);
            });
        console.log("I am the end");
    };
}

angular.module("twitterApp.login")
    .controller('loginCtrl', ['$scope', '$http', '$state', loginCtrl]);
