import React from "react";
import { Button, Text, View } from "react-native";
import DeckList from "../components/DeckList";
import Deck from "../components/Deck"

export default function HomeScreen({ navigation }) {
  return (
    <View style={ { flex: 1, alignItems: "center", justifyContent: "center" } }>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={ () => navigation.navigate("Details") }
      />
      <Deck />
      <DeckList />
    </View>
  );
}
