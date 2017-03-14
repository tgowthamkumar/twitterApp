function usersCtrl($scope, userSvc) {
    userSvc.getUsersByPromise()
        .then(function (response) {
            $scope.users = response.profiles;
        }).catch(function (response) {

        });

    //Recommeneded
    /*userSvc.getUsers()
        .then(function (response) {
            if (response.statusText == "OK") {
                console.log(response);
                $scope.users = response.data.profiles;
            } else {

            }
        }).catch(function (errorResponse) {
            $scope.error = "Error Occurred";
        });
*/
    /*$http.get('app/data/profile.json')
        .success(function (response) {
            $scope.users = response.profiles;
        }).error(function (errorResponse) {
            console.log(errorResponse);
        });*/
    $scope.countries = [
        {
            code: "IN",
            name: "India",
            phonecode: "+91"
        },
        {
            code: "US",
            name: "United State",
            phonecode: "+1"
        },
        {
            code: "CA",
            name: "Canada",
            phonecode: "+2"
                       }
    ];
    $scope.sortBy = function (type) {
        if (type == 'username') {
            $scope.sortFilter = $scope.sortFilter == 'username' ? '-username' : 'username'
        }
        if (type == 'email') {
            $scope.sortFilter = $scope.sortFilter == 'email' ? '-email' : 'email'
        }
    };
    $scope.loadDetails = function (item) {
        $scope.details = item;
    }
}

angular.module('twitterApp')
    .controller('usersCtrl', ["$scope", "userSvc", usersCtrl]);
