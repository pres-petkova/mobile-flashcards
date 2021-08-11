import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
function Deck(props) {
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

  const deck = props?.deck;

  if (!deck) return null;

  return (
    <View style={ [styles.container, { flexDirection: 'row' }] }>
      <View style={ { flex: 1, } }>
        <TouchableOpacity>
          <Text>{ deck.title }</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Deck;