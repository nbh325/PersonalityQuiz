let rain = null;
let sunny = null;

let pageTitle= document.getElementById("header");
let pageTitleText = pageTitle.innterHTML;
let tryAgain = document.getElementById ("try again");
let quizWrapper = document.getElementById("quiz-wrapper");
let formSubmit = dodocument.getElementById ("submit");

function processresults(){
	console.log ("This is process results")
}
function getPersonality(){
	console.log ("get personality")
}
function resetQuiz (){
	console.log ("reset quiz")
}

tryAgain.addEventListener.click(resetquiz)
formSubmit.addEventListener.click (processResults)