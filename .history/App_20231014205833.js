import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style = {style.wrapper}>
    <View style = {style.container}>
      <Text>Current Weather</Text>
      <Text style={style.temp} >6</Text>
      <Text style = {stype}>Feels like 5</Text>
      <Text>High:8 Low:6</Text>
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
  },
  temp:{
    color:'black',
    fontSize:48,

 }
})
export default App