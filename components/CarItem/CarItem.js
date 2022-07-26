import React from "react";
import { Text, View, ImageBackground, Dimensions } from "react-native";

import styles from "./styles";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />

      {/* View that will hold both Titles */}
      <View style={styles.titles}>
        <Text style={styles.title}>Model X</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
    </View>
  );
};

export default CarItem;
