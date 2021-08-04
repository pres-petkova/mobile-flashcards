import React from "react"
import { Text, View, Button } from "react-native";

export default function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Random"
          onPress={() => navigation.navigate("Random")}
        />
      </View>
    );
  }