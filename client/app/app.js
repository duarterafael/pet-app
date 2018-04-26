(function () {

	"use strict"

	angular.module('petShopApp', ['ngRoute', 'ngResource']).config(['$routeProvider', config]);

	function config($routeProvider) {

		$routeProvider.when('/', {
			templateUrl: './features/pet/pet.html',
			controller: 'PetController',
			controllerAs: 'petController'
		}).when('/order/:id', {
			templateUrl: './features/order/order.html',
			controller: 'OrderController',
			controllerAs: 'orderController'
		}).
		otherwise({
			redirectTo: '/'
		});
	}

})();