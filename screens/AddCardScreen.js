import React from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import { Navigation } from 'react-native-navigation';
import { addCard } from '../utils/api';
import { useState } from 'react';

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

function AddCardScreen({ navigation, route }) {
    const deckId = route?.params?.deckId;
    const [question, setQuestion] = useState()
    const [answer, setAnswer] = useState()

    const handleTextChangeQuestion = (question) => {
        setQuestion(question)
    };

    const handleTextChangeAnswer = (answer) => {
        setAnswer(answer)
    };

    const handleSubmit = () => {
        console.log("blabla", question, answer, deckId)
        addCard(deckId, question, answer);

        navigation.push("DeckScreen", { deckId });
    }


    return (
        <View style={ styles.container } >
            <TextInput style={ styles.input }
                underlineColorAndroid="transparent"
                placeholder="Question"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={ handleTextChangeQuestion }
            />
            <TextInput style={ styles.input }
                underlineColorAndroid="transparent"
                placeholder="Answer"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={ handleTextChangeAnswer }
            />
            <TouchableOpacity
                style={ styles.submitButton }
                onPress={ handleSubmit }
            >
                <Text style={ styles.submitButtonText }> Add Card </Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddCardScreen;
