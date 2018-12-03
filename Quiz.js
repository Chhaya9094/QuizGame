/**
* quiz.js
* This javascript file contains all the quiz implementation methods and event handlers.
*
*/

window.score = 0;
window.currentQuestion = 1;
window.submittedAnswers = new Array();

window.onload = function() {

	document.getElementById('score').innerHTML  = score;
	document.getElementById('currentQuestionCount').innerHTML = currentQuestion;

	//Hide Previous button for the first question
	if(currentQuestion === 1) {
		document.getElementById("previous").style.display = 'none';
		document.getElementById("submit").style.display = 'none';
	}
	

	//Event Listner for next button
	document.getElementById("next").addEventListener("click", function() {

		storeAnswer();

		var nextQuestion = currentQuestion+1;

		document.getElementById('questionCard_'+currentQuestion).style.display = 'none';
		document.getElementById('questionCard_'+nextQuestion).style.display = 'block';

		currentQuestion = nextQuestion;

		if(currentQuestion === 5) {
			document.getElementById("next").style.display = 'none';
			document.getElementById("submit").style.display = 'inline';
		}
		if(currentQuestion > 1) {
			document.getElementById("previous").style.display = 'inline';
		}

		document.getElementById('currentQuestionCount').innerHTML = currentQuestion;

	    
	});


	//Event Listner for previous button
	document.getElementById("previous").addEventListener("click", function() {


		var nextQuestion = currentQuestion-1;

		document.getElementById('questionCard_'+currentQuestion).style.display = 'none';
		document.getElementById('questionCard_'+nextQuestion).style.display = 'block';

		storeAnswer();

		//update the current question count after next/previous button click event
		currentQuestion = nextQuestion;

		//Hide/Display previous buttons based on the current question count
		if(currentQuestion === 1) {
			document.getElementById("previous").style.display = 'none';
		}
		if(currentQuestion < 5) {
			document.getElementById("next").style.display = 'inline';
		}
	    
	    document.getElementById('currentQuestionCount').innerHTML = currentQuestion;
	});

	//Event Listner for submit button
	document.getElementById("submit").addEventListener("click", function() {

		storeAnswer();

		score = 0;
		if(submittedAnswers[0] == '1') {
			score++;
		}

		if(submittedAnswers[1] == 'Tokyo') {
			score++;
		}

		if(submittedAnswers[2] == '7') {
			score++;
		}

		if(submittedAnswers[3] == '1') {
			score++;
		}

		if(submittedAnswers[4] == '2') {
			score++;
		}

		document.getElementById('score').innerHTML = score;

		document.getElementById('quizContainer').style.display = 'none';
		document.getElementById('scoreContainer').style.display = 'inline';
		

	});
	
};


//Function to store the selected answers
function storeAnswer() {


	var inputType = document.getElementById('question_'+currentQuestion+'_answer').type;

	if(inputType == 'radio') {

		if(document.querySelector('input[name="question_'+currentQuestion+'_answer"]:checked') === null){
			//do nothing
		}
		else{
			var answer = document.querySelector('input[name="question_'+currentQuestion+'_answer"]:checked').value;
			submittedAnswers[currentQuestion-1] = answer;
		}
		return true;
	}

	if(inputType == 'text' || inputType == 'number') {

		if(document.getElementById('question_'+currentQuestion+'_answer').value == ''){
			//do nothing
		}
		else{
			var answer = document.getElementById('question_'+currentQuestion+'_answer').value;
			submittedAnswers[currentQuestion-1] = answer;
		}
		return true;
	}


}

