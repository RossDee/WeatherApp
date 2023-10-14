import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CurrentWeather from "./src/components/CurrentWeather";
import UpcomingWeather from "./src/components/UpcomingWeather";

const App = () => {
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  );
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
});



export default App;