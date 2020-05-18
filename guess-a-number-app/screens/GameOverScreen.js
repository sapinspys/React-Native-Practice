import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GameOverScreen = (props) => {
    return (
        <View>
            <Text>Number guessed in {props.rounds} guesses!</Text>
        </View>
    )
};

// const styles = StyleSheet.create({

// });

export default GameOverScreen;
