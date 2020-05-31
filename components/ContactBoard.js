import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ContactBoard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View style={styles.iconRow}>
          <Ionicons name="md-warning" size={30} color="rgba(255, 0, 0, .3)" />
          <Text style={styles.title}>Alert:</Text>
          <Ionicons name="md-warning" size={30} color="rgba(255, 0, 0, .3)" />
        </View>
      </View>
      <View style={styles.secondRow}>
        <Text style={styles.description}>
          You were in close proximity with a patient who just tested positive
          for COVID-19.{" "}
        </Text>
      </View>
      <View style={styles.secondRow}>
        <View style={styles.iconRow}>
          <Ionicons name="md-clock" size={18} color="#fff" />
          <Text style={styles.subtitle}>{" CONTACT DATE:"}</Text>
        </View>
        <Text style={styles.subtitle}>{props.date.toString()}</Text>
        <Text style={{ fontSize: 12, color: "#fff" }}>
          Please get tested at your nearest healthcare testing facility.{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  iconRow: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    textTransform: "uppercase",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  firstRow: {
    backgroundColor: "rgba(147, 100, 174, .75)",
  },
  secondRow: {
    backgroundColor: "rgba(147, 100, 174, .30)",
    borderTopColor: "rgba(147, 100, 174, .55)",
    borderTopWidth: 2,
    padding: 6,
  },
  description: {
    color: "#fff",
  },
});
