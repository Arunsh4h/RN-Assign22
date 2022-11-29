import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "../constants/Colors";

import { cancelShift, convertMsToTime } from "../utils/helper";

const MyShiftItem = ({
  from,
  to,
  desc,
  status,
  id,
  handleIsActionTriggered,
}) => {
  const handleBooking = async () => {
    cancelShift(id)
      .then((res) => {
        //let data = res.data;
        handleIsActionTriggered(id);
      })
      .catch((err) => {
        console.log("err", err.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <View style={styles.timing}>
          <Text style={styles.fromToText}>{convertMsToTime(from)}</Text>
          <Text style={styles.fromToText}>-</Text>
          <Text style={styles.fromToText}>{convertMsToTime(to)}</Text>
        </View>
        <View>
          <Text style={styles.descText}>{desc}</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={{
            ...styles.cancelBtn,
            borderColor: "#E2006A",
          }}
          onPress={() => {
            handleBooking();
          }}
        >
          <Text
            style={{
              ...styles.cancelBtnTxt,
              color: "#E2006A",
            }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyShiftItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
  info: {
    fontSize: 20,
  },
  fromToText: {
    fontSize: 20,
  },
  timing: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descText: {
    fontSize: 20,
    color: Colors.lightGrayeshBlue,
  },
  cancelBtn: {
    borderWidth: 2,

    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  cancelBtnTxt: {
    fontSize: 20,
    fontWeight: "600",
  },
  statusText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  BookedTextColor: {
    color: "#4F6C92",
  },
  overLapTextColor: {
    color: "#E2006A",
  },
});
