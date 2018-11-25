"use strict"; //use strict mode to improve our coding and ease debugging
var selectArray = ["answer1","answer2","answer3","answer4","answer5","answer6","answer7","answer8","answer9","answer10","answer11","answer12","answer13","answer14"];
//initialize array of question names
var saArray = ["answer15","answer16"] //array of question names for short answer
var mcAnsArray = ["q1answers","q2answers","q3answers","q4answers","q5answers","q6answers","q7answers","q8answers","q9answers","q10answers","q11answers","q12answers","q13answers","q14answers"];
//initialize array of question divs
var score = 0 //initialize score
var submitted=false //initialize submitted or not
var questions = "" //initialize empty variable for quiz

function randInt(min, max) { //gives random integer between min (inclusive) and max (exclusive)
    return Math.floor(Math.random() * (max - min) ) + min;
}

function setSelected(obj) { //set object's class to change appearance with css
	obj.className="selected"
}
function setClear(obj) {
	obj.className="clear"
}

function setRight(obj) {
	obj.className="right"
}

function setWrong(obj) {
	obj.className="wrong"
}

function clear(radioButtonGroupName) { //clear previous selection
    var len = document.jsQuiz[radioButtonGroupName].length; // the same as document.frmOne.browser.length;
	var radioButtonID = "";
	var labelSelector = "";
    var label = "";
    for (var i = 0; i < len; i++) { //run through the group of answers and clear them
		radioButtonID = document.jsQuiz[radioButtonGroupName][i].id; //retrieve id
		labelSelector = 'label[for=' + radioButtonID + ']'; //get the label selector
		label = document.querySelector(labelSelector); //identify the label
		setClear(label); //clear label
    }
}
function check(groupName,ID) {//credits to mr fomin's example
    clear(groupName); // clears previous selection
    var labelSelector = 'label[for=' + ID + ']'; // each label is set to the ID of the corresponding radio button
    var label = document.querySelector(labelSelector); // gets label object
	setSelected(label); // sets style of label's text
}



function scramble(id){ //input is the id of a list.
var usList = document.getElementById(id); //variable set to the list element.
for (var i = usList.children.length; i >= 0; i--) {//Basically, loops a number of times = to number of list elements.
    usList.appendChild(usList.children[Math.floor(Math.random() * i)]);
	/*Each iteration, appends a random element of the list to the back of the list. 
	This works because appendChild doesn't append a copy of the child, but instead actually MOVES it to the back.
	*/}
}

function scrAns(a){ //scramble the answer choices for each question
for (var i = 0; i < a.length; i++){ //use a for loop to loop through each question and build up a new array of questions
scramble(a[i]);
};
}

function buildScore() { //built up the results at the bottom
	document.getElementById('results').className="results" //set results css class so that it is no longer hidden
	document.getElementById('resultsText').style="visibility:visible;" //show the results text
	var a=document.getElementById('resultsText').innerHTML //get the value of the results test (as of now, just a button for replay)
	document.getElementById('resultsText').innerHTML="You got "+score+" points out of 18! "+a //tell the user their score and give them a replay button
}

