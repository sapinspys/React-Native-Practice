import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>GAME OVER</Text>
      <Text>Number was guessed in {props.rounds} rounds!</Text>
      <Text>Your number: {props.userChoice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
