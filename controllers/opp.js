angular.module("cityOfHeroes")
.controller("oppController", function($scope, $routeParams, $route, oppData) {
	$scope.topbar.leftText = "Back";
    $scope.topbar.selection = "navigate";

    $(".desc-select").click(function(){
                $(".desc-selected").removeClass("desc-selected").addClass("desc-select");
                //$(".desc-select").css('background-color', '#FFFFFF')
                $(this).removeClass("desc-select").addClass("desc-selected");
            })

    var currentTab = $route.current.tab;
    switch(currentTab) {
    	case 'details' :
    		$scope.topbar.leftLink = "#/mapSearch"; //TODO: change to map
    		$scope.topbar.rightLink = "#/opp/shifts";
			$scope.topbar.rightText = "Accept";
    	break;
    	case 'shifts' :
    	   	$scope.topbar.leftLink = "#/opp/details";
    	    $scope.topbar.rightLink = "#/opp/selectTeam";
			$scope.topbar.rightText = "Next";
    	break;
    	case 'selectTeam' :
    		$scope.topbar.leftLink = "#/opp/shifts";
    	   	$scope.topbar.rightLink = "#/opp/invitation";
			$scope.topbar.rightText = "Next";
    	break;
    	case 'invitation' :
    		$scope.topbar.leftLink = "#/opp/selectTeam";
    	    $scope.topbar.rightLink = "#/opp/confirmation";
			$scope.topbar.rightText = "Next";
    	break;
    	case 'confirmation' :
    		$scope.topbar.leftLink = "#/opp/invitation";
    	   	$scope.topbar.rightLink = "#/main";
			$scope.topbar.rightText = "Done";
    	break;
    }
	$scope.oppData = oppData.getOppData();
	console.log(oppData.getOppData());
});