import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import DeckList from "../components/DeckList";
import Deck from "../components/Deck"

const screens = {

    DeckList: {
        screen: DeckList
    },
    Deck: {
        screen: Deck
    }

}

const HomeStack = createStackNavigator(screens)

export default NavigationContainer(HomeStack)