import React from "react";
import { Button, TouchableOpacity, Text, View } from "react-native";
import { addDeck, getDecks } from "../utils/api";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />

      <TouchableOpacity onPress={() => addDeck()}>
        <Text>Save String</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => getDecks()}>
        <Text>Read String</Text>
      </TouchableOpacity>
    </View>
  );
}
