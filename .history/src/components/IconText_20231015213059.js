import React from "react";
import { StyleSheet, View,Text, ImageBackground,SafeAreaView,StatusBar } from "react-native";
import {Feather} from '@expo/vector-icons'

const IconText = (props) => {
    const {iconName, iconColor, bodyText,bodyTextStyles} = props
    return (
        <View style = {style.cont}>
                <Feather name = {iconName} size = {50} color = {iconColor}>
                <Text style={[styles.textTheme,bodyTextStyles]}>{bodyText}</Text>
            </Feather>
        </View>
    )
}

const styles = StyleSheet.create({textTheme: {
        fontWeight:'bold',
    },

    }
)

export default IconText