window.onload = function () {
	// Get a reference to the buttons
	var conversions = document.getElementById("conversion");
	var birthday = document.getElementById("birthday");
	var gradebook = document.getElementById("gradebook");
	var locateMe = document.getElementById("locate-me");
		
	// Attach a listener to the conversions button 
	evt.addListener(conversions, "click", function(e){
	    changePage(e);
	});
	
	// Attach a listener to the birthday button 
	evt.addListener(birthday, "click", function(e){
	    changePage(e);
	});
	
	// Attach a listener to the gradebook button 
	evt.addListener(gradebook, "click", function(e){
	    changePage(e);
	});
	
	// Attach a listener to the locateMe button 
	evt.addListener(locateMe, "click", function(e){
	    changePage(e);
	});
};

function changePage(e) {
	// Get the url of the home page (using href instead of hostname to work on aptana's preview)
	var website = window.location.href;
	
	// Replace "index.html" with an empty string if it exists
	website = website.replace("index.html", "");
	
	// Assign new url based off the id of the button
	window.location.assign(website + "pages/" + e.target.id + ".html");
}