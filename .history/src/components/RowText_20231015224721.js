import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RowText = (props) => {
  const { messageOne, messageTwo } = props;
  return;
  <View style={containerStyles}>
    <Text style={message}>{messageOne}</Text>
    <Text style={style.highLow}>{messageTwo}</Text>
  </View>;
};

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold",
  },
});
export default RowText;
