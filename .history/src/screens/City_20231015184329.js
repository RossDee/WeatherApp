import React from "react";
import { StyleSheet, View,Text, ImageBackground,SafeAreaView,StatusBar } from "react-native";
import {Feather} from '@expo/vector-icons'

const City = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground source = {require('../../assets/city-background1.jpg')} style={styles.imageLayout}>
                <Text style = {[styles.cityName,styles.cityText]}>London</Text>
                <Text style = {[styles.countryName, styles.cityText]}>UK</Text>
                <View style = {styles.populationWrapper}>
                    <Feather name = {'user'} size = {50} color = {"red"}>
                    <Text style={styles.populationText}>8000</Text>
                    </Feather>
                </View>
                <View style ={styles.riseSetWrapper}>
                    <Feather name = {'sunrise'} size ={50} color={'white'}>
                        <Text style={styles.riseSetText}>10:57:59am</Text>
                    <Feather name = {'sunset'} size = {50} color = {'white'}>
                        <Text>18:57:59am</Text>
                    </Feather>

                    </Feather>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageLayout: {
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
    },
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
    populationWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'white',
        fontWeight: 'bold',
    },
    riseSetWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 2,
        marginLeft: 7.5,
        color: 'white',
        fontWeight: 'bold',
    },

}
);

export default City;