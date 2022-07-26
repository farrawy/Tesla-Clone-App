import { Text, View, FlatList, Dimensions } from "react-native";
import React from "react";
import CarItem from "../CarItem/CarItem";

import cars from "./cars";
import styles from "./styles";

const { width, height } = Dimensions.get("window");
const CarsList = () => {
  return (
    <View>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={height}
      />
    </View>
  );
};

export default CarsList;
