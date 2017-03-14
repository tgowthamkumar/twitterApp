function tweetCtrl($scope, tweetSvc, $state) {
    console.log($state.params);
    tweetSvc.getTweets()
        .then(function (response) {
            $scope.tweets = response.tweets;
            angular.forEach($scope.tweets, function (item) {
                item.commentCount = 2;
            });
        }).catch(function (response) {
            $scope.showError = response;
        });

    $scope.showMoreComments = function (item) {
        item.commentCount = item.commentCount + 2;
    }
}

angular.module('twitterApp.tweet')
    .controller('tweetCtrl', ['$scope', 'tweetSvc', '$state', tweetCtrl])
