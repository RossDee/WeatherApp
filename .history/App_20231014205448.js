import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style = {style.wrapper}>
    <View style = {style.container}>
      <Text>Current Weather</Text>
      <Text>6</Text>
      <Text>Fe</Text>
    </View>
    </SafeAreaView>
  )
}
const style  =StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'yellow',
  },
  container:{
    backgroundColor:'pink',
    flex:1,
    alignItems:'center',
  }
})
export default App