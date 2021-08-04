import React from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { addDeck } from "../utils/api";

class AddDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  
  handleSubmit = (title) => {
    addDeck(title);
  };
  handleTextChange = (title) => {
    this.setState({ title });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Enter Your Deck's Title"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleSubmit}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.setState(title)}
          
        >
          
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddDeck;

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
