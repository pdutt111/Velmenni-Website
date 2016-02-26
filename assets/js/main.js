var app = angular.module('velmenniApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
	// $urlRouterProvider.otherwise("index");
	$stateProvider.state("index",{
		url: "/",
		templateUrl: "partials/video.html"
	}).state("products",{
		url: "/products",
		templateUrl: "partials/products.html"
	});
	$locationProvider.html5Mode(true);
});


