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
        {/* <Picker.Item
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
        /> */}
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
    backgroundColor: "rgba(147, 100, 174, .5)",
    // backgroundColor: "rgba(147, 100, 174, .3)",
  },
  label: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
  },
});
