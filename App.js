import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Quotes } from "./Component/Quotes";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App is testing from the VS code</Text>
        <Quotes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
