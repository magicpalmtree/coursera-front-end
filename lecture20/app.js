(function () {
    'use strict';

    angular.module('app', [])
        .controller('ShoppingListAddController', ShoppingListAddController)
        .controller('ShoppingListShowController', ShoppingListShowController)
        .service("ShoppingListService", ShoppingListService);


    ShoppingListAddController.$inject = ['ShoppingListService'];

    function ShoppingListAddController(ShoppingListService) {
        var itemAdder=this;

        itemAdder.itemName="";
        itemAdder.itemQuantity=0;
        itemAdder.addItem=function(){
            ShoppingListService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
        }
    }

    ShoppingListShowController.$inject = ['ShoppingListService'];

    function ShoppingListShowController(ShoppingListService) {
         var showCtrl=this;
         showCtrl.items=ShoppingListService.getItems();
    }

    function ShoppingListService(){
        var service=this;

        var items=[];
        service.addItem=function(itemName,itemQuantity){
            var item={
                name:itemName,
                quantity:itemQuantity
            };
            items.push(item);
        };
        service.getItems=function(){
            return items;
        }
    }


})();   