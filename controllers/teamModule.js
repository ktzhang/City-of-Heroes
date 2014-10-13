angular.module("cityOfHeroes")
.controller("teamModuleController", function($scope, $http, $routeParams, $route) {
	$scope.topbar.leftLink = "#/myteams"; //TODO: change to map
    

    $scope.topbar.rightText = "Accept";
    $scope.topbar.leftText = "Back";
    $scope.topbar.selection = "navigate";

    $scope.team = {};
    $scope.team.id = $routeParams.id;
    console.log($route.current.tab);
    if($route.current.tab == "selectTeam"){
      $scope.topbar.rightLink = "#/opp/shifts" ;
      $scope.url = "#/opp/shifts"
    } else {
      $scope.topbar.rightLink = "#/selectTeam";
      $scope.url = "#/opp/team" + $scope.team.id;

    }     
    


    

    var dataUrl = "http://airnature.corp.yahoo.com/cityofheroes/getuserdataByTeam.php?tid="+$routeParams.id;
    // console.log("myteams" +$routeParams.id);

    $http.get(dataUrl)
    .success(function (data) {
      $scope.team.members = data;
    })
    .error(function (error) {
      console.log("fail");
      $scope.team.error = error;
    });
});