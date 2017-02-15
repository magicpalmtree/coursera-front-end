(function () {
    'use strict';

    angular.module('app', [])
        .controller('ShoppingListController1', ShoppingListController1)
        .controller('ShoppingListController2', ShoppingListController2)
        .service("ShoppingListService", ShoppingListServiceProvider);


    ShoppingListController1.$inject = ['ShoppingListService'];

    function ShoppingListController1(ShoppingListService) {
        var list1 = this;

        var shoppingList = ShoppingListService();
        list1.items = shoppingList.getItems();

        list1.itemName = "";
        list1.itemQuantity = "";
        list1.addItem = function () {
            shoppingList.addItem(list1.itemName, list1.itemQuantity);
        }

        list1.removeItem = function (itemIndex) {
            shoppingList.removeItem(itemIndex);
        }
    }



    function ShoppingListServiceProvider() {
        var provider = this;

        provider.defaults={
            maxItems:10
        };
        provider.$get=function(){
            var shoppingList=new ShoppingListService(provider.defaults.maxItems);
            return shoppingList;
        };
    }
    function ShoppingListService(maxItems){
        var service=this;
        var items = [];
        service.addItem = function (itemName, itemQuantity) {
            if ((maxItems === undefined) || (
                maxItems !== undefined) &&
                (items.length < maxItems)) {
                var item = {
                    name: itemName,
                    quantity: itemQuantity
                };
                items.push(item);
            } else {
                throw new Error("Max items (" + maxItems + ") reached.");
            }

        };
        service.removeItem = function (itemIndex) {
            items.splice(itemIndex, 1);
        }
        service.getItems = function () {
            return items;
        }
    }


})();   