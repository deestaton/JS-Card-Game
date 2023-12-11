// const j = String.fromCharCode(0x4a);
// const q = String.fromCharCode(0x51);
// const k = String.fromCharCode(0x4b);
// const a = String.fromCharCode(0x41);

// const denominations = [0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, j, q, k, a];

const suits = ["Mandela", "Dr. King", "Malcolm X", "Madam CJ Walker"];
const denominations = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// Function Constructors
function Player() {
    this.playerHand  = [];
    this.playerBook  = [];
}

function Game() {
    this.deck    = new Deck([]);
    this.player1 = new Player();
    this.player2 = new Player();
}

function Card(suit, denomination) {
    this.suit         = suit;
    this.denomination = denomination;
}

function Deck(cards) {
    this.cards = cards;
}

// Game Functions
Game.prototype.StartGame = function() {
    this.deck.GenerateDeck();
    this.deck.Shuffle();
    this.deck.Deal();
}

Game.prototype.PlayerTurn = function() {
    const p1Card = this.player1.PlayCard();
    const p2Card = this.player2.PlayCard();

    console.log("Player 1 played: ", p1Card);
    console.log("Player 2 played: ", p2Card);

    if (p1Card.denomination > p2Card.denomination) {
        this.player1.TakeBook([p1Card, p2Card]);
        console.log("Player 1's Card Is Higher")
    } else if (p2Card.denomination > p1Card.denomination) {
        this.player2.TakeBook([p2Card, p1Card]);
        console.log("Player 2's Card Is Higher")
    } else {
        console.log("Bust!");
    }
}

Game.prototype.DeclareWinner = function() {
    if (this.player1.playerBook.length > this.player2.playerBook.length) {
        console.log("Player 1 Wins The Game!");
    } else if (this.player2.playerBook.length > this.player1.playerBook.length) {
        console.log("Player 2 Wins The Game!");
    } else {
        return "Draw";
    }
}

// Player Functions
Player.prototype.PlayCard = function() {
    // Make sure there are cards in the players hands
    if (this.playerHand.length > 0) {
        const cardPlayed = this.playerHand.pop();
        return cardPlayed;
    } else {
        console.log("Player's hand is empty");
    }
}

Player.prototype.TakeBook = function(cardsWon) {
    return this.playerBook.push(...cardsWon);
}

// Deck Functions
Deck.prototype.GenerateDeck = function () {
    // Create an array of cards for each suit
    const suitArray = suits.map(suit =>
        denominations.map(denomination => new Card(suit, denomination))
    );
    this.cards = suitArray.flat();
}

Deck.prototype.Shuffle = function () {
    // Fisher-Yates shuffle algorithm
    for (let temp = this.cards.length - 1; temp > 0; temp--) {
        // Get a random index between 0 and i
        const i = Math.floor(Math.random() * (temp + 1));
        [this.cards[temp], this.cards[i]] = [this.cards[i], this.cards[temp]];
    }
}

// TODO: Check if the 5th card dealt is from the M.CJ suit
Deck.prototype.Deal = function () {
    //console.log("Number of cards in the deck: ", this.cards.length);
    const player1Hand = this.cards.slice(0, 26);
    const player2Hand = this.cards.slice(26);

    // Assign the cards to the respective player hands
    game.player1.playerHand = player1Hand;
    game.player2.playerHand = player2Hand;

    // Update the remaining cards in the deck
    this.cards = [];

    console.log("Player 1: ", player1Hand);
    console.log("Player 2: ", player2Hand);
    //console.log("Number of cards remaining: ", this.cards.length);
}

// Start a new game
const game = new Game();
game.StartGame();

// Play 5 rounds then declare a winner
for (let i = 0; i < 5; i++) {
    console.log(`\n*** ROUND ${i + 1} ***\n`)
    game.PlayerTurn();
} 
console.log(`\n*** RESULTS ***\n`)
game.DeclareWinner();