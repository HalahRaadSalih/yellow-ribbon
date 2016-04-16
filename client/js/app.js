var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'angularMoment']);

myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/views/templates/landing.html',
		controller: 'LandingController'
	})
	.when('/signing', {
		templateUrl: '/views/templates/signing.html',
		controller: 'SigningController'
	})
	.when('/form', {
		templateUrl: '/views/templates/intro-questions.html',
		controller: 'FormController'
	})

})
