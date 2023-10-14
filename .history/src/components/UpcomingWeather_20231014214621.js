import React from "react";
import { SafeAreaView,StyleSheet,Text } from "react-native";

const UpcomingWeather = () => {
    return <SafeAreaView>
        <View style = {styles.container}>
            <Text>Upcoming Weather</Text>
        </View>
    </SafeAreaView>;
}

const styles = StyleSheet.create({
    container:{
    },
});

export default UpcomingWeather;