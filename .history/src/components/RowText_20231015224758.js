import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RowText = (props) => {
  const {
    messageOne,
    messageTwo,
    containerStyles,
    messageOneStyles,
    messageTwoStyles,
  } = props;
  return;
  <View style={containerStyles}>
    <Text style={messageOneStyles}>{messageOne}</Text>
    <Text style={messageTwoStyles}>{messageTwo}</Text>
  </View>;
};

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold",
  },
});
export default RowText;
