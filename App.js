import { StatusBar } from "expo-status-bar";
import {
  LogBox,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import CarItem from "./components/CarItem/CarItem";
const data = require("./assets/cars");

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={"Model X"}
        tagline={"Order Online for"}
        taglineCTA={"Touchless Delivery"}
        image={require("./assets/images/ModelX.jpeg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
