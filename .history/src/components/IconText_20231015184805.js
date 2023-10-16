import React from "react";
import { StyleSheet, View,Text, ImageBackground,SafeAreaView,StatusBar } from "react-native";
import {Feather} from '@expo/vector-icons'

const IconText = (props) => {
    const {name, text, color} = props
    return (
        <View style = {styles.wrapper}>
            <Feather name = {name} size = {50} color = {color}>
                <Text style = {styles.text}>{text}</Text>
            </Feather>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        
    }
)

export default IconText