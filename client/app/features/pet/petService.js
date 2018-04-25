/*
 * Copyright (c) 2018 Samsung Electronics Co., Ltd. , (c) Center of Informatics
 * Federal University of Pernambuco.
 * All rights reserved.
 *
 * This software is a confidential and proprietary information of Samsung
 * Electronics, Inc. ("Confidential Information").  You shall not disclose such
 * Confidential Information and shall use it only in accordance with the terms
 * of the license agreement you entered into with Samsung Electronics.
 */
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