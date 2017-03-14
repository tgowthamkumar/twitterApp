function mainCtrl($scope, tabSvc) {
    $scope.navBarUrl = 'app/common/navBar.tpl.html';
    $scope.navBarRouterUrl = 'app/common/navbarrouter.tpl.html';
    $scope.loadContent = function (tab) {
        $scope.contentUrl = tab.templateUrl;
    };

    function init() {
        tabSvc.getTabs()
            .then(function (response) {
                $scope.tabs = response.tabs;
            })
            .catch(function (errorResponse) {
                $scope.error = "Error Occurred";
            });
    }
    init();

}
angular.module('twitterApp')
    .controller('mainCtrl', ['$scope', 'tabSvc', mainCtrl]);
