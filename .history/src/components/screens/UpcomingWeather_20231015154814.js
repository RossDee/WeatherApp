import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import ListItem from '../components/ListItem'
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

const UpcomingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_text={item.dt_text}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  const {container,image} = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('/Users/rdi/code/fcc/WeatherApp/assets/upcoming-background.jpg')}
        style={image}
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
  image: {
    flex: 1,
  },
})

export default UpcomingWeather
