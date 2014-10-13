angular.module("cityOfHeroes")
.controller("searchFriendsControl", function($scope, $http) {

    $("#searchSidekicks").click(function(){
    	//console.log("clicked!");
    	var username = $("#searchSidekicksForm").val();
    	var URL = "http://airnature.corp.yahoo.com/cityofheroes/getuserdataByYID.php?yid="+username;
    	console.log(URL);
        $http.get(URL)
        .success(function (data){
        	$('#results').html('<div class="desc">'+
                              '<div class="thumb">'+
                                '<img class="img-circle" src="'+data[0].PictureURL+'" width="35px" height="35px" align="">'+
                                '</div>'+
                              '<div class="details">'+
                                  '<p><a href="#">'+data[0].First+' '+data[0].Last+'</a><br/>'+
                                     '<muted>'+data[0].Bio+'</muted>'+
                                  '</p>'+
                                '</div>'+
                              '</div>'+
                              '<center><button id="Add" type="button" class="btn btn-success">Add to my Team!</button></center>');
        })
        .error(function (error) {
        	console.log("error");
        	$('#results').html('<div class="desc">No results found'+
                              '</div>');
        });
        // console.log("This was stored into cookies: "+$("#UID").val());
    });
});