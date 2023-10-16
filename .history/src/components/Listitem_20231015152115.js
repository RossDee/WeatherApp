import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Feather } from "@expo/vector-icons"

const Item = props => {
  const { dt_text, min, max, condition } = props
  return (
    <View style={styles.item}>
      <Feather name={condition} size={50} color='white' />
      <Text style={styles.date}>{dt_text}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}