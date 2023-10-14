import React from "react";
import { SafeAreaView,StyleSheet,Text ,FlatList} from "react-native";

const DATA = [
    
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