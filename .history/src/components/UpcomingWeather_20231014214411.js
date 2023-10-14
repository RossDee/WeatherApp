import React from "react";
import { SafeAreaView,StyleSheet } from "react-native";

const UpcomingWeather = () => {
    return <SafeAreaView>
        <View style = {styles.container}>
            <Text>Upcoming Weather</Text>
        </View>
    </SafeAreaView>;
}

Const styles = StyleSheet.create({
    container:{
        backgroundColor:"pink",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
});

export default UpcomingWeather;