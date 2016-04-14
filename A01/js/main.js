// This script converts inches into centimeters
var userInput = prompt("Please enter an inch value that you want to convert into centimeters.","0");
var inches;
var cent;

inches = parseFloat(userInput);

cent = inches * 2.54;

alert(inches + " inches is equal to " + cent + " centimeters.");
