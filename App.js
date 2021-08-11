import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeNavigator from "./routes/HomeNavigator";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer style={ styles.container }>
      <Stack.Navigator initialRouteName="HomeNavigator">
        <Stack.Screen name="HomeNavigator" component={ HomeNavigator } />
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
