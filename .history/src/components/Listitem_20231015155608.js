import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"

const ListItem = props => {
  const { dt_text, min, max, condition } = props
  const { item, date, temp } = styles
  return (
    <View style={item}>
      <Feather name={condition} size={50} color='white' />
      <Text style={date}>{dt_text}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor:'pink', 
        boarderWidth:5,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: "center",
    },
    date: {
        fontSize: 24,
        color: "white",
    },
    temp: {
        fontSize: 20,
        color: "white",
    },
    }) 
export default ListItem