(function () {

    'use strict';

    var API_URL = "/orders/";
    var API_BY_ID_URL = "/orders/:id";

    angular.module('petShopApp').factory('orderService', orderService);
    orderService.$inject = ['$resource'];

    function orderService($resource) {
        return {
            getOrders: function () {
                return $resource(API_URL, {}, {
                    execute: {
                        method: 'GET', 
                        isArray: true
                    }
                });
            },
            getOrdersByPet: function () {
                return $resource(API_BY_ID_URL, {petId: '@petId'}, {
                    execute: {
                        method: 'GET', 
                        isArray: true
                    }
                });
            },
            createOrder: function () {
                return $resource(API_URL, {}, {
                    execute: {
                        method: 'POST'
                    }
                });
            },
            deleteOrder: function () {
                return $resource(API_BY_ID_URL, {id: '@id'}, {
                    execute: {
                        method: 'DELETE'
                    }
                });
            }           
        };
    }
})();