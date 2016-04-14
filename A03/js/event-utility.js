// Create an object class called evt
var evt = {
	// Create a function called addListener() that adds a listener to an object
	// that has three parameters: the object to register the event listener on, the event type, 
	// and the function to execute once the event is heard.
	addListener: function(obj, type, fn) {
		// Detect the presence of addEventListener
		if (obj.addEventListener) {
			// If the browser supports addEventListener(), call it
			obj.addEventListener(type, fn);
		} else {
			// Otherwise call attachEvent()
			obj.attachEvent("on" + type, fn);
		}
	},
	// Remove a listener that was added previously to an object
	removeListener: function(obj, type, fn) {
		// Detect the presence of removeEventListener
		if (obj.removeEventListener) {
			// If the browser supports removeEventListener(), call it
			obj.removeEventListener(type, fn);
		} else {
			// Otherwise call detachEvent()
			obj.detachEvent("on" + type, fn);
		}
	},
	// Get the event target from the event object
	getTarget: function(e) {
		// Check if target is supported
		if (e.target) {
			// Return the target if it's supported
			return e.target;
		}
		// Otherwise, return the element object contained within srcElement
		return e.srcElement;
	},
	// Prevent the default action of the event that took place
	preventDefault: function(e) {
		// Check if preventDefault is supported
		if (e.preventDefault) {
			// If so, call the method
			e.preventDefault();
		} else {
			// Otherwise, set the object's return value to false
			e.returnValue = false;
		}
	}
};
