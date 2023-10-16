import React from "react";
import { StyleSheet, View, Text, ImageBackground, SafeAreaView, StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons'
import IconText from '../components/IconText'

const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/city-background1.jpg')} style={styles.imageLayout}>
                <Text style={[styles.cityName, styles.cityText]}>London</Text>
                <Text style={[styles.countryName, styles.cityText]}>UK</Text>
                <View style={styles.populationWrapper}>
                    <IconText iconName={'user'} iconColor={'red'} bodyText={'8000'} bodyTextStyles={styles.populationText} ></IconText>
                </View>
                <View style={styles.riseSetWrapper}>
                    <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'10:40'} bodyTextStyles={styles.riseSetText}></IconText>
                </View>
                <View style={styles.riseSetWrapper}>
                    <IconText iconName={'sunset'} iconColor={'white'} bodyText={'18:40'} bodyTextStyles={styles.riseSetText}></IconText>
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
        flex: 1,
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
    row

}
);

export default City;