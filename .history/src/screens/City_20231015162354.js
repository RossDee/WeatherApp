import React from "react";
import { StyleSheet, Text, ImageBackground,SafeAreaView } from "react-native";

const City = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground source = {require('../../assets/city-background.jpg')} style={styles.imageLayout}>
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
    marginTop: StatusBar.cu,
}
});

export default City;