import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Quotes } from "./Component/Quotes";
export default class App extends React.Component {
  state = {
    quotes: [
      {
        id: 1,
        value: "Always think BIG, as thoughts does not have any limits!",
        auth: "Amjad Khan"
      },
      { id: 2, value: "World is full of fun!", auth: "Charles S. P. Teresa" },
      { id: 3, value: "Test is life of Eater!", auth: "David Johnson" },
      {
        id: 4,
        value: "Expo is testing utility - Snack.expo.io",
        auth: "Expo Company"
      },
      {
        id: 5,
        value: "Empower every person and every organisation to acive more..",
        auth: "Satya Nadella"
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <Quotes quotes={this.state.quotes} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
