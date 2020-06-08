import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>GAME OVER</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          // source={{uri: "https://katu.com/resources/media/efd0ef98-3733-455d-8a2e-756d41cfea02-large16x9_MountHood.jpg?1590594687505"}}
          // resizeMode={"contain"} // "COVER" BY DEFAULT
        />
      </View>
      {/* Text components WILL inherit styling */}
      <BodyText> 
        The number was guessed in{" "}
        <Text style={styles.highlight}>{props.rounds}</Text> round(s)!
      </BodyText>
      <BodyText>
        Your number: <Text style={styles.highlight}>{props.userChoice}</Text>
      </BodyText>
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
    width: 300, // WILL NEED RESPONSIVENESS LATER
    height: 300,
    borderRadius: 300,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    // OVERRIDING AUTOMATIC RESIZING ONLY NEEDED FOR WEB IMAGES
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.tertiary,
    fontFamily: "open-sans-bold"
  },
});

export default GameOverScreen;
