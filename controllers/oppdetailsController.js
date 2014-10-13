angular.module("cityOfHeroes")
.controller("oppdetailsController", function($scope,  oppData) {
	$scope.data.oppStuff = 	oppData.getOppData();
	console.log($scope.data.oppStuff);

});