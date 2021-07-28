import * as React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddDeck from "./components/AddDeck";
//import DeckList from "./components/DeckList"
import setDeck from "./utils/api"

const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="AddDeck" component={AddDeck} />
    </Tab.Navigator>
  );
}
// const setItemStorage = async (key, value) => {
//   try {
//     await AsyncStorage.setItem(key, value);
//   } catch (error) {
//     // Error saving data
//     console.log("save data error");
//   }
// };

// const getItemStorage = async (key) => {
//   try {
//     const value = await AsyncStorage.getItem(key);
//     if (value !== null) {
//       // We have data!!
//       return value;
//     } else {
//       console.log("read data error");
//     }
//   } catch (error) {
//     // Error retrieving data
//     console.log("read data error");
//   }
// };

// const saveStorage = () => {
//   setItemStorage("String", "How are you?");
// };

// const readStorage = () => {
//   getItemStorage("LALALAL", "singingies").then((result) => {
//     alert("value" + result);
//   });
// };

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      
      <TouchableOpacity onPress={saveStorage}>
        <Text>Save String</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={readStorage}>
        <Text>Read String</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Random"
        onPress={() => navigation.navigate("Random")}
      />
    </View>
  );
}

function RandomScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>A Very Random Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Random" component={RandomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    alignItems: "center",
  }
})

export default App;
