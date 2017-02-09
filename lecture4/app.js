(function(){
  angular.module('myFirstApp',[])
  .controller('MyFirstControoler',function($scope){
    $scope.name="Lee Li";
    $scope.sayHello=function(){
      return "Hello Coursera!";
    }
  });
})();
