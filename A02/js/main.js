// This script converts inches into centimeters

function convertToCentimeters() {
	var userInput;
	var inches;
	var centimeters;
	var loopCounter;
	var conversion = [];
	var message = "";
	
	for (loopCounter = 0; loopCounter < 3; loopCounter++) {
		userInput = prompt("Please enter an inch value that you want to convert into centimeters.","");
		
		if (userInput == null) {
			// If the user hits cancel, exit out of the loop
			break;
		} else if (isNaN(userInput)) {
			alert("Please enter a valid number.");
			loopCounter--;
		} else {
			if (userInput > 0) {
				inches = parseFloat(userInput);
				centimeters = inches * 2.54;
				conversion[loopCounter] = inches + " inches is equal to " + centimeters + " centimeters.<br/>";
			}
			else {
				alert("Please enter a number greater than 0.");
				loopCounter--;
			}		
		}
	}
	
	// Check if the user entered any numbers
	if (loopCounter > 0) {
		// Concatenate array into one message
		for (var index in conversion) {
			message += conversion[index];
		}
		// Display message
		document.getElementById("results").innerHTML = message;
	}
}

convertToCentimeters();


