const expect =chai.expect;

//this unit is to verify the method is creating cards in the right order.
decribe("create a card", function () {
    it("Should create an object with 3 parameters", function () {
        console.log("card");
        let suit = "Diamonds";
        let name = "Ace";
        let value = 14;
        let card = new Card(suit, name, value)
        console.log(card);
        console.log({ suit: suit, name: name, value: value });
        expect(card.to.deep.equal({suit: suit, name: name, value: value }));

    });
    it("Should return an array that is not in the same order as the original", function(){
        const deck = new Deck
        let shuffle = deck.shuffleDeck();
        const controlDeck = new Deck;
        const shuffledDeck = new Deck;
        shuffle = shuffleDeck.shuffleDeck();
        chai.assert.notEqual(shuffle, controlDeck.deck);
        

    });
});