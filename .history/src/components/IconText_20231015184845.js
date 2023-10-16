import React from "react";
import { StyleSheet, View,Text, ImageBackground,SafeAreaView,StatusBar } from "react-native";
import {Feather} from '@expo/vector-icons'

const IconText = (props) => {
    const {name, text, color} = props
    return (
        <View style = {styles.wrapper}>
                <Feather name = {'user'} size = {50} color = {"red"}>
                    <Text style={styles.populationText}>8000</Text>
            </Feather>
        </View>
    )
}

const styles = StyleSheet.create(
    {

    }
)

export default IconText