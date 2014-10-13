angular.module("cityOfHeroes")
.controller("leaderboardController", function($scope) {
	//Load the products from the cart service
  $scope.setDefaultTop();
 	$scope.leaderboard = {};
 	$scope.leaderboard.doClick =  function(ev) {
    var thisfa = angular.element(ev.srcElement).find("i");
    console.log(ev.srcElement);
    if ( thisfa.hasClass('fa-angle-down') ) {
      thisfa.removeClass('fa-angle-down').addClass('fa-angle-right');
      //$(this).text('Close');
    } else {
      thisfa.removeClass('fa-angle-right').addClass('fa-angle-down');
      //$(this).text('Find Cafe');
    }

};
});