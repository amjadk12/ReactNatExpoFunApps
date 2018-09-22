import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Quote } from "./Component/Quote";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App is testing from the VS code</Text>
        <Quote
          QuoteText="Always think BIG, as thoughts does not have any limits!"
          QuoteAuthor="Amjad Khan W."
        />
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
