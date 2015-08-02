var controllers = angular.module('nuControllers');

controllers.controller('indexCtrl', 
    ['$scope',
        function ($scope) {
            $scope.test = 'Initializing the Nu';
        }
    ]
);
