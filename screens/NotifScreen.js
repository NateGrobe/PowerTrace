import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

import ContactBoard from "../components/ContactBoard";

export default function NotifScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contactBoard}>
        <ContactBoard date={Date(1590885044091)} />
      </View>
      <View style={styles.contactBoard}>
        <ContactBoard date={Date(1590885044091)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4bfff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  contactBoard: {
    marginTop: 20,
  },
  // icons_flex: {
  //   display: "flex",
  //   width: "90%",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
});
