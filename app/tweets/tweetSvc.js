function tweetSvc($http, $q) {
    this.getTweets = function () {
        var dfd = $q.defer();
        $http.get('app/data/tweet.json')
            .then(function (response) {
                if (response.status == 200 && response.statusText == "OK") {
                    dfd.resolve(response.data);
                }
            }).catch(function (response) {
                dfd.reject("Error occurred.");
            });

        return dfd.promise;
    };
}

angular.module('twitterApp.tweet')
    .service('tweetSvc', ['$http', '$q',
        tweetSvc])
    //step 1 injec the $q
