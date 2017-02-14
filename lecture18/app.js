(function () {
    'use strict';

    angular.module('app', [])
        .controller('FilterController', ['$scope',function($scope){
            $scope.shoppingList=["orange","apple","pear","cake"];
        }]);


})();   