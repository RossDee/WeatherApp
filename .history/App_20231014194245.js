import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style = {style.wrapper}>
    <View style = {style.container}>
      <Text>Current Weather</Text>
    </View>
    </SafeAreaView>
  )
}
const style  =StyleSheet.create({
  container:{
    backgroundColor:'pink'
  }
})
export default App