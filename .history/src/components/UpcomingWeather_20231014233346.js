import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar } from 'react-native'
import { Feather } from '@expo/vector-icons'

const DATA = [
  {
    dt_text: '2021-03-01 12:00:00',
    main: {
      temp_max: 10,
      temp_min: 5,
    },
    weather: [
      {
        main: 'sun',
      },
    ],
  },
  {
    dt_text: '2021-03-01 15:00:00',
    main: {
      temp_max: 10,
      temp_min: 5,
    },
    weather: [
      {
        main: 'cloud',
      },
    ],
  },
  {
    dt_text: '2021-03-01 18:00:00',
    main: {
      temp_max: 10,
      temp_min: 5,
    },
    weather: [
      {
        main: 'wind',
      },
    ],
  },
]
const Item = props => {
  const { dt_text, min, max, condition } = props
  return (
    <View>
      <Feather name={condition} size={50} color='white' />
      <Text>{dt_text}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
    </View>
  )
}
const UpcomingWeather = () => {
  const renderItem = ({ item }) => {
    return (
      <Item
        condition={item.weather[0].main}
        dt_text={item.dt_text}
        min={item.main.temp_min}
        max={item.main.temp_max}
      />
    )
  }
  return (
    <SafeAreaView styles={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        /* The `keyExtractor` prop in the `FlatList` component is used to specify a unique key for each
        item in the list. In this case, it is using the `dt_text` property of each item as the key.
        This helps React efficiently update and re-render the list when changes occur. */
        keyExtractor={item => item.dt_text}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {},
  flex: 1,
  margionTop: StatusBar.currentHeight || 0,
})

export default UpcomingWeather
