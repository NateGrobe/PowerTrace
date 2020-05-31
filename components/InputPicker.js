import React, { useState } from "react";
import { View, Picker, StyleSheet, Text } from "react-native";

export default function InputPicker({ defaultChoice, label, children, returnInput }) {
  const [selectedValue, setSelectedValue] = useState(defaultChoice);

  const updateItem = (itemValue, itemIndex) => {
    setSelectedValue(itemValue)
    returnInput(itemValue)
  };

  return (
    <View style={StyleSheet.container}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        // mode="dropdown"
        selectedValue={selectedValue}
        style={{ height: 50, width: "100%" }}
        onValueChange={updateItem}
        itemStyle={{
          color: "white",
          backgroundColor: "rgba(147, 100, 174, .3)",
        }}
      >
        {children}
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
