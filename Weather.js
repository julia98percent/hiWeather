import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Thunderstorm: {
    iconName: "",
    gradient: [],
  },
  Drizzle: {
    iconName: "",
    gradient: [],
  },
  Rain: {
    iconName: "",
    gradient: [],
  },
  Snow: {
    iconName: "",
    gradient: [],
  },
  Atmosphere: {
    iconName: "",
    gradient: [],
  },
  Clear: {
    iconName: "",
    gradient: [],
  },
  Clouds: {
    iconName: "",
    gradient: [],
  },
  Haze: {
    iconName: "",
    gradient: [],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.half}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName || "weather-sunset-up"}
          color="white"
        ></MaterialCommunityIcons>
        <Text style={styles.temp}>지금은 {temp}도예요!</Text>
      </View>
      <View style={styles.half}>
        <View style={{ ...styles.half, ...styles.textContainer }}>
          <Text style={styles.title}>Hi</Text>
          <Text style={styles.subtitle}>Hello</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  half: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "400",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
});
