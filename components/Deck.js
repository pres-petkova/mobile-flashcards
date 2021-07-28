import React from "react";
import { StyleSheet, Text, View } from "react-native";

class Deck extends React.Component{

    render(){

        const styles = StyleSheet.create({
            container: {
              flex: 1,
              padding: 24,
              backgroundColor: "#838c9c"
            },
            title: {
              marginTop: 16,
              paddingVertical: 8,
              borderWidth: 4,
              borderColor: "#5a5276",
              borderRadius: 3,
              backgroundColor: "#00a999",
              color: "#20232a",
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold"
            }
          });

        return(

            <View styles={styles.container}>
                <Text styles={styles.title}> nya nya nya</Text>
            </View>
        )
        
    }
}

export default Deck;