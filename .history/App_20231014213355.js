import React from "react";
import { StyleSheet, Text, View } from "react-native";
const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text> 
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