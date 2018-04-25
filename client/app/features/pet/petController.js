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

	angular.module('petShopApp').controller('PetController', PetController);
	PetController.$inject = ['petService'];

	function PetController(petService) {

		const self = this;

		self.formData = {};

		getPets();

		self.createPet = function () {
			petService.createPet().execute(self.formData).$promise.then(response => {
				self.pets.push(response);
				self.formData = {}
			}, error => {
				//TODO error handler
				console.log(error);
			});			
		};

		self.deletePet = function (id) {
			petService.deletePet().execute({id: id}).$promise.then(data => {
				self.pets = self.pets.filter(function(el) {
					return el.id !== id;
				});
			}, error => {
				//TODO error handler
				console.log(error);
			});
		};

		function getPets() {
			petService.getPets().execute().$promise.then(data => {
				self.pets = data;
			}, error => {
				//TODO error handler
				console.log(error);
			});
		}
	}
})();