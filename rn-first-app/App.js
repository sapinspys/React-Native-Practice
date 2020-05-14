import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    // Does not guarantee latest state snapshot
    // setCourseGoals([...courseGoals, enteredGoal]);

    // Instead, this guarantees latest state
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), goal: enteredGoal },
    ]);
  };

  const deleteGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  return (
    // View is similar to <div>
    // Supported styles found in component docs
    // VIEWS USE FLEXBOX BY DEFAULT, justifyContent aligns on main axis, alignItems aligns child elements on cross axis
    // onChangeText activates with every keystroke!
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler} />
      {/* Scroll functionality must be EXPLICIT, not included by default */}
      {/* ScrollView good for short lists, inefficient for long lists (renders all elements) */}
      {/* For 20+, or "Infinite" lists, use FlatLists! */}
      {/* FlatLists assign keys by default ONLY if data is a list of objects with KEY or ID PROP  */}
      {/* If no KEY or ID, ie. UID, use keyExtractor={(item, index) => item.UID}  */}
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={deleteGoalHandler}
            goal={itemData.item.goal}
          />
        )}
      />
    </View>
  );
}

// StyleSheet = regular object for now
// In the future StyleSheet will be able to apply styling performance improvements, use it!
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "whitesmoke",
    borderColor: "black",
    borderWidth: 1,
  },
});
