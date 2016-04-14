// This script performs converts inches, feet, or miles to either
// centimeters, meters, or kilometers

window.onload = function () {
	// Get a reference to the submit button
	var submit = document.getElementById("submit");
	
	// Get a reference to the form
	var myForm = document.getElementById("conversion_form");
	
	// Attach a listener to the submit button 
	evt.addListener(submit, "click", function(e){
	    evt.preventDefault(e);
	    getFormData(myForm);
	});
};

function getFormData(myForm) {
	var txtInput = myForm.convert_value;
	var convertValue = evt.trim(txtInput.value);
	var radioFrom = myForm.radio_from;
	var radioTo = myForm.radio_to;
	var fromValue;
	var toValue;
	
	// Get the value of the selected radio button in the Convert From group
	fromValue = getRadioValue(radioFrom);
	// Get the value of the selected radio button in the Convert To group
	toValue = getRadioValue(radioTo);
	
	// Check if the input is valid by calling the function isValidInput
	if (isValidInput(convertValue)) {
		// Check if both radio groups have a selected value
		if (toValue != "" && fromValue != "") {
			convertValues(convertValue, toValue, fromValue);
		} else {
			// If not, display an error message
			alert("Please select a value for Convert From and Convert To.");
		}
	} else {
		// If not, display an error message and set the focus back to the text box
		alert("Please enter a valid number.");
		txtInput.focus();
		txtInput.select();
	}
}

function getRadioValue(radios) {
	// Get the value from the selected radio button and return it
	for(var i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            var selectedValue = radios[i].value;
            return selectedValue;    
        }
    }
    
    // If no value is selected, return an empty string
    return "";
}

function isValidInput(userInput) {
	var isValid = false;
	
	// Check if the input is a number
	if (!isNaN(userInput)) {
		convertValue = parseFloat(userInput);
		// Check if the number is greater than 0
		if (convertValue > 0) {
			isValid = true;
		}
	}
	
	return isValid;
}

function convertValues(convertValue, toValue, fromValue) {
	var factor;
	var newValue;
	
	// Determine the factor based on the Convert From value and
	// a centimeter conversion
	switch(fromValue) {
		case "in":
			factor = 2.54;
			break;
		case "ft":
			factor = 30.48;
			break;
		case "mi":
			factor = 160934;
			break;
	}
	
	// Adjust the factor based on the Convert To value
	switch(toValue) {
		case "cm":
			// Factor is already in terms of centimeters so end the switch statement
			break;
		case "m":
			factor = factor / 100;
			break;
		case "km":
			factor = factor / 100000;
			break;
	}
	
	// Calculate the coverted value
	newValue = convertValue * factor;
	
	// Display the results
	displayValues(convertValue, newValue, toValue, fromValue);
}

function displayValues(convertValue, newValue, toValue, fromValue) {
	var conversions = document.getElementById("conversions");
	var message;
	
	// Create message
	if (newValue.toFixed(3) != 0) {
		message = convertValue + " " + fromValue + " = " + newValue.toFixed(3) +
		" " + toValue;
	} else {
		message = convertValue + " " + fromValue + " = " + newValue.toFixed(9) +
		" " + toValue;
	}
	
	// Add the message to the textarea
	conversions.value += message + "\n";
}
