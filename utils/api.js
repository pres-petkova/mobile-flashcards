import AsyncStorage from "@react-native-async-storage/async-storage";

const DECKS_KEY = "decks";

export const addDeck = async (title) => {
  try {
    const decks = await getDecks();

    const newDeck = {
      id: decks.length + 1,
      title: title,
      cards: []
    }

    decks.push(newDeck);
    await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));

    return newDeck;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const addCard = async (deckId, question, answer) => {
  try {
    const decks = await getDecks();
    const deckInStorage = decks.find(deck => deck.id === deckId);

    if (!deckInStorage)
      throw new Error('deck does not exist!');

    const newCard = {
      id: deckInStorage.cards.length + 1,
      question: question,
      answer: answer
    };

    deckInStorage.cards.push(newCard);
    await AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));

    return decks;
  } catch (error) {
    console.log('ERROR', error);
  }
}

export const getDecks = async () => {
  try {
    const value = await AsyncStorage.getItem(DECKS_KEY);

    if (value !== null) {
      return JSON.parse(value);
    } else {
      return [];
    }
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const getDeckById = async (id) => {
  try {
    const decks = await getDecks();

    const deck = decks.find(item => id === item.id);
    console.log('ahahahahaha', deck, decks, id, typeof id);
    return deck;
  } catch (error) {
    console.log('ERROR', error);
  }
};
