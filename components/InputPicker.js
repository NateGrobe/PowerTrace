import React, { useState } from "react";
import { View, Picker, StyleSheet, Text } from "react-native";

export default function InputPicker() {
  const [selectedValue, setSelectedValue] = useState("healthy");

  return (
    <View style={StyleSheet.container}>
      <Picker
        // mode="dropdown"
        selectedValue={selectedValue}
        style={{ height: 50, width: "100%" }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item
          style={styles.item}
          label="H E A L T H Y  &  V I R U S - F R E E 💪"
          value="healthy"
        />
        <Picker.Item
          label="D O W N  W I T H  S Y M P T O M S 😷"
          value="symptoms"
        />
        <Picker.Item
          label="T E S T E D  P O S I T I V E 🚨"
          value="positive"
          color="red"
        />
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
  },
});
