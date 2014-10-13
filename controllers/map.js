angular.module("cityOfHeroes")
.controller("mapController", function($scope, $http, oppData) {
        $scope.setDefaultTop();

                                        // The following example creates complex markers to indicate beaches near
                                        // Sydney, NSW, Australia. Note that the anchor is set to
                                        // (0,32) to correspond to the base of the flagpole.
            
            // The following example creates complex markers to indicate beaches near
            // Sydney, NSW, Australia. Note that the anchor is set to
            // (0,32) to correspond to the base of the flagpole.
            var map;
            var geocoder;

            
    var lal = new google.maps.LatLng(37.417483, -122.025197);
    $scope.mapOptions = {
        center: lal,
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var arr = ["Hillsboro, Building 1, Training Room 1 5250 Northeast Elam Young Parkway, Hillsboro, OR 97124, USA", "LaVista, NE 10917 Harry Watanabe Parkway, La Vista, NE 68128, USA (map) True Grit Conference", "Sunnyvale, CA, USA", "Santa Monica Office 2401 Broadway, New York, NY 10024, USA (map)", "Seabright Beach, Santa Cruz 1305 East Cliff Drive, Santa Cruz, CA 95062, USA", "Ravenswood Education Foundation Menlo Park, CA, USA", "MAITRI Santa Clara, CA, USA", "Peninsula TV San Carlos, CA, USA",];
    var idArray = [];
    var locArray = [];
             $.ajax({
             url: "http://airnature.corp.yahoo.com/cityofheroes/getAllOpps.php",
             success: function (data) {
             for(var i = 0; i < 20;i++){
             locArray.push(data[i].Location);
             console.log(data[i].OID);
             idArray[i] = data[i];
             codeAddress(locArray[i], i);
             }
        }
    });

    // for(var i in locArray){
    //     codeAddress(arr[i]);
    // }        
                
    //Markers should be added after map is loaded
    $scope.onMapIdle = function() {
        if ($scope.myMarkers === undefined){
            var marker = new google.maps.Marker({
                map: $scope.myMap,
                position: lal
            });
            $scope.myMarkers = [marker, ];
        }
    };
    function codeAddress(addressStr, id) {
        var address = addressStr;
        geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': address}, function(results, status) {
         if (status == google.maps.GeocoderStatus.OK) {


         var marker = new google.maps.Marker({
                                             map: $scope.myMap,
                                             position: results[0].geometry.location
            });
          google.maps.event.addListener(marker, 'click', function() {
                $scope.myMap.setZoom(10);
                $scope.myMap.setCenter(marker.getPosition());
                console.log(id);
                oppData.setOppData(idArray[id]);
                $(location).attr('href',"#/opp/details");

          });
         } else {
             console.log("Geocode was not successful for the following reason: " + status);
         }
         });
    }

    

    $scope.markerClicked = function(m) {
        window.alert("clicked");
    };

            // $scope.initialized = function() {
            //       console.log("ini map")

            //         var URL = "http://airnature.corp.yahoo.com/cityofheroes/getAllOpps.php"
                    
            //         geocoder = new google.maps.Geocoder();
            //         var latlng = new google.maps.LatLng(37.417483, -122.025197);
                    
            //         var mapOptions = {
            //         zoom: 10,
            //         center: latlng
            //         }
            //         map = new google.maps.Map(document.getElementById('map_campus'), mapOptions);
                    
            //         //get current location
            //         if(navigator.geolocation) {
            //         navigator.geolocation.getCurrentPosition(function(position) {
            //          var pos = new google.maps.LatLng(position.coords.latitude,
            //                                           position.coords.longitude);
                     
            //          var infowindow = new google.maps.InfoWindow({
            //          map: map,
            //          position: pos,
            //          content: 'Your Location!'
            //          });
                     
            //          map.setCenter(pos);
            //          }, function() {
            //          handleNoGeolocation(true);
            //          });
            //         } else {
            //         // Browser doesn't support Geolocation
            //         handleNoGeolocation(false);
            //         }
            //         //map.setCenter(37.3711, 122.0375);
                    
                    
            //         /*$.getJSON( "util/locations.json", function( data ) {
            //          var items = [];
            //          $.each( data, function( key, val ) {
            //          items.push(key);
            //          console.log(data);
            //          });
            //          });*/
            //         /*var locArray = [];
            //          $.ajax({
            //          url: "http://airnature.corp.yahoo.com/cityofheroes/getAllOpps.php",
            //          success: function (data) {
            //          for(var i = 0; i < 10;i++){
            //          locArray.push(data[i].Location);
            //          console.log(locArray[i]);
            //          codeAddress(locArray[i]);
            //          }
            //          }
            //          });*/
                    
                    
            //         var arr = ["Hillsboro, Building 1, Training Room 1 5250 Northeast Elam Young Parkway, Hillsboro, OR 97124, USA", "LaVista, NE 10917 Harry Watanabe Parkway, La Vista, NE 68128, USA (map) True Grit Conference", "Sunnyvale, CA, USA", "Santa Monica Office 2401 Broadway, New York, NY 10024, USA (map)", "Seabright Beach, Santa Cruz 1305 East Cliff Drive, Santa Cruz, CA 95062, USA", "Ravenswood Education Foundation Menlo Park, CA, USA", "MAITRI Santa Clara, CA, USA", "Peninsula TV San Carlos, CA, USA",];
            //         for(var i in arr){
            //             codeAddress(arr[i]);
            //         }
                
            // }
                
            // function codeAddress(addressStr) {
            //     var address = addressStr;
            //     geocoder.geocode( { 'address': address}, function(results, status) {
            //                      if (status == google.maps.GeocoderStatus.OK) {
            //                      //map.setCenter(results[0].geometry.location);
            //                      var marker = new google.maps.Marker({
            //                                                          map: map,
            //                                                          position: results[0].geometry.location
            //                                                          });
            //                      } else {
            //                      alert("Geocode was not successful for the following reason: " + status);
            //                      }
            //                      });
            //     }
                
                
            //     google.maps.event.addDomListener(window, "resize", function() {
            //                                      var center = map.getCenter();
            //                                      google.maps.event.trigger(map, "resize");
            //                                      map.setCenter(center);
            // });
                
                
            // function handleNoGeolocation(errorFlag) {
            //     if (errorFlag) {
            //     var content = 'Error: The Geolocation service failed.';
            //     } else {
            //     var content = 'Error: Your browser doesn\'t support geolocation.';
            //     }
                
            //     var options = {
            //     map: map,
            //     position: new google.maps.LatLng(60, 105),
            //     content: content
            //     };
                
            //     var infowindow = new google.maps.InfoWindow(options);
            //     map.setCenter(options.position);
            // }
            
            // initialize();
            // google.maps.event.addDomListener(window, 'load', initialize);
            
});
