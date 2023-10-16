import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RowText = (props) => {
  const { text, style } = props;
  return <Text style={[styles.textTheme, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold",
  },
});
export default RowText;
