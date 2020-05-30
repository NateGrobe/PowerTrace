import React from "react";
import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function StatusBoard() {
  return (
    <View>
      <Status />
    </View>
  );
}

const Status = () => {
  return (
    <View>
      <View style={styles.boardHeader}>
        <View style={styles.title}>
          <FontAwesome name="heartbeat" size={22} color="white" />
          <Text
            style={{
              color: "#fff",
              lineHeight: 21,
              fontSize: 18,
              margin: 5,
            }}
          >
            My Health Status
          </Text>
          <FontAwesome name="heartbeat" size={22} color="white" />
        </View>
        <Text
          style={{
            color: "#fff",
            fontSize: 10.5,
            width: "90%",
            marginLeft: 5,
          }}
        >
          Keep track of your health status and update it to keep those around
          you safe!
        </Text>
      </View>

      <View style={styles.boardContent}>
        <View style={styles.fixToText}>
          <Text>Current Status: </Text>
          <Button
            style={styles.button}
            color="rgba(255, 255, 255, .4)"
            title="Update Status"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boardHeader: {
    backgroundColor: "rgba(147, 100, 174, .5)",
    width: Dimensions.get("window").width - 20,
  },
  boardContent: {
    backgroundColor: "rgba(147, 100, 174, .3)",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    marginLeft: 5,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});