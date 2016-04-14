window.onload = function () {
	// Get a reference to the submit
	var submit = document.getElementById("submit");
		
	// Attach a listener to the submit button 
	evt.addListener(submit, "click", function(e){
	    evt.preventDefault(e);
	    getLocation();
	});
};

function getLocation() {	
	// Determine if geolocation is supported by the browser
	if (typeof navigator.geolocation != "undefined") {
		navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
	} else {
		document.getElementById("message").innerHTML = "This page uses geolocation, and " +
			"your browser doesn't support it.";
	}
}

function geoSuccess(position) {
	var coords = position.coords;
	var latitude = coords.latitude;
	var longitude = coords.longitude;
	var altitude = coords.altitude;
	var speed = coords.speed;
	var locationText = document.getElementById("location");
	
	// Check if values are null and if so, replace them with "Unavailable"
	latitude = isNull(latitude);
	longitude = isNull(longitude);
	altitude = isNull(altitude);
	speed = isNull(speed);
	
	// Display results	
	locationText.value = "Latitude: " + latitude + "\n" + "Longitude: " + longitude + "\n" +
		"Altitude: " + altitude + "\n" + "Speed: " + speed;
}
			
function geoError(errorObj) {
	// Display error message
	document.getElementById("message").innerHTML = errorObj.message;
}

function isNull(input) {
	if (input == null) {
		input = "Unavailable";
	}
	
	return input;
}
