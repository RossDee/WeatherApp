import React from "react";
import { StyleSheet, View,Text, ImageBackground,SafeAreaView,StatusBar } from "react-native";
import {Feather} from '@expo/vector-icons'
import IconText from '../components/IconText'

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
                    <IconText iconName = {'sunrise'} iconColor = {'orange'} bodyText = {'06:00'}></IconText>
                    <IconText iconName = {'sunset'} iconColor = {'orange'} bodyText = {'18:00'}></IconText>
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
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },

}
);

export default City;