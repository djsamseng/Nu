var app = angular.module('nuApp', [
    'ngRoute',
    'nuControllers'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'pages/index/index.html',
                controller: 'indexCtrl'
            }).
            otherwise({
                redirectTo:''
            });
    }
]);

var controllers = angular.module('nuControllers', []);
