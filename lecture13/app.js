(function () {
    'use strict';

    angular.module('MsgApp', [])
        .controller('Msgcontroller', Msgcontroller)
        .filter("loves", LovesFilter)
        .filter("truth", TruthFilter);


    Msgcontroller.$inject = ['$scope', 'lovesFilter'];

    function Msgcontroller($scope, lovesFilter) {
        $scope.stateOfBeing = "hungry";
        $scope.sayMessage = function () {
            var msg = "Lee likes to eat healthy snacks at night!";
            return msg;
        };

        $scope.sayLove = function () {
            var msg = "Lee likes to eat healthy snacks at night!";
            msg = lovesFilter(msg);
            return msg;
        };


        $scope.feedYaakov = function () {
            $scope.stateOfBeing = "fed";
        }
    };

    function LovesFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        }
    };
    function TruthFilter() {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }

})();   