import React from 'react';
import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { getDeckById } from "../utils/api";

function QuizScreen({ route }) {
    const [cards, setCards] = useState([]);
    const [currentCardId, setCurrentCardId] = useState();
    const [seeAnswer, setSeeAnswer] = useState(false);
    const deckId = route?.params?.deckId;

    useEffect(() => {
        const loadDeck = async () => {
            const deckInStorage = await getDeckById(deckId);
            const hydratedCards = deckInStorage.cards.map(card => {

                return { ...card, answered: false, answeredCorrectly: false }
            });

            setCards(hydratedCards);
            setCurrentCardId(hydratedCards[0].id);

        };

        loadDeck();
    }, []);

    const handleSeeAnswerPress = () => {
        setSeeAnswer(true);
    }

    const handleAnswerPress = answeredCorrectly => {
        const cardsCopy = cards.map(card => {
            if (card.id === currentCardId) {
                card.answered = true;
                card.answeredCorrectly = answeredCorrectly;
            }

            return card;
        });


        setCards(cardsCopy);
        setSeeAnswer(false);

        const currentCard = cardsCopy.find(card => !card.answered);
        if (currentCard)
            setCurrentCardId(currentCard.id);
    }

    const renderResults = () => {
        const correctAnswers = cards.reduce((result, currentCard) => {
            if (currentCard.answeredCorrectly)
                return result + 1;

            return result;
        }, 0)

        return (
            <View>
                <Text>You answered correctly { correctAnswers } out of { cards.length } questions</Text>
            </View>
        );
    }

    if (cards.length === 0)
        return null;

    // get the first unanswered question
    const currentCard = cards.find(card => !card.answered);

    if (!currentCard)
        return renderResults();

    return (
        <View>
            { seeAnswer ?
                (
                    <View>
                        <Text>{ currentCard.answer }</Text>
                        <Button title="Correct" onPress={ () => handleAnswerPress(true) } />
                        <Button title="False" onPress={ () => handleAnswerPress(false) } />
                    </View>
                ) :
                (
                    <View>
                        <Text>{ currentCard.question }</Text>
                        <Button title="See Answer" onPress={ handleSeeAnswerPress } />
                    </View>
                )
            }
        </View>
    )
}

export default QuizScreen;