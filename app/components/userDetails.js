(function () {
    var userDetails = function () {
        return {
            restrict: "A",
            templateUrl: "app/components/userdetails.tpl.html",
            scope: {

                //two way data binding.
                username: "=",
                //one way data binding
                email: "@",
                dob: "@"
            }
        };
    };

    angular.module('twitterApp')
        .directive('userDetails', [userDetails])
})();
