import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

export default function ButtonBox({ onPress, title, isActive }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text
        style={{
          ...styles.textBaseColor,
          color: !isActive ? "#9a9b9b" : "#007aff",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafb",
    padding: 20,
    width: "48%",
    zIndex: 10,
    paddingBottom: 40,
  },
  textBaseColor: {
    fontWeight: "bold",
    fontSize: 19,
    alignSelf: "center",
  },
});
