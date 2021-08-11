import React from "react";
import { isEqual } from 'lodash';
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { getDecks } from '../utils/api'
import Deck from './Deck'

function DeckList() {
  const [decks, setDecks] = useState([])

  useEffect(() => {
    const loadDecks = async () => {
      const decksInStorage = await getDecks()
      console.log(decksInStorage, decks.length);
      if (!isEqual(decksInStorage, decks) || decks.length === 0)
        setDecks(decksInStorage);
    }

    loadDecks();
  }, []);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      padding: 24,
      backgroundColor: "#eaeaea",
    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
    },
  });

  return (
    <View style={ styles.container }>
      {
        decks?.map(deck => (

          <Deck key={ deck.id } deck={ deck } />

        ))
      }
    </View>
  );
}

export default DeckList;
