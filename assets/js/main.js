var app = angular.module('velmenniApp',[]);

app.controller('bodyVideo', ['$scope', function($scope){
	$scope.state = false;
	$scope.testfunction = function(){
		$scope.state = true;
	}
}]);

app.controller('navbarVideo', ['$scope','videoScrollState', function($scope, videoScrollState){
	$scope.state = videoScrollState.state;
}]);



