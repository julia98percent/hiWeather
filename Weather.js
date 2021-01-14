import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Mist: {
    iconName: "weather-fog",
    gradient: ["#9FA4C4", "#B3CDD1"],
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#434343", "#000000"],
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#6782B4", "#B1BFD8"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#09203F", "#537895"],
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#D7E1EC", "#FFFFFF"],
  },
  Atmosphere: {
    //이게 뭐야...?
    iconName: "",
    gradient: [],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#5899E2", "#FFFFFF"],
  },
  Clouds: {
    iconName: "cloud-outline",
    gradient: ["#8693AB", "#BDD4E7"],
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#CFD6E6", "#E7EFF9"],
  },
};

export default function Weather({
  temp,
  condition,
  name,
  desc,
  temp_min,
  temp_max,
}) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.half}>
        <Text style={styles.temp}>{name}</Text>
        <Text style={styles.temp}>{desc}!</Text>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName || "question"}
          color="white"
        ></MaterialCommunityIcons>
      </View>
      <View style={styles.half}>
        <View style={{ ...styles.half, ...styles.textContainer }}>
          <Text style={styles.title}> It's {temp}°C </Text>
          <Text style={styles.subtitle}>
            Lowest: {temp_min}°C / Highest: {temp_max}°C
          </Text>
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
    fontSize: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
});
