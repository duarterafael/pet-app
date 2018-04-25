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

	"use strict"

	angular.module('petShopApp').controller('OrderController', OrderController);
	OrderController.$inject = ['orderService', '$routeParams'];

	function OrderController(orderService, $routeParams) {

		const self = this;

		self.formData = {};
		self.formData.petId = $routeParams.id;
		self.formData.shipDate ='2018-04-25 00:36:56.042 +00:00';

		getOrdersByPet(self.formData.petId);

		self.createOrder = function () {
			orderService.createOrder().execute(self.formData).$promise.then(response => {
				self.orders.push(response);
				self.formData = {}
			}, error => {
				//TODO error handler
				console.log(error);
			});			
		};

		self.deleteOrder = function (id) {
			orderService.deleteOrder().execute({id: id}).$promise.then(data => {
				self.orders = self.orders.filter(function(el) {
					return el.id !== id;
				});
			}, error => {
				//TODO error handler
				console.log(error);
			});
		};

		function getOrdersByPet(petId) {
			orderService.getOrdersByPet().execute({petId: petId}).$promise.then(data => {
				self.orders = data;
			}, error => {
				//TODO error handler
				console.log(error);
			});
		}
	}
})();