import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddDeckScreen from "../screens/AddDeckScreen";
import DeckScreen from "../screens/DeckScreen";

const Stack = createStackNavigator();

function DeckNavigator() {
    return (
        <Stack.Navigator initialRouteName="AddDeckScreen">
            <Stack.Screen
                name="AddDeckScreen"
                component={ AddDeckScreen }
                options={ { unmountOnBlur: true } }
            />
            <Stack.Screen
                name="DeckScreen"
                component={ DeckScreen }
                options={ { unmountOnBlur: true } }
            />
        </Stack.Navigator>
    );
}

export default DeckNavigator;

