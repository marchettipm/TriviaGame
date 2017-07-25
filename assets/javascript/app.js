var timer = 60;
var correct = 0;
var incorrect = 0;
var noanswer = 10;

function reset () {
	timer = 60;
	correct = 0;
	incorrect = 0;
	noanswer = 10;
	$("#timer").text(":60");
	$("#start").attr("disabled", false);

}

	function start() {
		$(".AB").attr("disabled", false);
		$("#start").attr("disabled", true);
		intervalId = setInterval(function(){
		timer--;
		$("#timer").text(timer);
		// console.log(timer);
			if (timer === 0) {
			$(".AB").attr("disabled", true);
			clearInterval(intervalId);
			endText();
			reset();
			}
		}, 1000);
}

function endText () {
		if(correct === 10) {
			$("#comment").text("Perfect!! Hall Of Famer!!");
		}else if(correct >= 7) {
			$("#comment").text("Bonafide Superstar!!");	
		}else if(correct >= 4) {
			$("#comment").text("Seasoned Veteran!!");
		}else {
			$("#comment").text("Come on, Rookie!!");
		}$("#correct").text(correct);

}

$(document).ready(function() {

$(".AB").attr('disabled', 'disabled');


	
$('#start').on("click", start);

$(".AB").on("click", function(){
	if($(this).hasClass("right") === true) {
		correct ++;
		noanswer --;
		$(this).attr('disabled','disabled');
		$(this).siblings().attr('disabled','disabled');
		console.log(correct + " " + noanswer);
		
	}else{
		incorrect ++;
		noanswer --;
		$(this).attr('disabled','disabled');
		$(this).siblings().attr('disabled','disabled');
		console.log(incorrect + " " + noanswer);
		}
	if(noanswer === 0) {
		endText();
		clearInterval(intervalId);
		reset();
		}	
	});
	









});
