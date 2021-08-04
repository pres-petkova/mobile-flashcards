import AsyncStorage from "@react-native-async-storage/async-storage";

// export function setDeck = AsyncStorage.setItem(key, value){
//     return(console.log("SETTING UP"))
// }

const DECKS_KEY = "decks";

export const addDeck = async (title) => {
  try {
    const decksString = await getDecks();
    const decks = deckString ? JSON.parse(decksString) : [];
    decks.push(title);
    await AsyncStorage.setItem(DECKS_KEY, decks);
  } catch (error) {
    // Error saving data
  }
};

export const getDecks = async () => {
  try {
    const value = await AsyncStorage.getItem(DECKS_KEY);
    if (value !== null) {
      // We have data!!
      console.log(JSON.parse(value)[0].alex);
    }
  } catch (error) {
    console.log("ERROR", error);
    // Error retrieving data
  }
};
