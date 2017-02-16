(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);



    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListService) {
        var ctrl = this;


        ctrl.items = ShoppingListService.getToBuyItems();



        ctrl.boughtItem = function (itemIndex) {
            try {
                ShoppingListService.boughtItem(itemIndex, ctrl.items[itemIndex].name, ctrl.items[itemIndex].quantity);
            } catch (error) {
                console.log(error.message);
            }

        }

    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListService) {
        var ctrl = this;
        ctrl.items = ShoppingListService.getBoughtItems();

    }




    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [
            { quantity: 10, name: "cookies" },
            { quantity: 2, name: "apples" },
            { quantity: 4, name: "oranges" },
            { quantity: 10, name: "bananas" },
            { quantity: 2, name: "coffee" },
        ];

        var boughtItems = [];

        service.boughtItem = function (itemIndex, itemName, itemQuantity) {
            service.addItem(boughtItems, itemName, itemQuantity);

            service.removeItem(toBuyItems, itemIndex);
        }
        service.addItem = function (items, itemName, itemQuantity) {
            var item = {
                name: itemName,
                quantity: itemQuantity
            };
            items.push(item);

        };
        service.removeItem = function (items, itemIndex) {
            items.splice(itemIndex, 1);
        }

        service.getToBuyItems = function () {
            return toBuyItems;
        }
        service.getBoughtItems = function () {
            return boughtItems;
        }
    }


})();   