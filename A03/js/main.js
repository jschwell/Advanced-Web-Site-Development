// This script converts inches into centimeters

var convert = document.getElementById("submit");

function convertToCentimeters(e) {
	var userInput = document.getElementById("inch_value");
	var centimeters = document.getElementById("centimeter_value");
	var span = document.getElementById("required_span");
	var inches;
	
	centimeters.value = "";
	span.innerHTML = "*";
	
	// Check if the input is a number
	if (isNaN(userInput.value)) {
		// If not, display error message
		span.innerHTML = "Please enter a numerical value.";
	} else {
		// Convert the input to a number
		inches = parseFloat(userInput.value);
		// Check if the number is greater than 0
		if (inches > 0) {
			centimeters.value = inches * 2.54;
			
		} else {
			// If not, display an error message
			span.innerHTML = "Please enter a number greater than 0.";
		}
	}
	
	// Prevent the form from submitting and resetting the fields
	evt.preventDefault(e);
}

// Add a listener event to the convert button
evt.addListener(convert, "click", convertToCentimeters);
