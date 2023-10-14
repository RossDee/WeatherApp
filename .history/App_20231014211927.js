import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {Feather} from '@expo/vector-icons'

const App = () => {
  return (
    <SafeAreaView style = {style.wrapper}>
    <View style = {style.container}>
      <F></F>
      <Text style={style.temp} >6</Text>
      <Text style = {style.feels}>Feels like 5</Text>
      <View style = {style.highLowWrapper}>
        <Text style = {style.highLow}>High:8</Text>
        <Text style = {style.highLow}>Low:6</Text>
      </View>
    </View>
    <View style = {style.bodyWrapper}>
        <Text style = {style.description}>Its Sunny</Text>
      <Text style = {style.message}>Its perfect T-shirt weather</Text>
    </View>
    </SafeAreaView>
  )
}
const style  =StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor:'pink',
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
  },
  highLowWrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'50%', 
  },
  bodyWrapper:{
    width:'90%',
    padding:10,
    borderRadius:20,
    marginTop:20,
  },
  description:{
    fontSize:48,
    fontWeight:'bold',
  },
  message:{
    fontSize:30,
  }
})

export default App