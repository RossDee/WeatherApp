import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style = {style.wrapper}>
    <View style = {style.container}>
      <Text style={style.temp} >6</Text>
      <Text style = {style.feels}>Feels like 5</Text>
      <view style>
        <Text style = {style.highLow}>High:8</Text>
        <Text style = {style.highLow}>Low:6</Text>
      </view>
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
 },
 feels:{
   color:'black',
   fontSize:30,
 },
  highLow:{
    color:'black',
    fontSize:20,
  }
})
export default App