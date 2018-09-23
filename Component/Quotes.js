import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Quote } from "./Quote";

export class Quotes extends Component {
  render() {
    const { quotes, onNewQuote } = this.props;
    return (
      <View style={styles.container}>
        {quotes.map(quote => (
          <Quote
            QuoteId={quote.id}
            QuoteText={quote.value}
            QuoteAuthor={quote.auth}
          />
        ))}
        <TouchableOpacity style={styles.button} onPress={onNewQuote}>
          <Text>Add New Quote</Text>
        </TouchableOpacity>
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
  },
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 20,
    shadowOpacity: 0.35
  }
});
export default Quotes;
