import React from "react";
import { StyleSheet, View,Text, ImageBackground,SafeAreaView,StatusBar } from "react-native";
import {Feather} from '@expo/vector-icons'

const IconText = (props) => {
    const {iconName, iconColor, bodyText} = props
    return (
        <View style = {styles.wrapper}>
                <Feather name = {iconName} size = {50} color = {iconColor}>
                <Text style={styles.populationText}>{bodyText}</Text>
            </Feather>
        </View>
    )
}

const styles = StyleSheet.create(
    {

    }
)

export default IconText