import React from "react";
import { StyleSheet, Text, ImageBackground,SafeAreaView,StatusBar } from "react-native";
import {Feather} from '@expo/vector-icons'

const City = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground source = {require('../../assets/city-background1.jpg')} style={styles.imageLayout}>
                <Text style = {[styles.cityName,styles.cityText]}>London</Text>
                <Text style = {[styles.countryName, styles.cityText]}>UK</Text>
                <View>
                <Feather>
                    name = {user} size = {50} color = "red"
                </Feather>
                <Text></Text>
                </View>
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
        marginTop: StatusBar.currentHeight || 0,},
    cityName: {
        fontSize: 50,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        color: "white",
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: 'bold',
    },
}
);

export default City;