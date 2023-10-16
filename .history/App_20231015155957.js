import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UpcomingWeather from './src/components/screens/UpcomingWeather'
import City from './src/components/screens/City'

const App = () => {
  return (
    <View style={styles.container}>
      <City/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
