import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const Heading = ({ title, noOfShift, hrs, withTime }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{title}</Text>
      {withTime && (
        <>
          <Text style={{ ...styles.descText, marginRight: 5 }}>
            {noOfShift},
          </Text>
          <Text style={styles.descText}>{hrs ? `${hrs} hrs` : "0 hrs"}</Text>
        </>
      )}
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  headingText: {
    fontWeight: "600",
    fontSize: 24,
    color: Colors.grayeshBlue,
    marginRight: 20,
  },
  descText: {
    fontSize: 20,
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: Colors.gray,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
