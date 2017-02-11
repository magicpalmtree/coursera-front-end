(function () {
    'use strict';

    angular.module('CounterApp', [])
        .controller('CounterController', CounterController);


    CounterController.$inject = ['$scope', '$timeout'];

    function CounterController($scope, $timeout) {


        $scope.counter = 0;
        //第三种方式，使用Angular timeout service.
        $scope.upCounter = function () {
            $timeout(function () {
                $scope.counter++;
                console.log("Counter incremented!");
            }, 1000);
        };

        //第二种方式
        // $scope.upCounter = function () {
        //     setTimeout(function () {
        //         $scope.$apply(function () {
        //             $scope.counter++;
        //             console.log("Counter incremented!");
        //         });
        //     }, 1000);
        // };

        //第一种方式
        // $scope.upCounter = function () {
        //     setTimeout(function () {
        //         $scope.counter++;
        //         console.log("Counter incremented!");
        //         $scope.$digest();
        //     }, 1000);
        // };




    }



})();   