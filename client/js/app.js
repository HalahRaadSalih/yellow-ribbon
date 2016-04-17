var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'angularMoment']);

myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/views/templates/landing.html',
		controller: 'LandingController'
	})
	.when('/signin', {
		templateUrl: '/views/templates/signin.html',
		controller: 'SigninController'
	})
	.when('/signup', {
		templateUrl: '/views/templates/signup.html',
		controller: 'SignupController'
	})
	.when('/home', {
		templateUrl: '/views/templates/home.html',
		controller: 'HomeController'
	})
	.when('/form', {
		templateUrl: '/views/templates/intro-questions.html',
		controller: 'FormController'
	})
	.otherwise({
      redirectTo: "/"
    });
})
