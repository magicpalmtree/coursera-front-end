(function () {
    'use strict';
    angular.module("myApp", [])
        .controller('MainController', ['$scope', function ($scope) {
            $scope.username = "leeli";
            $scope.age = 28;

            $scope.items = [];
            $scope.addItem = function () {
                if ($scope.newItem !== '') {
                    $scope.items.push($scope.newItem);
                    $scope.newItem="";
                }

            }

        }]);
})();