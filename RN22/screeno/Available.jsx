import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ButtonBox from "../components/ButtonBox";

import { useRoute } from "@react-navigation/native";
import AvailableScreen from "../screens/AvailableScreen";

export default function Available({ navigation }) {
  const route = useRoute();
  return (
    <View style={{ flex: 1 }}>
      <AvailableScreen />

      <View></View>

      <View style={styles.row}>
        <ButtonBox
          isActive={route.name === "Shift"}
          title="My shifts"
          onPress={() => navigation.navigate("Shift")}
        />
        <ButtonBox
          isActive={route.name === "Available"}
          title="Available Shifts"
          onPress={() => navigation.navigate("Available")}
        />
      </View>
    </View>
  );
}
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
