angular.module('app',['ngRoute', 'ngAnimate', 'flow'])
	.config(['flowFactoryProvider','$routeProvider', '$httpProvider', 
		function(flowFactoryProvider, $routeProvider, $httpProvider){
			$routeProvider
				.when('/', {
					templateUrl:'/partials/index'
				})
				.when('/date', {
					templateUrl:'/partials/date'
				})
				.when('/venue', {
					templateUrl:'/partials/venue'
				})
				.when('/contact', {
					templateUrl:'/partials/contact'
				})
				.when('/pictures', {
					templateUrl:'/partials/pictures',
					controller:'PictureCtrl'
				})
				.when('/vendors', {
					templateUrl:'/partials/vendors'
				})	
				.otherwise({
					redirectTo:'/'
				});
		}
	])
	.controller('PictureCtrl', ['$scope','$http', function($scope, $http){
		console.log('Pictures Controller');
		$scope.message='Hello!';
	}
]);
