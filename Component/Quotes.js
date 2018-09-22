import React, { Component } from "react";
import { View, Text } from "react-native";
import { Quote } from "./Quote";

export class Quotes extends Component {
  render() {
    return (
      <View>
        <Quote
          QuoteText="1. Always think BIG, as thoughts does not have any limits!"
          QuoteAuthor="Amjad Khan W."
        />
        <Quote QuoteText="2. World is full of fun!" QuoteAuthor="Robert" />
        <Quote QuoteText="3. Test is life of Eater!" QuoteAuthor="Charles" />
      </View>
    );
  }
}

export default Quotes;
