import React from "react";
import { StyleSheet, View, Text, ImageBackground, SafeAreaView, StatusBar } from "react-native";
import IconText from '../components/IconText'

const City = () => {
    const {container,cityName,cityText,countryName,populationWrapper,populationText,riseSetWrapper,riseSetText} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city-background1.jpg')} style={styles.imageLayout}>
                <Text style={[cityName, cityText]}>London</Text>
                <Text style={[countryName, cityText]}>UK</Text>
                <View style={[populationWrapper,rowLayout]}>
                    <IconText iconName={'user'} iconColor={'red'} bodyText={'8000'} bodyTextStyles={populationText} ></IconText>
                </View>
                <View style={[styles.riseSetWrapper,styles.rowLayout]}>
                    <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'10:40'} bodyTextStyles={styles.riseSetText}></IconText>
                </View>
                <View style={[styles.riseSetWrapper,styles.rowLayout]}>
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
        alignItems: 'center',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },

}
);

export default City;