// Global arrays
var names = [];
var scores = [];
var sortedScores = [];

window.onload = function () {
	// Get a reference to the submit and display button
	var submit = document.getElementById("submit");
	var display = document.getElementById("display");
	
	// Get a reference to the form
	var myForm = document.getElementById("gradebook_form");
		
	// Attach a listener to the submit button 
	evt.addListener(submit, "click", function(e){
	    evt.preventDefault(e);
	    getFormData(myForm);
	});
	
	// Attach a listener to the display button 
	evt.addListener(display, "click", displayGradebook);
};

function getFormData(myForm) {
	var name = myForm.name.value;
	var score = myForm.score.value;
	var nameField = document.getElementById("name");
	var scoreField = document.getElementById("score");
	
	// Check if the user input is valid by calling the function isValidInput
	if (isValidInput(name, score)) {
		// Save data into arrays
		names.push(name);
		scores.push(score);
		sortedScores.push(score);
		
		// Clear any error message
		resetMessage();
		
		// Clear the text boxes in the student info fieldset
		nameField.value = "";
		scoreField.value = "";
		
		// Reset the focus to the name field
		nameField.focus();	
	}
}

function displayGradebook() {
	if (isValidData()){
		var lowScore;
		var highScore;
		var avgScore = 0;
		var gradebook = document.getElementById("gradebook");
		
		// Clear any error message
		resetMessage();
		
		// Sort scores
		sortedScores.sort(function(a, b){return a-b});
		
		// Get low and high scores
		lowScore = sortedScores[0];
		highScore = sortedScores[sortedScores.length - 1];
		
		// Calculate the average score
		for (var i = 0; i < sortedScores.length; i++) {
			avgScore += parseFloat(sortedScores[i]);
		}
		avgScore = avgScore / sortedScores.length;
		
		// Display average, low, and high scores
		gradebook.value = "Average Score = " + avgScore.toFixed(2) + "\n" +
			"High Score = " + highScore + "\n" + 
			"Low Score = " + lowScore + "\n\n";
			
		// Display names and scores
		for (var index = 0; index < names.length; index++) {
			gradebook.value += names[index] + ", " + scores[index] + "\n";
		}
	}	
}

function isValidInput(name, score) {
	var isValid = false;
	var nameField = document.getElementById("name");
	var scoreField = document.getElementById("score");
	var errorMessage = document.getElementById("message");
	
	// Check if a name was entered
	if (name != "") {
		// Check if score is a number
		if (!isNaN(score)){
			validScore = parseFloat(score);
			// Check if the score is between 0 and 100
			if (validScore >= 0 && validScore <= 100){
				isValid = true;
			}
			else {
				// Display an error message that the user entered a score out of range
				errorMessage.innerHTML = "Please enter a score between 0 and 100.";
				// Set focus and select score field
				scoreField.focus();
				scoreField.select();
			}
		}
		else {
			// Display an error message that the user entered an invalid score
			errorMessage.innerHTML = "Please enter a valid score.";
			// Set focus and select score field
			scoreField.focus();
			scoreField.select();
		}
	} 
	else {
		// Display an error message that the user didn't enter a name
		errorMessage.innerHTML = "Please enter a name.";
		// Set focus to name field
		nameField.focus();
	}
	
	return isValid;
}

function isValidData() {
	var isValid = false;
	
	// Check if the array has any elements
	if (names.length > 0) {
		isValid = true;
	}
	else {
		// Display an error message that the user didn't enter any students
		document.getElementById("message").innerHTML = "No students have been entered.";
		// Set focus to name field
		document.getElementById("name").focus();
	}
	
	return isValid;
}

function resetMessage() {
	// Reset the div with the id of message 
	document.getElementById("message").innerHTML = "";
}