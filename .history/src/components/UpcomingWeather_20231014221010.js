import React from "react";
import { SafeAreaView,StyleSheet,Text ,FlatList} from "react-native";

const DATA = [
    {
        dt_text: "2021-03-01 12:00:00",
        main:{
            temp_max: 10,
            temp
        }
    }
];
const UpcomingWeather = () => {
    return (<SafeAreaView styles={styles.container} >
            <Text>Upcoming Weather</Text>
            <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}/>
    </SafeAreaView>)
}
const styles = StyleSheet.create({
    container:{
    },
});

export default UpcomingWeather;