var app = angular.module('velmenniApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider.state("/",{
		url: "/",
		templateUrl: "partials/video.html"
	});
});


