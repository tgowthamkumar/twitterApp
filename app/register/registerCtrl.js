var registerCtrlFn = function ($scope, userSvc, $state) {
    //create objects and work with the objects
    $scope.register = {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        address: {
            streetName: "",
            zipcode: "",
            country: "",
            state: ""
        }
    };

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
    $scope.statesList = [{
            countryCode: "IN",
            stateCode: "TN",
            stateName: "Telangana"
        },
        {
            countryCode: "IN",
            stateCode: "AP",
            stateName: "Andhra Pradesh"
        }];


    $scope.registerUser = function () {
        $scope.register.address.country = $scope.selectedCountry.code;
        $state.go("tweets", {
            userDetails: $scope.register.lastName
        });
    };

    var data = userSvc.getUsers();
    console.log(data);
};
angular.module('twitterApp.register')
    .controller('registerCtrl', ['$scope',
                                 'userSvc',
                                 "$state", registerCtrlFn]);

//best practices involved
//
//array notation.
