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
var stuff = true;
var miles = 10;

//Method: Procedure

var riddenMiles = function(name, message, m) {
	var howFar = m + m;
	
		if (nuts === true) {
		rider = (name + " is crazy!, " + message + m + " miles. ");
	} else {
		rider = (name + " is a great rider. ");
		
	};
		return rider;
	
};

//Property Boolean
var choose = function (name, equipment, message) {
		
	if (stuff === false) {
		choices = ("If " + name + " brings the " + equipment + message);
	} else {
		choices = (" If " + name + " just brings the spurs, " + " he cannot ride the horse. ");
		
	};
		return choices;
		
};
//Property Number
var slowMotion = function(number){
	
	var seconds = number 
		
	while (seconds > 0){
		console.log(seconds + " seconds till I hit the bush full of thorns ");		
		seconds = seconds - 1;
		
		if(seconds > 0){
			console.log(seconds + " seconds ");
		} else {
			console.log(" Jump!!! ");
		};
		console.log(" ");
	};
	return seconds;
};
//String Property
var a = "Crazy horse",
	b = "covered his eyes";
	
	var horseAction = function(a, b){
		var action = a + b;
		console.log(" As I was riding this " + 
					a + 
					" I " + 
					b + 
					" to try to stop him."); 
	};
	

//Main code
var rideCall = riddenMiles("Pedro","riding this horse for ", 10);
console.log(rideCall)
var choiceCall = choose("Rafael", "saddle and harneess", " he can ride the horse. ")
console.log(choiceCall)
var collision = slowMotion(5);
horseAction(a, b);


