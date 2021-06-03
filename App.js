import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "0f42b967f617ff0df8398e0696f140d1";
const weatherURL = (lat, lon) =>
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [temperature, setTemperature] = useState(null);
  const [weat, setWeat] = useState([]);
  const [name, setName] = useState(null);
  const [rise, setRise] = useState(null);
  const [set, setSet] = useState(null);

  const concatZero = (text) => {
    if (parseInt(text) < 10) {
      return `0${text}`;
    }
    return text;
  };

  const getDetail = async ({ latitude, longitude }) => {
    const {
      data: {
        main: { temp },
        weather,
        name,
        sys: { sunrise, sunset },
      },
    } = await axios.get(weatherURL(latitude, longitude));
    const riseInTime = new Date(sunrise * 1000);
    const setInTime = new Date(sunset * 1000);
    setTemperature(Math.floor(temp));
    setWeat(weather[0]);
    setName(name);
    setRise(
      `${concatZero(riseInTime.getHours())}:${concatZero(
        riseInTime.getMinutes()
      )}`
    );
    setSet(
      `${concatZero(setInTime.getHours())}:${concatZero(
        setInTime.getMinutes()
      )}`
    );
    setLoading(false);
  };

  const getWeather = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const { coords } = await Location.getCurrentPositionAsync();
      getDetail(coords);
    } catch {
      Alert.alert(
        "Location Access Failed",
        "You can turn it on manually in Settings."
      );
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Weather
      temperature={temperature}
      weather={weat}
      name={name}
      sunrise={rise}
      sunset={set}
    />
  );
};

export default App;
