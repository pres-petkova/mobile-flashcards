import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
//import { NavigationContainer } from '@react-navigation/native';

class DeckList extends React.Component {
    render(){

        const styles = StyleSheet.create({
            container: {
              flex: 1,
              padding: 24,
              backgroundColor: "#eaeaea"
            },
            title: {
              marginTop: 16,
              paddingVertical: 8,
              borderWidth: 4,
              borderColor: "#20232a",
              borderRadius: 6,
              backgroundColor: "#61dafb",
              color: "#20232a",
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold"
            }
          });


        return (
            
            <View style={styles.container}>
                <TouchableOpacity> 
                
                <Text style={styles.title}>Deck Array</Text>

                </TouchableOpacity>
                
            </View>
            
            
        );

        
    }
}

export default DeckList;