import React from "react";
import { SafeAreaView,StyleSheet,Text ,FlatList, View} from "react-native";
import {Feather} from "@expo/vector-icons";

const DATA = [
    {
        dt_text: "2021-03-01 12:00:00",
        main:{
            temp_max: 10,
            temp_min: 5,
        },
        weather:[
            {
                main: "Clouds",
            }
        ]
    },
    {
        dt_text: "2021-03-01 15:00:00",
        main:{
            temp_max: 10,
            temp_min: 5,
        },
        weather:[
            {  
                main: "suny",
            }
        ]
    },
    {
        dt_text: "2021-03-01 18:00:00",
        main:{
            temp_max: 10,
            temp_min: 5,
        },
        weather:[
            {
                main: "rain",
            }
        ]
    }
];
const Item = (props) => {
    const {dt_text,min,max,condition} = props
    return (
        <View>
            <Feather name={condition} size={50} color="white" />
            <Text>{dt_text}</Text>
            <Text>{min}</Text>

            <Text>{max}</Text>
        </View>
    )
}   
const UpcomingWeather = () => {
    const renderItem = ({item}) => {
        return (
            <Item condition={item.weather[0].main} 
                dt_text={item.dt_text}
                min={item.main.temp_min}
                max={item.main.temp_max}
            />
        )
    }
    return (<SafeAreaView styles={styles.container} >
            <Text>Upcoming Weather</Text>
            <FlatList
                data={DATA}
                renderItem={({item}) }/>
    </SafeAreaView>)
}
const styles = StyleSheet.create({
    container:{
    },
});

export default UpcomingWeather;