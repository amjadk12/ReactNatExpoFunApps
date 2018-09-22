import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Product } from "./Component/product";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>App is testing from the VS code</Text>
        <Product />
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
