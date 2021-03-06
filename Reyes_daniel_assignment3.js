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
					 
		return action;			 
};
//Array Property
var attempts = function(friendNames, eyesShut){

	var friendNames = ["Pedro,", "Julio,", "Rafael,"];
	var eyesShut = ["5 seconds", "10 seconds", "20 seconds"];
	
	for(var i=0, f=friendNames.length; i < f; i++){
		console.log(friendNames[i] + " covered the horse's eyes for " + eyesShut[i]);
		
		if(f < 4){
			console.log("Try longer " + friendNames[i] + " the horse is not stoping.  ");
		} else {
			console.log(" Great job! " + friendNames[i] + " the horse finally stoped. ");
		};
		console.log(" ");
	};	
	return friendNames;
};
//Json Data
var rider = {
	realName: "Enrique",
	lastName: "Iglesias",
	singer: true,
	horses: ["On more shot", " got ya sucker"],
	rideTo: function (){
		console.log("San Juan")
	}
	
};		
rider.rideTo()
for (var key in rider ){
	console.log("key: " + key + ", value " + rider[key]);
};
	

//Main code
var rideCall = riddenMiles("Pedro","riding this horse for ", 10);
console.log(rideCall)
var choiceCall = choose("Rafael", "saddle and harneess", " he can ride the horse. ")
console.log(choiceCall)
var collision = slowMotion(5);
horseAction(a, b);
attempts(); 

