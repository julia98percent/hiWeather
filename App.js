import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";
import Forecast from "./Forecast";

const API_KEY = "9fc7c499ef4209962a4e21f8effcbdef";
const language = "en";
export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: { main, weather, name },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?&lang=${language}&lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp: main.temp,
      temp_max: main.temp_max,
      temp_min: main.temp_min,
      desc: weather[0].description,
      name,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync(); //Return Promise
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: true });
    } catch (error) {
      Alert.alert("Noooo...:O", "cannot access your GPS information");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const {
      isLoading,
      temp,
      temp_min,
      temp_max,
      condition,
      name,
      desc,
    } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather
        temp={Math.round(temp)}
        condition={condition}
        name={name}
        desc={desc}
        temp_min={temp_min}
        temp_max={temp_max}
      />
    );
  }
}
