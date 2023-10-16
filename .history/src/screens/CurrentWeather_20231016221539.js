import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
const CurrentWeather = () => {
  return (
    <SafeAreaView style={style.wrapper}>
      <View style={style.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={style.temp}>6</Text>
        <Text style={style.feels}>Feels like 5</Text>
        <RowText
          messageOne={"high:8"}
          messageTwo={"Low:6"}
          containerStyle={style.highLowWrapper}
          messageOneStyle={style.highLow}
          messageTwoStyle={style.highLow}
        />
      </View>
      <RowText
        messageOne={"It's Synny"}
        messageTwo={"Its a perfect t-shirt weather"}
        containerStyle={style.highLowWrapper}
        messageOneStyle={style.highLow}
        messageTwoStyle={style.highLow}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "pink",
  },
  container: {
    backgroundColor: "pink",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  bodyWrapper: {
    width: "90%",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    paddingLeft: 25,
    marginBottom: 50,
  },
  description: {
    fontSize: 48,
    fontWeight: "bold",
  },
  message: {
    fontSize: 30,
  },
});

export default CurrentWeather;
