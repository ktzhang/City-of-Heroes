angular.module("login", ['ngCookies'])
.controller("loginControl", function($scope, $cookieStore, $cookies) {
    $("#formstuff").css("background", "rgba(54, 25, 25, .8)");

    $("#submit").click(function(){
    	var value = $("#UID").val();
    	$cookies.userID = value;
        $cookieStore.put("thisYID", value); //Change to UID from login modal
        // console.log("This was stored into cookies: "+$("#UID").val());
    });

});