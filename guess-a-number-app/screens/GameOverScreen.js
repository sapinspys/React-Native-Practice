import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>GAME OVER</Text>
      <Text>Number was guessed in {props.rounds} rounds!</Text>
      <Text>Your number: {props.userChoice}</Text>
      <Button title="New Game" onPress={props.onRestartGame} />
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
