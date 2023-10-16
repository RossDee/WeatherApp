import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native'
import { Feather  from '@expo/vector-icons'
import { OurChild } from './OurChild'

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
    <View style={styles.item}>
      <Feather name={condition} size={50} color='white' />
      <Text style={styles.date}>{dt_text}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
    </View>
  )
}
const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_text={item.dt_text}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('/Users/rdi/code/fcc/WeatherApp/assets/upcoming-background.jpg')}
        style={styles.image}
      >
        <Text>Upcoming Weather</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          /* The `keyExtractor` prop in the `FlatList` component is used to specify a unique key for each
        item in the list. In this case, it is using the `dt_text` property of each item as the key.
        This helps React efficiently update and re-render the list when changes occur. */
          keyExtractor={item => item.dt_text}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margionTop: StatusBar.currentHeight || 0,
    backgroundColor: 'red',
    width: '100%',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDiretion: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  image: {
    flex: 1,
  },
})

export default UpcomingWeather
