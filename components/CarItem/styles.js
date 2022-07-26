import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  carContainer: {
    width: width,
    height: height,
  },
  titles: {
    marginTop: "30%",
    width: width,
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    width: width,
    height: height,
    resizeMode: "cover",
    position: "absolute",
  },
});

export default styles;
