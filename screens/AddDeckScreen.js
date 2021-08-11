import React from "react";
import { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { addDeck } from "../utils/api";

function AddDeckScreen({ navigation }) {
  const [title, setTitle] = useState();

  const handleSubmit = async () => {
    if (title) {
      await addDeck(title);
      navigation.push("DeckScreen");
    }
  };

  const handleTextChange = (title) => {
    setTitle(title);
  };


  return (
    <View style={ styles.container }>
      <TextInput
        style={ styles.input }
        underlineColorAndroid="transparent"
        placeholder="Enter Your Deck's Title"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        onChangeText={ handleTextChange }
      />

      <TouchableOpacity
        style={ styles.submitButton }
        onPress={ handleSubmit }

      >


        <Text style={ styles.submitButtonText }> Submit </Text>
      </TouchableOpacity>
    </View>
  );

}

export default AddDeckScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
