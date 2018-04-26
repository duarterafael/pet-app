(function () {

    'use strict';

    var API_URL = "/pets/";
    var API_BY_ID_URL = "/pets/:id";

    angular.module('petShopApp').factory('petService', petService);
    petService.$inject = ['$resource'];

    function petService($resource) {
        return {
            getPets: function () {
                return $resource(API_URL, {}, {
                    execute: {
                        method: 'GET', 
                        isArray: true
                    }
                });
            },
            createPet: function () {
                return $resource(API_URL, {}, {
                    execute: {
                        method: 'POST'
                    }
                });
            },
            deletePet: function () {
                return $resource(API_BY_ID_URL, {id: '@id'}, {
                    execute: {
                        method: 'DELETE'
                    }
                });
            }           
        };
    }
})();