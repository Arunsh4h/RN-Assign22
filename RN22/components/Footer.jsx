import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonBox from "./ButtonBox";
import { useRoute } from "@react-navigation/native";

const Footer = ({ navigation }) => {
  const route = useRoute();
  return (
    <View style={styles.row}>
      <ButtonBox
        isActive={route.name === "Shift"}
        title="My shifts"
        onPress={() => navigation?.navigate("Shift")}
      />
      <ButtonBox
        isActive={route.name === "Available"}
        title="Available shifts"
        onPress={() => navigation?.navigate("Available")}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    width: "100%",
    bottom: 0,
    justifyContent: "space-evenly",
    backgroundColor: "#fafafb",
  },
});
