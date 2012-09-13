/* Daniel Reyes
   SDI - 1209
   Project 3
*/
//Global Variables
var horseName = "Crazy Horse"
var streetNames = ["Calle 4", "Fast Ave", "Hurt Cir"],
speedOfHorse = [10, 15, 20],
equipment = ["Saddle", "Spurs", "Harness"];
var numberOfEquipment = 3;
var nuts = true;
var miles = 10;

//Method: Procedure

var riddenMiles = function(name, message, m) {
	var howFar = m + m;
	
		if (nuts === true) {
		rider = (name + " is crazy!, " + message + m + " miles ");
	} else {
		console.log(name + " is a great rider ");
		
	};
		return rider;
	
};

//Main code
var rideCall = riddenMiles("Pedro","riding this horse for ", 10);
console.log(rideCall)