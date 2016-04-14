window.onload = function () {	
	// Get a reference to the select element
	var select = document.getElementById("name");
	
	// Load course titles into the select element
	loadJSON(loadSelect);
	
	// Attach a listener to the select element 
	evt.addListener(select, "change", function(){
	    loadJSON(getCourseData);
	});
	
};

function loadJSON(callback) {
	// Create a new instance of XMLHttpRequest
    var request = new XMLHttpRequest();
    // Get the contents of the JSON file
    request.open("GET", "data/courses.json");
    request.setRequestHeader("Content-type", "application/json");
    request.onreadystatechange = function () {
          if (request.readyState == 4) {
          	if (request.status == 200){
          		var response = JSON.parse(request.responseText);
          		callback(response);
          	}          	
          }
    };
    request.send(null);  
}

function getCourseData(response) {
	var number = document.getElementById("number");
	var credits = document.getElementById("credits");
	var semester = document.getElementById("semester");
	var prerequisite = document.getElementById("prerequisite");
	var description = document.getElementById("description");
	var index = document.getElementById("name").selectedIndex - 1;
	
	// Clear form if Choose a Course is selected
	if (index == -1) {
		number.value = "";
		credits.value = "";
		semester.value = "";
		prerequisite.value = "";
		description.value = "";
	} else {
		// Display selected course information
		number.value = response.courseList[index].courseNumber;
		credits.value = response.courseList[index].numberOfCredits;
		semester.value = response.courseList[index].semesterOffered;
		prerequisite.value = response.courseList[index].prerequisite;
		description.value = response.courseList[index].description;
	}
	
}

function loadSelect(response){
	var select = document.getElementById("name");
	
	// Add an option to the select element for each course
	for (var i = 0; i < response.courseList.length; i++) {
        var option = document.createElement("option");
		option.text = response.courseList[i].courseTitle;
		option.value = option.text;
		select.add(option);
	}
}
