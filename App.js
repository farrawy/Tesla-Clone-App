import { StatusBar } from "expo-status-bar";
import {
  LogBox,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import CarsList from "./components/CarsList/CarsList";
import Header from "./components/Header/Header";

const data = require("./components/CarsList/cars");

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
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
