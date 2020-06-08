import React from "react";
import { View, Button, StyleSheet, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>GAME OVER</TitleText>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          resizeMode={"contain"} // "COVER" BY DEFAULT
        />
      </View>
      <BodyText>Number was guessed in {props.rounds} rounds!</BodyText>
      <BodyText>Your number: {props.userChoice}</BodyText>
      <Button
        title="NEW GAME"
        onPress={props.onRestartGame}
        color={Colors.secondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
  },
  image: {
    width: "80%",
    height: 300,
  },
});

export default GameOverScreen;
