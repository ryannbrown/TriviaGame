$(document).ready(function () {


var questionList = [

    {
		question: "The Kodiak Bear of Alaska is the largest land carnivore on earth. What major food source provides its 30% greater size, compared to other brown bears?", 
		choice: ["berries", "caribou", "roots and bulbs", "salmon"],
		answer: 4,
	 },

     {
		question: "What color fur does the Glacier Bear, a sub-species of Black Bear have?", 
		choice: ["berries", "caribou", "roots and bulbs", "salmon"],
		answer: 4,
     },
     
     {
		question: "The Kodiak Bear of Alaska is the largest land carnivore on earth. What major food source provides its 30% greater size, compared to other brown bears?", 
		choice: ["berries", "caribou", "roots and bulbs", "salmon"],
		answer: 4,
     },
     
     {
		question: "The Kodiak Bear of Alaska is the largest land carnivore on earth. What major food source provides its 30% greater size, compared to other brown bears?", 
		choice: ["berries", "caribou", "roots and bulbs", "salmon"],
		answer: 4,
     },
     
     {
		question: "The Kodiak Bear of Alaska is the largest land carnivore on earth. What major food source provides its 30% greater size, compared to other brown bears?", 
		choice: ["berries", "caribou", "roots and bulbs", "salmon"],
		answer: 4,
     },
     
     {
		question: "The Kodiak Bear of Alaska is the largest land carnivore on earth. What major food source provides its 30% greater size, compared to other brown bears?", 
		choice: ["berries", "caribou", "roots and bulbs", "salmon"],
		answer: 4,
	 },


    ];





var correctAnswers = 0;
var wrongAnswers = 0;
var noAnswers = 0;
var timer = 20;
// var intervalId;
var userGuess ="";
var running = false;
// var qCount = options.length;
var pick;
var index;
var newArray = [];
var holder = [];


// This is an attempted timer
function startTimer(){
    if (!running) {
        intervalId = setInterval(decrement,1000);
        running = true;
    }
}

// This counts down the timer
function decrement(){
    $("#timeleft").text("Time remaining: " + timer);
    timer --;


// stop the timer if it reaches 0
if (timer === 0){
    stop();
    $("#answers").text("You ran out of time!!");
    wrongAnswers++;
}
}

function showQuestion(){
    questions = Math.floor(Math.random()*questionList.length);
    $("#questions").html("<h2>" questionList[i].question + "</h2>")
    for (var i = 0); i < questionList[i].length; i++){

    }

}











$("#reset").hide();

// To begin the game we click start
$("#start").on("click", function() {
$("#start").hide();
startTimer();
showQuestion();

};





}


