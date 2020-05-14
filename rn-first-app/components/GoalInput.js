import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  // Older
  // function goalInputHandler(enteredText) {
  //   setEnteredGoal(enteredText);
  // };

  // Modern
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        {/* Option 1: */}
        {/* <Button title="ADD" onPress={() => props.addGoalHandler(enteredGoal)} /> */}
        {/* Option 2: */}
        {/* Note: Buttons cannot take style prop, surround in a View */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // ensures it takes up all available space
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
