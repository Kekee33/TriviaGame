// need a time to appear on page and begin upon page load
// var sec = 60;
// function timer() {
// 	sec = setInterval(alert,30000);
// }
// var timer = setInterval(timeLeft, 1000)
// 	$("#timeLeft").html(sec--);
// 	if (sec == -1)
function move() {
  var elem = document.getElementById("myBar"); 
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width == 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}
// function totalSeconds(){
// 	$("#timeLeft").html(totalSeconds);
// }

// function checkAnsw(){
// var question1 = document.quiz.question1.value;
// var question2 = document.quiz.question2.value;
// var question3 = document.quiz.question3.value;
// var question4 = document.quiz.question4.value;
// var question5 = document.quiz.question5.value;
// var correct = 0

// 	if (question1 === "Uma Thurman") {
// 	correct++;
// 	console.log("Good Job!")
// 	}
// 		if (question2 === "Bruce Lee") {
// 			correct++
// 	}
// 	if (question3 === "O-Ren Ishii") {
// 			correct++
// 	}
// 	if (question4 === "Hatori Hanzo") {
// 			correct++
// 	}
// 	if (question5 === "Samuel L. Jackson") {
// 			correct++
// 	}
// }
//$("#numCorrect").html("Good job " + correct + " correct");