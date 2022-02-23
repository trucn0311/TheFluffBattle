import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  return <Text style={styles.text}>This is the components screen</Text>;
};

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;
