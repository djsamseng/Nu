var controllers = angular.module('nuControllers');

controllers.controller('mainCtrl', 
    ['$scope',
        function ($scope) {
            $scope.logged_in = false;
        }
    ]
);
