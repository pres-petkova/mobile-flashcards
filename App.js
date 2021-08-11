import * as React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddDeck from "./components/AddDeck";
import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";
import RandomScreen from "./screens/Random";
import BlahScreen from "./screens/Blah";
//import DeckList from "../mobile-flashcards/components"

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={ HomeScreen } />
      <Tab.Screen name="AddDeck" component={ AddDeck } />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer style={ styles.container }>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="Details" component={ DetailsScreen } />
        {/* <Stack.Screen name="Random" component={ RandomScreen } />
        <Stack.Screen name="Blah" component={ BlahScreen } /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});

export default App;
