var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'angularMoment']);

myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/views/templates/landingPage.html',
		controller: 'landingPageCtrl'
	})
})