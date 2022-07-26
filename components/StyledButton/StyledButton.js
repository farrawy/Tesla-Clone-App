import { Pressable, Text, View } from "react-native";
import React from "react";

import styles from "./styles";

const StyledButton = (props) => {
  const { type, onPress } = props;

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";
  const text = type === "primary" ? "Custom Order" : "Existing Inventory";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
