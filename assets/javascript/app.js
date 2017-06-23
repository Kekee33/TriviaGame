// need a time to appear on page and begin upon page load
var number = 30

function run() {
	window.timer = setInterval(decrease, 1000);
}

function decrease(){
	number--;
	$("#timeLeft").html("<h1>" + number + "</h1>");

	if (number === 0) {
	    alert("Time is Up!");
	    clearInterval(window.timer);
	}
}
run();

function checkAnswers(){
	var correct = 0;

	var correct_answers = {
		question1: "Uma Thurman",
		question2: "Bruce Lee",
		question3: "O-Ren Ishii",
		question4: "Hattori Hanzo", 
		question5: "Samuel L. Jackson",

	};

$('input').each(function() {
	var question = $(this).attr('name');

	if ( $(this).prop('checked') ){
		var user_answer = $(this).val();

		if (correct_answers[question] == user_answer)

			correct++;
	}	
});

$("#numCorrect").text("Good job " + correct + " correct");

// $(window).scrollTop(0);

function init(){
	$("#button").on("click", checkAnswers);
}

init();	
}




	
 //$("#button").on("click")(checkAnsw);


// }