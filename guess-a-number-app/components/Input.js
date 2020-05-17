import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  // {...props} forwards props, allows for TextInput props to be passed through StartGameScreen
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
