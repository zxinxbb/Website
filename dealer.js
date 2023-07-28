let suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
let values = ['Ace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10','Jack','Queen', 'King']

const oneCard = (array1, array2) => {
    let randomSuits = Math.floor(Math.random() * suit.length)
    let randomValues = Math.floor(Math.random() * values.length)
    
 return values[randomValues] +' of '+ suit[randomSuits]
}

function fullDeck() {
    const deck = [];
  
    for (let i = 0; i < 52; i++) {
      deck.push(oneCard(suit, values));
    }
  
    return deck;
  }
  
  const deckOfCards = fullDeck();
 console.log(deckOfCards); //this is 52 randomly generated cards

 let fiveCards = []
 for (let i=0; i<5; i++) { 
  let drawnCard = Math.floor(Math.random() * deckOfCards.length);
  fiveCards.push(deckOfCards[drawnCard]);
  deckOfCards.splice(drawnCard, 1);
 }

  console.log(fiveCards)

