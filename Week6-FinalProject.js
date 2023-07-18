class Card {
    constructor(rank, suit) {
      this.rank = rank;
      this.suit = suit;
    }
  }
  
  class Deck {
    constructor() {
      this.cards = [];          //cards an array to store the cards in the deck
      this.createDeck();    // creates a new deck of 52 cards
    }
  
    createDeck() {
      const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];     //rank of card(2-10,J,Q,K,A)
      const suits = ['hearts', 'diamonds', 'clubs', 'spades'];    //The suits of the card (diamonds', 'clubs', 'spades)
  
      for (const suit of suits) {
        for (const rank of ranks) {
          this.cards.push(new Card(rank, suit));
        }
      }
    }
  
    shuffle() {                 //shuffles the card in the deck randomly
      let currentIndex = this.cards.length;
      let randomIndex;
  
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        [this.cards[currentIndex], this.cards[randomIndex]] = [
          this.cards[randomIndex],
          this.cards[currentIndex]
        ];
      }
    }
  
    dealCard() {                  //removes and returns the top card from the deck
      return this.cards.pop();
    }
  }
  
  class Player {
    constructor(name) {     //the name of the player
      this.name = name;
      this.hand = [];       //an array to store the player's cards
      this.score = 0;       //the score of the player 
    }
  
    playCard() {         //removes and returns the top card from the player's hand
      return this.hand.pop();     
    }
  }
  
  class Game {      
    constructor() {
      this.players = [];    //an array to store the players
      this.deck = new Deck();   //an instance of the deck class
    }
  
    initializeGame() {          //methods- initializeGame(); creates the players and the deck, shuffles the deck, and deals cards to each player
      this.players.push(new Player('Player 1'));
      this.players.push(new Player('Player 2'));
      this.deck.shuffle();
  
      while (this.deck.cards.length > 0) {
        for (const player of this.players) {
          const card = this.deck.dealCard();
          player.hand.push(card);
        }
      }
    }
  
    playRound() {         //-each player plays a card, and the player with the higher card is awarded points
      const card1 = this.players[0].playCard();
      const card2 = this.players[1].playCard();
  
      if (card1.rank > card2.rank) {
        this.players[0].score++;
      } else if (card1.rank < card2.rank) {
        this.players[1].score++;
      }
    }
  
    getWinner() {  //determines the winner based on the players' scores 
      const player1Score = this.players[0].score;
      const player2Score = this.players[1].score;
  
      if (player1Score > player2Score) {
        return this.players[0].name;
      } else if (player1Score < player2Score) {
        return this.players[1].name;
      } else {
        return 'It\'s a tie!';
      }
    }
  
    playGame() {    //executes the game by repeatedly playing rounds until all cards have been played
      this.initializeGame();
      while (this.players[0].hand.length > 0) {
        this.playRound();
      }
    }
  
    displayScore() {    //displays the final scores and declares the winer 
      console.log(`Player 1: ${this.players[0].score} points`);
      console.log(`Player 2: ${this.players[1].score} points`);
      console.log(`Winner: ${this.getWinner()}`);
    }
  }
  
  // Unit Test using Mocha and Chai; *a unit test using mocha and chai for at least one of the functions in the game class- "playRound()" or "getWinner()"
  const assert = require('chai').assert;
  
  describe('Game', function() {
    describe('playRound()', function() {
      it('should increment the score of the player with the higher card', function() {
        const game = new Game();
        const player1 = game.players[0];
        const player2 = game.players[1];
        player1.hand.push(new Card('A', 'hearts'));
        player2.hand.push(new Card('K', 'spades'));
  
        game.playRound();
  
        assert.equal(player1.score, 1);
        assert.equal(player2.score, 0);
      });
    });
  });
  
  // Usage
  const game = new Game();
  game.playGame();
  game.displayScore();
  