import React from "react";
import { Text, View, Button} from "react-native";

export default function RandomScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>A Very Random Screen</Text>
        <Button
        title="Go to Blah"
        onPress={() => navigation.navigate("Blah")}
      />
      </View>
    );
  }
  