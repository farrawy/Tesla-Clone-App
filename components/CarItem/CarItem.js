import React from "react";
import { Text, View, ImageBackground, Dimensions } from "react-native";
import StyledButton from "../StyledButton/StyledButton";

import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      {/* View that will hold both Titles */}
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          onPress={() => {
            console.warn("primary");
          }}
        />
        <StyledButton
          type="secondary"
          onPress={() => {
            console.warn("secondary");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
