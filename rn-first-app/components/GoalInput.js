import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const GoalInput = (props) => {
  return (
    <View style={styles.inputContainer}>
    <TextInput
      placeholder="Course Goal"
      style={styles.input}
      onChangeText={props.goalInputHandler}
      value={props.enteredGoal}
    />
    <Button title="ADD" onPress={props.addGoalHandler} />
  </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    input: {
      width: "70%",
      borderColor: "black",
      borderWidth: 1,
      padding: 10,
    },
  });

export default GoalInput;
