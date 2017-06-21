// need a time to appear on page and begin upon page load
var number = 30

function run() {
	var interval = setInterval(decrease, 1000);
}

function decrease(){
	number--;
	$("#timeLeft").html("<h1>" + number + "</h1>");

	if (number === 0) {
	    alert("Time is Up!");
	}
}
run();



function checkAnsw(){
	$("#button").on("click", checkAnsw);
	console.log("yay!");
	}
	var question1 = document.quiz.question1.value;
    //var question2 = document.quiz.question2.value;
	// var question3 = document.quiz.question3.value;
	// var question4 = document.quiz.question4.value;
	// var question5 = document.quiz.question5.value;
	var correct = 0;

 	if (question1 === "Uma Thurman") {
 		console.log("Good Job!");
// }};
// 	if (question2 === "Bruce Lee") {
// 			//correct++
// 	//}
// 	if (question3 === "O-Ren Ishii") {
// 			correct++
// 	}
// 	if (question4 === "Hatori Hanzo") {
// 			correct++
// 	}
// 	if (question5 === "Samuel L. Jackson") {
// 			correct++
// 	}

// $("#numCorrect").html("Good job " + correct + " correct");

 checkAnsw()
 //$("#button").on("click")(checkAnsw);
// alert("you won!");

 }