import React from "react";
import styled from "styled-components/native";
import Header from "./Header";
import { StatusBar } from "expo-status-bar";
import { Fontisto } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const isNight = () => {
  const date = new Date(Date.now());
  if (date.getHours() >= 17 || date.getHours() <= 5) {
    return true;
  }
  return false;
};

const weatherDict = {
  Thunderstorm: {
    icon: "lightning",
    gradient: ["#3498db", "#2c3e50"],
  },
  Drizzle: {
    icon: "rain",
    gradient: ["#fffcdc", "#d9a7c7"],
  },
  Rain: {
    icon: "rain",
    gradient: ["#606c88", "#3f4c6b"],
  },
  Snow: {
    icon: "snow",
    gradient: ["#b6fbff", "#83a4d4"],
  },
  Mist: {
    icon: "fog",
    gradient: ["#FBD3E9", "#BB377D"],
  },
  Smoke: {
    icon: "fog",
    gradient: ["#9bc5c3", "#616161"],
  },
  Haze: {
    icon: "fog",
    gradient: ["#FFB88C", "#DE6262"],
  },
  Dust: {
    icon: "fog",
    gradient: ["#D3CBB8", "#6D6027"],
  },
  Fog: {
    icon: "fog",
    gradient: ["#EFEFBB", "#D4D3DD"],
  },
  Sand: {
    icon: "fog",
    gradient: ["#108dc7", "#ef8e38"],
  },
  Ash: {
    icon: "fog",
    gradient: ["#a73737", "#7a2828"],
  },
  Squall: {
    icon: "rains",
    gradient: ["#928DAB", "#1F1C2C"],
  },
  Tornado: {
    icon: "fog",
    gradient: ["#E5E5BE", "#003973"],
  },
  Clear: {
    icon: isNight() ? "night-clear" : "day-sunny",
    gradient: isNight() ? ["#536976", "#292E49"] : ["#FDC830", "#F37335"],
  },
  Clouds: {
    icon: "cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
  },
};

const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Weather = ({ temperature, weather, name, sunrise, sunset }) => {
  return (
    <LinearGradient
      colors={weatherDict[weather.main].gradient}
      style={{ flex: 1 }}
    >
      <StatusBar style="dark" />
      <Header
        sunrise={sunrise}
        sunset={sunset}
        temperature={temperature}
        name={name}
      />
      <Container>
        <Fontisto
          name={weatherDict[weather.main].icon}
          color="#2c2c2c"
          size={64}
        />
      </Container>
    </LinearGradient>
  );
};

export default Weather;
