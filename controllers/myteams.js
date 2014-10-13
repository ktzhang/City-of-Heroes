angular.module("cityOfHeroes")
.controller("myteamController", function($scope, $http, $route, userData) {
    $scope.grabUserDatafromCookie();
    if($scope.person == null) {
      $scope.data.person = userData.getUserData();
    }
 




    var dataUrl = "http://airnature.corp.yahoo.com/cityofheroes/getTeamDataByEID.php?eid="+$scope.data.person.EID;
    // $scope.teams = {};
    console.log(dataUrl);
    $http.get(dataUrl)
    .success(function (data) {
      console.log(data);
      $scope.data.teams = data;
    })

    .error(function (error) {
      console.log("fail");
      $scope.data.error = error;
    });

    //Handling different views
    if($scope.$last){
      if($route.current.activetab != 'opportunities') {
        $scope.setDefaultTop();
      } else {
        $("a.links").removeAttr("href");
      }
    }

});