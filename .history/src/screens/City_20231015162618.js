import React from "react";
import { StyleSheet, Text, ImageBackground,SafeAreaView,StatusBar } from "react-native";

const City = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground source = {require('../../assets/city-background.jpg')} style={styles.imageLayout}>
                <Text style = {styles.cityName}>London</Text>
                <Text>UK</Text>
            </ImageBackground>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageLayout: {
        flex:1,
    marginTop: StatusBar.currentHeight || 0,
    cityName: {
        fontSize: 50,
        color: "white",
        justifyContent: "center",
        alignSelf: "center",
        font
    },
}
});

export default City;