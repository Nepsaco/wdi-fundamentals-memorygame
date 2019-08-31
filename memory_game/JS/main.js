var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
function checkForMatch() {
	if(cardsInPlay.length === 2){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!")
	}else {
		alert("Sorry try again.")
	}	
}
}
function flipCard(cardID) {
	cardsInPlay.push(cards[cardID]);
	console.log("User flippled " + cards[cardID]);
	checkForMatch();	
}

flipCard(0);
flipCard(2);
