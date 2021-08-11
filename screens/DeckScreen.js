import isEqual from "lodash.isequal";
import React from "react";
import { useEffect, useState } from "react";
import { View, Button, Text } from "react-native";
import { getDeckById } from "../utils/api";

function DeckScreen({ route, navigation }) {
    const [deck, setDeck] = useState();
    const deckId = route?.params?.deckId;

    useEffect(() => {
        const loadDeck = async () => {
            const deckInStorage = await getDeckById(deckId);

            if (!isEqual(deckInStorage, deck) || deck === undefined)
                setDeck(deckInStorage);
        };

        loadDeck();
    }, []);

    return (
        <View>
            <Text>Deck Name: { deck?.title }</Text>
            <Text>number of cards: { deck?.cards?.length }</Text>

            <Button title="Add Card" />
            <Button title="Start Quiz" />

        </View>
    )
}
export default DeckScreen;