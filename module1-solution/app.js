(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', function ($scope) {
            $scope.message = "";



            $scope.luncCheck = function () {
                var totalLunchMenu = calculatLunchMenu($scope.lunchMenu);
                if (totalLunchMenu < 4) {
                    $scope.message = "Enjoy!";
                } else {
                    $scope.message = "Too much!";
                }
            }

            function calculatLunchMenu(string) {
                var result = string.split(",");
                var total = 0;
                for (var i = 0; i < result.length; i++) {
                    if (result[i]!= "") {
                        total += 1;
                    }
                }
                return total;
            }

        });

})();