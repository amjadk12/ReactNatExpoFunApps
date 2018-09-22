import React, { Component } from "react";
import { View, Text } from "react-native";
import { Quote } from "./Quote";

export class Quotes extends Component {
  render() {
    const { quotes } = this.props;
    return (
      <View>
        {quotes.map(quote => (
          <Quote
            QuoteId={quote.id}
            QuoteText={quote.value}
            QuoteAuthor={quote.auth}
          />
        ))}
      </View>
    );
  }
}

export default Quotes;
