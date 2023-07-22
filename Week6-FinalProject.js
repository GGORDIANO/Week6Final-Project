class Card {
    constructor(suit, name, value) {
      this.name = name;
      this.suit = suit;
      this.value = value;
    }
  }
  
  class Deck {
    constructor() {
      this.cards = [];          //cards an array to store the cards in the deck
     this.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
     this.names= ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
     this.values = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    }
  
    createDeck() {
      console.log("Creating new Deck");
      for (let i = 0; i < this.suits.length; i++) {
        for (let n = 0; n< this.names.length; n++) {
          this.cards.push(new Card(this.suits[i], this.names[n]))
        }
      }
    };
  
    shuffleDeck() {                 //shuffles the card in the deck randomly
      console.log("Shuffling Deck");
      const shuffledDeck = [];
      for (let i = 0; i < 52; i++) {
        let randomPosition = Math.floor((this.cards.length - i) * Math.random());
        let randomItem = this.cards.splice(randomPosition, 1);
        shuffledDeck.push(...randomItem);
      }
      return shuffledDeck;
    }

      
  
    dealDeck(players, shuffledCards) {
      console.log("Dealing Cards");
      let dealingCards1 = shuffledCards.splice(0,26);
      players[0].hands.push(...dealingCards1);
      let dealingCards2 = shuffledCards.splice(0, 26);
      players[1].hands.push(...dealingCards2);
    
    }
  }

  class Player {
    constructor(name) {     //the name of the player
      this.name = name;
      this.hand = [];       //an array to store the player's cards
      this.point= 0;       //the score of the player 
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
  
  start() {          //methods- initializeGame(); creates the players and the deck, shuffles the deck, and deals cards to each player
      this.players.push(new Player('Player 1'));
      this.players.push(new Player('Player 2'));
      console.log("Declare War!", this.players);

      let myDeck = new Deck();
      myDeck.createDeck();
      let shuffledDeck = myDeck.shuffledDeck();

      myDeck.dealDeck(this.players, shuffledDeck);
      //console.log(this.players);

      this.playGame();

      this.endGame();
    }
  
     
  
    playRound() {        
      console.log("Declare War");
      let player1 = this.players[0];
      let player2 = this.players[1];
      let roundWinner = "";
      let turn = 0;
      //this loop will run till one player runs out of cards, each iteration will pop the last card from each players array of cards and compare the values of the card and determine 
      while (player1.hands.length !== 0 && player2.hands.length !== 0) {
        let player1Card = player1.hands.pop();
        let player2Card = player2.hands.pop();
        if (player1Card.value > playerCard2.value) {
          roundWinner = player1.name;
          player1.points += 1;
          console.log("Turn: ", (turn += 1), "\nPlayer 1 card: ", player1Card.name, " of ", player1Card.suit, "\nPlayer 2 card: ", player2Card.name, " of ", player2Card.suit, " \n")
      
        }
        else if (player2Card.value > player1Card.value) {
          roundWinner = player2.name;
          player2.points += 1;
          console.log("Turn: ", (turn += 1), "\nPlayer 1 card: ", player1Card.name, " of ", player1Card.suit, "\nPlayer 2 card: ", player2Card.name, " of ", player2Card.suit, " \n")


        }
        else{
          console.log("Turn: ", (turn += 1), "\nPlayer 1 card: ", player1Card.name, " of ", player1Card.suit, "\nPlayer 2 card: ", player2Card.name, " of ", player2Card.suit, " \n")
        }


      }
    }
  endGame() {            // this winner will diplay when game is over and display winner 
    let gameWinner = " ";
    let player1 = this.player[0];
    let player2 = this.player[1];
    let winnerPoints = 0;

    if ( player1.points > player2.points) {
      gameWinner = player1.name;
      winnerPoints = player1.points
      alert("Game Over!" + gameWinner + "Won the game!\nFinal Scores:\n" + ": " + player1.points + "\n" + player2.name + ": " + player2.points + "\nThanks for playing");
      } else if (player2.points > player1.points) {
        gameWinner = player2.name;
        winnerPoints = player2.points;
        alert("Game Over!" + gameWinner + "Won the game!\nFinal Scores:\n" + ": " + player1.points + "\n" + player2.name + ": " + player2.points + "\nThanks for playing");
      } else {
        alert("Game Over! \nTIED GAME\nFinal SCORE:\n" + player1.name + ": " + player1.points + "\n" + player2.name + ": " + player2.points + "\nThanks for playing");

      }
    }

  }

  let game = new Game ();
  game.start