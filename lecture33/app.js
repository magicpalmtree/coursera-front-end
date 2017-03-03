(function () {
    'use strict';

    angular.module('ShoppingListComponentApp', [])
        .controller('ShoppingListController', ShoppingListController)
        
        .service("ShoppingListFactory", ShoppingListFactory)
        .component('shoppingList', {
            templateUrl: "shoppingList.html",
            controller:ShoppingListComponentController,
            binding:{
                items: "<",
                myTitle: "@title",
                onRemove:"&"
            }
        });


    function ShoppingListComponentController() {
        var $ctrl = this;
        $ctrl.cookiesInList = function () {
            for (var i = 0; i < $ctrl.items.length; i++) {
                var name = $ctrl.items[i].name;

                if (name.toLowerCase().indexOf("cookie") !== -1) {
                    return true;
                }
            }
            return false;
        };
    }
    function shoppingList() {
        return {
            restrict: "AE",
            templateUrl: "shoppingList.html",
            scope: {
                items: "=",
                title: "@"
            },
            controller: directiveController,
            controllerAs: "list",
            bindToController: true,
            link: ShoppingListDirectiveLink
        };
    }
    function ShoppingListDirectiveLink(scope, element, attrs, controller) {
        console.log("Link scope is:", scope);
        console.log("Controller instance is:", controller);
        console.log("Element is:", element);
        scope.$watch('list.cookiesInList()', function (newValue, oldValue) {
            console.log("Old value", oldValue);
            console.log("New value", newValue);
            if (newValue === true) {
                displayCookieWarning();
            } else {
                removeCookieWarning();
            }
        });

        function displayCookieWarning() {
            //Using Angular jqLite

            // var warningElem = element.find('div');
            // warningElem.css("display", 'block');
            //Using jQuery included before Angular.
            var warningElem=element.find("div.error");
            var warningElem=slideDown(900);
        }
        function removeCookieWarning() {
            // var warningElem = element.find('div');
            // warningElem.css("display", 'none');

            var warningElem=element.find("div.error");
            var warningElem=slideUp(900);
        }

    }

    ShoppingListController1.$inject = ['ShoppingListFactory'];

    function ShoppingListController1(ShoppingListFactory) {
        var list1 = this;
        var shoppingList = ShoppingListFactory();
        list1.items = shoppingList.getItems();
        var origTitle = "Shopping List #1";
        list1.title = origTitle + "(" + list1.items.length + ") items";





        list1.itemName = "";
        list1.itemQuantity = "";
        list1.addItem = function () {

            shoppingList.addItem(list1.itemName, list1.itemQuantity);
            list1.title = origTitle + "(" + list1.items.length + ") items";

        };

        list1.removeItem = function (itemIndex) {
            shoppingList.removeItem(itemIndex);
            list1.title = origTitle + "(" + list1.items.length + ") items";
        };
    }

   
    function ShoppingListFactory() {
        var factory = function (maxItems) {
            return new ShoppingListService(maxItems);
        };
        return factory;
    }
    function ShoppingListService(maxItems) {
        var service = this;

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
        };
        service.getItems = function () {
            return items;
        };
    }


})();   