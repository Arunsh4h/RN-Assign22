import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Fragment } from "react";

const TabBar = ({ tabAttributes, setTab, activeTab }) => {
  return (
    <View style={styles.container}>
      {tabAttributes.map((e, i) => (
        <Fragment key={i}>
          <TouchableOpacity
            onPress={() => {
              setTab(e.name);
            }}
          >
            <Text
              style={{
                ...styles.tabText,
                color: activeTab === e.name ? "#007aff" : "gray",
              }}
            >
              {e.name} ({e.count})
            </Text>
          </TouchableOpacity>
        </Fragment>
      ))}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 18,
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
