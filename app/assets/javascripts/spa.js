
//========== SET UP PAGE ==========//

// CLEAR SCREEN
var setupPage = function() {
  $('#mainContainer').children().each( function(child) {
      $(this).remove();
	});
}

//======= GET USER LOCATION FROM BROWSER ========//

var userLat = '';
var userLong = '';
var userLoc = [];

function getLocation() {
		console.log("GETTING LOCATION...");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        $('#location').html("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {

    userLat = position.coords.latitude;
    userLong = position.coords.longitude;
    $('#location').html("Latitude: " + userLat + 
    "<br>Longitude: " + userLong);

    console.log("SETTING LOCATION");
   	userLoc.push(userLat);
   	userLoc.push(userLong);
   	var locationString = userLoc.join();
   	console.log(locationString);

   	var currentUserId = $('#current-user-id').html();

   	//AJAX METHOD for updating DB
    $.ajax({
      // url: 'https://hungrapp.herokuapp.com/users/' + currentUserId,
      url: 'localhost:3000/users/' + currentUserId,
      data: { location: locationString},
      type: 'patch'
    });
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            $('#location').html("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            $('#location').html("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            $('#location').html("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            $('#location').html("An unknown error occurred.")
            break;
    }
}

//============== CALCULATE DISTANCES ==============//

function getDistance(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


//============== START BACKBONE ROUTER ==============//
$(document).ready( function() {
  console.log('Initiating router...');
  var router = new Router();
  Backbone.history.start();
});