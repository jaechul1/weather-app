import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.text}>Getting the weather...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fbfaf5",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 16,
  },
});

export default Loading;
