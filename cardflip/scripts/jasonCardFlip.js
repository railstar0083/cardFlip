function jasonCardFlip (element, options) {

//set defaults
//var [Variable Name] = options.[Local Variable Name] || [Default State];

var cardCount = options.cardCount || 3;
var cardHeight = options.cardHeight || 225;
var cardWidth = options.cardWidth || 150;

//global variables




/************
Build the structure
*************/
var game = $(element);
game.addClass("jasonCardFlip");


//Create cards
for (i = 0; i <= cardCount-1; i++){
	$(".jasonCardFlip").append('<div class="jasonCard animated" id="card_'+i+'"></div>');
}

//set height and width of cards
$(".jasonCard").each( function() {
		$(this).css("height", ""+cardHeight+"");
		$(this).css("width", ""+cardWidth+"");
	});


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
	$(this).addClass("flip");
	$(this).addClass("flippedCard");
	$(".jasonCard").css("pointer-events", "none");
});



}//End Function