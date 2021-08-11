import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';

function Deck({ deck, onPress }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 80,
      backgroundColor: "lightblue"

    },
    title: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#5a5276",
      borderRadius: 3,
      backgroundColor: "#00a999",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    }
  });

  const navigation = useNavigation();

  if (!deck) return null;

  return (
    <View style={ [styles.container, { flexDirection: 'row' }] }>
      <View style={ { flex: 1, } }>
        <TouchableOpacity
          onPress={ () => navigation
            .navigate(
              "DeckNavigator",
              {
                screen: 'DeckScreen',
                initial: false,
                params: { deckId: deck.id }
              }
            ) }
        >
          <Text>{ deck.title }</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Deck;