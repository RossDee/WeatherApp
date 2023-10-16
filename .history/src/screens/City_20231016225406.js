import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native";
import IconText from "../components/IconText";

const City = () => {
  const renderIconText = (iconName, iconColor, bodyText, bodyTextStyles) => (
    <IconText
      iconName={iconName}
      iconColor={iconColor}
      bodyText={bodyText}
      bodyTextStyles={styles[bodyTextStyles]}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/city-background1.jpg")}
        style={styles.imageLayout}
      >
        <Text style={styles.cityName}>London</Text>
        <Text style={styles.countryName}>UK</Text>
        <View style={styles.populationWrapper}>
          {renderIconText("user", "red", "8000", "populationText")}
        </View>
        <View style={styles.riseSetWrapper}>
          {renderIconText("sunrise", "white", "10:40", "riseSetText")}
        </View>
        <View style={styles.riseSetWrapper}>
          {renderIconText("sunset", "white", "18:40", "riseSetText")}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

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
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
  },
  countryName: {
    fontSize: 30,
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
  },
  populationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "white",
    fontWeight: "bold",
  },
  riseSetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default City;
