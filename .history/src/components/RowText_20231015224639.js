import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RowText = (props) => {
  const { text, style } = props;
  return;
  <View style={style.highLowWrapper}>
    <Text style={style.highLow}>{messageOne}</Text>
    <Text style={style.highLow}>Low:6</Text>
  </View>;
};

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold",
  },
});
export default RowText;
