import React from "react";
import { SafeAreaView,StyleSheet,Text ,FlatList} from "react-native";

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
        <Viwe></Viwe>
    )
}   
const UpcomingWeather = () => {
    return (<SafeAreaView styles={styles.container} >
            <Text>Upcoming Weather</Text>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Text>{item.key}</Text>}/>
    </SafeAreaView>)
}
const styles = StyleSheet.create({
    container:{
    },
});

export default UpcomingWeather;