import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.goal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      marginVertical: 5,
      backgroundColor: "whitesmoke",
      borderColor: "black",
      borderWidth: 1,
    },
  });

export default GoalItem;
