import React, { useState } from "react";
import { View, Picker, StyleSheet, Text } from "react-native";

export default function InputPicker(props) {
  const [selectedValue, setSelectedValue] = useState(props.default);

  return (
    <View style={StyleSheet.container}>
      <Text style={styles.label}>{props.label}</Text>
      <Picker
        // mode="dropdown"
        selectedValue={selectedValue}
        style={{ height: 50, width: "100%" }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        itemStyle={{
          color: "white",
          backgroundColor: "rgba(147, 100, 174, .3)",
        }}
      >
        {props.children}
      </Picker>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(147, 100, 174, .3)",
  },
  label: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});
