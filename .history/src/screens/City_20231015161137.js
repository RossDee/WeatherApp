import React from "react";
import { StyleSheet, Text, ImageBackground,SafeAreaView } from "react-native";

const City = () => {
    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground source = {require('../..')}>
            </ImageBackground>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default City;