import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeckNavigator from './DeckNavigator';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

function HomeNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeScreen"
                component={ HomeScreen }
                options={ { unmountOnBlur: true } }
            />
            <Tab.Screen
                name="DeckNavigator"
                component={ DeckNavigator }
                options={ { unmountOnBlur: true } }
            />
        </Tab.Navigator>
    );
}

export default HomeNavigator;
