function jasonCardFlip (element, options) {


//set defaults
//var [Variable Name] = options.[Local Variable Name] || [Default State];

var cardCount = options.cardCount || 3;
var winningCard = options.winningCard || 3;
var cardHeight = options.cardHeight || 225;
var cardWidth = options.cardWidth || 150;
var numPicks = options.numPicks || 1;
var winMSG = options.winMessage || "You're a Winner!!";
var loseMSG = options.loseMessage || "You Lose!!";
var cardBack = options.cardBack || "cardback.png";
var cardFrontWin = options.cardFrontWin || "cardfrontwin.png";
var cardFrontLose = options.cardFrontLose || "cardfrontlose.png";

//global variables
var picks = 0;

/************
Build the structure
*************/
var game = $(element);
game.addClass("jasonCardFlip");

//Create card wrapper
$(".jasonCardFlip").append("<div class='jasonCardWrap'></div>");

//Create cards
for (i = 0; i <= cardCount-1; i++){
	$(".jasonCardWrap").append('<div class="jasonCard animated" id="card_'+i+'"><div class="jasonCardFront animated"></div></div>');
}

//set height and width of cards
$(".jasonCard").each( function() {
		$(this).css("height", ""+cardHeight+"");
		$(this).css("width", ""+cardWidth+"");
	});

//create Win/Lose message
$(".jasonCardFlip").append('<br/><div class="jasonWL animated" id="jasonWin"></div><div class="jasonWL animated" id="jasonLose"></div>');


//replace backgrounds
$(".jasonCard").css("background", "url(./images/"+cardBack+") center no-repeat");
$(".jasonCard").css("background-size", "100%");
$(".loseCard").css("background", "url(./images/"+cardFrontLose+") center no-repeat");
$(".loseCard").css("background-size", "100%");
$(".winCard").css("background", "url(./images/"+cardFrontWin+") center no-repeat");
$(".winCard").css("background-size", "100%");

/****************
Click Behavior
****************/
$(".jasonCard").on('click', function(){
	//Get the ID of the dynamically created card that was clicked
	var a = $(this).attr("id");
	//Parse out the number in the ID
	var cardID = a.match(/\d+/);
	cardID = parseInt(cardID);
	//Flip dat card!
	if (cardID == winningCard - 1){
		$(this).addClass("flip")
		$('#'+a+' > .jasonCardFront').addClass("winCard");
		$('#'+a+' > .jasonCardFront').attr("style", "background: url(./images/"+cardFrontWin+") center no-repeat; background-size: 100%");
		$('#'+a+' > .jasonCardFront').addClass("frontflip");
		$(".jasonCard").css("pointer-events", "none");
		$("#jasonWin").html(winMSG);
		$("#jasonWin").addClass("bounceIn");
	} else {
		$(this).addClass("flip");
		$('#'+a+' > .jasonCardFront').addClass("loseCard");
		$('#'+a+' > .jasonCardFront').attr("style", "background: url(./images/"+cardFrontLose+") center no-repeat; background-size: 100%");
		$('#'+a+' > .jasonCardFront').addClass("frontflip");
		$("#jasonLose").html(loseMSG);
		$("#jasonLose").addClass("bounceIn");
	}
	picks = picks + 1;
	//If the max number of flips have been reached, lock the other cards
	if (picks >= numPicks) {
		$(".jasonCard").css("pointer-events", "none");
	}
});


}//End Function