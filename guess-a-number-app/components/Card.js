// PURELY A STYLING COMPONENT
import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

// ALLOWS EXTENERAL STYLE AS A PROP 
const Card = (props) => {
  return (
    <View style={{...styles.card, ...props.style}}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    // SHADOWS ARE ONLY FOR iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    // ELEVATION IS ONLY FOR ANDROID (DEFAULT MATERIAL DESIGN)
    elevation: 5,
    padding: 20,
    borderRadius: 5,
  },
});

export default Card;
