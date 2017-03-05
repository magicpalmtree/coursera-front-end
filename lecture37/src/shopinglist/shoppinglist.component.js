(function(){

    'use strict';
    angular.module('ShoppingList')
    .component('ShoppingList',{
        templateUrl:"src/shoppinglist/templates/shoppinglist.template.html",
        bindings:{
            items:"<"
        }
    });
})();