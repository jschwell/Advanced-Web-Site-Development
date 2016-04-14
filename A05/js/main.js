window.onload = function () {
	// Get a reference to the submit and reset button
	var submit = document.getElementById("submit");
	var reset = document.getElementById("reset");
	
	// Get a reference to the form
	var myForm = document.getElementById("date_form");
	
	// Attach a listener to the submit button 
	evt.addListener(submit, "click", function(e){
	    evt.preventDefault(e);
	    getFormData(myForm);
	});
	
	// Attach a listener to the reset button 
	evt.addListener(reset, "click", resetMessage);
};

function getFormData(myForm) {
	var month = myForm.month.value;
	var day = myForm.day.value;
	var year = myForm.year.value;
	
	// Check if the user input is valid by calling the function isValidInput
	if (isValidInput(month, day, year)) {
		// Create a new date object for the user's birthday
		var birthDate = new Date();
		birthDate.setFullYear(year, month, day);
		
		if (isValidDate(birthDate)){
			// Call displayResults
			displayResults(birthDate);
		}
	}
}

function isValidInput(month, day, year) {
	var isValid = false;
	var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
	
	// Check if the year is a leap year and if so, change the number of days in February
	if (isLeapYear(year)) {
		daysInMonth[1] = 29;
	}
		
	// Check if the day/month combination is correct
	if (Number(day) <= daysInMonth[Number(month)]) {
		isValid = true;
	} 
	else if (Number(month) == 1 && Number(day)  == 29){
		// Display an error message that the year was not a leap year
		// (The year was not a leap year because day is greater than daysInMonth[month])
		document.getElementById("message").innerHTML = year + " is not a leap year. Please try again.";
		
		// Clear any prior results
		resetResults();
	} 
	else {
		// Display an error message that the user selected a day out of range
		var el = document.getElementById("month");
		monthText = el.options[el.selectedIndex].text;
		document.getElementById("message").innerHTML = monthText + " only has " + daysInMonth[month] + 
			" days in it. Please try again.";
		
		// Clear any prior results
		resetResults();
	}
	
	return isValid;
}

function isValidDate(birthDate) {
	var isValid = false;
	var today = new Date();
		
	// Check if the date has occurred
	if (birthDate <= today) {
		isValid = true;
	} 
	else {
		// Display an error message that the birthday has not yet occurred
		document.getElementById("message").innerHTML = "Were you born in the future?<br>" + 
			birthDate.toLocaleDateString() + " has not occurred yet. Please try again.";
			
		// Clear any prior results
		resetResults();
	}
	
	return isValid;
}

function isLeapYear(year){
	/* Leap years are any year that can be evenly divided by 4 (year % 4)
	 * except (&&) if it can be evenly divided by 100 (year % 100)
	 * except (||) if it can be evenly divided by 400 (year % 100)
	 */
	    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        	return true;
	    } 
	    else {
	        return false;
	    }
}

function resetMessage() {
	// Reset the div with the id of message 
	document.getElementById("message").innerHTML = "";
}

function resetResults() {
	// Clear the text boxes in the results fieldset
	document.getElementById("leap_year").value = "";
	document.getElementById("weekday").value = "";
	document.getElementById("date").value = "";
	document.getElementById("birth_days").value = "";
	document.getElementById("semester_days").value = "";
}

function displayResults(birthDate) {
	var today = new Date();
	var semesterEnd = new Date();
	var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var birthDays;
	var semesterDays;
	
	// Clear any error message
	resetMessage();
	
	// Set the date for the end of the semester
	semesterEnd.setFullYear(2016,4,11);
	
	// Calculate the number of days since the user's birth
	birthDays = today.getTime() - birthDate.getTime();
	birthDays = Math.floor(birthDays / (1000 * 60 * 60 * 24));
	
	// Calculate the number of days until the end of the semester
	semesterDays = semesterEnd.getTime() - today.getTime();
	semesterDays = Math.floor(semesterDays / (1000 * 60 * 60 * 24));
	
	// Display if the year was a leap year or not
	if (isLeapYear(birthDate.getFullYear())) {
		document.getElementById("leap_year").value = "Yes";
	} else {
		document.getElementById("leap_year").value = "No";
	}
	
	// Display the day of the week the user was born on
	document.getElementById("weekday").value = dayOfWeek[birthDate.getDay()];
	// Display today's date
	document.getElementById("date").value = today.toLocaleDateString();
	// Display the number of days since the user's birth
	document.getElementById("birth_days").value = birthDays;
	// Display the number of days until the end of the semester
	document.getElementById("semester_days").value = semesterDays;
}
