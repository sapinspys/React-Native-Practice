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

  return (
    <Modal visible={false}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
          // onFocus={setEnteredGoal.bind(this, "")}
        />
        {/* Option 1: */}
        {/* <Button title="ADD" onPress={() => props.addGoalHandler(enteredGoal)} /> */}
        {/* Option 2: */}
        <Button
          title="ADD"
          onPress={props.addGoalHandler.bind(this, enteredGoal)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  input: {
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
