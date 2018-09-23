import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Quote } from "./Quote";

export class Quotes extends Component {
  render() {
    const { quotes, onNewQuote } = this.props;
    return (
      <View>
        {quotes.map(quote => (
          <Quote
            QuoteId={quote.id}
            QuoteText={quote.value}
            QuoteAuthor={quote.auth}
          />
        ))}
        <TouchableOpacity onPress={onNewQuote}>
          <Text>Add New Quote</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Quotes;
