import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

// BUILT OUTSIDE COMPONENT TO AVOID RE-RENDERING, FOR PERFORMANCE (NO PROPS OR STATE USED...)
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  // WILL RETURN NUMBER BETWEEN MIN AND MAX
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScren = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween())
};

const styles = StyleSheet.create({});

export default GameScren;
