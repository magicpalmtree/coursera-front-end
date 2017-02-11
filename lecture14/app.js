(function () {
    'use strict';

    angular.module('CounterApp', [])
        .controller('CounterController', CounterController);


    CounterController.$inject = ['$scope'];

    function CounterController($scope){

        $scope.onceCounter=0;
        $scope.counter=0;

        $scope.name="Lee";

        $scope.showNumberOfWatchers=function(){
            console.log("# of watchers:"+$scope.$$watchersCount);
        };

        $scope.countOnce=function(){
            $scope.onceCounter=1;

        };

        $scope.upCounter=function(){
            $scope.counter++;

        };
        //第四个digest $watch方法本身也会执行一次digest
        $scope.$watch(function(){
            console.log("Digest Loop Fired!");
        });

        // $scope.$watch('onceCounter',function(newValue,oldValue){
        //     console.log('once counter old value:'+oldValue);
        //     console.log('once counter new value:'+newValue);
        // });

        // $scope.$watch('counter',function(newValue,oldValue){
        //     console.log('counter old value:'+oldValue);
        //     console.log('counter new value:'+newValue);
        // });



    }

    

})();   