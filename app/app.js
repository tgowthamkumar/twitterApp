//creating the application module

angular.module('twitterApp', [
    'twitterApp.register',
    'twitterApp.login',
'twitterApp.tweet',
'ui.router']);

angular.module('twitterApp')
    .config(['$stateProvider', '$urlRouterProvider',
         function ($stateProvider, $urlRouterProvider) {
            console.log("test");
            var home = {
                templateUrl: "app/home/home.tpl.html"
            };
            var login = {
                url: "/login",
                templateUrl: "app/login/login.tpl.html"
            };
             
 var tweets = {
         url: "/tweets",                                        templateUrl:"app/tweets/tweet.tpl.html",
         params: { userDetails: ""}
         };
             
            var register = {
                templateUrl: "app/register/register.tpl.html"
            };
            var users = {
                url: "/users",
                controller: "usersCtrl",
                views: {
                    '': {
                        templateUrl: 'app/users/users.tpl.html'
                    },
                    "details@users": {
                        templateUrl: "app/users/users.details.tpl.html"
                    }
                }
            };
            $stateProvider.state('home', home);
            $stateProvider.state('login', login);
            $stateProvider.state('register', register);
            $stateProvider.state('tweets', tweets);
            $stateProvider.state('users', users);
    }]);
