(function () {

	"use strict"

	angular.module('petShopApp').controller('PetController', PetController);
	PetController.$inject = ['petService', '$location'];

	function PetController(petService, $location) {

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

		self.goToOrder = function (id) {
			$location.path('/order/' + id);
		};
	}
})();