import React from "react";
import { View, Button, StyleSheet, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

import Colors from "../constants/colors"

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>GAME OVER</TitleText>
      <Image source={require('../assets/success.png')} />
      <BodyText>Number was guessed in {props.rounds} rounds!</BodyText>
      <BodyText>Your number: {props.userChoice}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestartGame} color={Colors.secondary} />
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
