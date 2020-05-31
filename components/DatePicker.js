import React, { useState } from "react";
import { View, Text, Button, Platform, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DatePicker({ returnDate }) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const showDatePicker = () => {
    setShow(true);
  };

  const onChange = (event, selectedDate) => {
    const randomDate = new Date(1598051730000);
    const currentDate = selectedDate || randomDate;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    returnDate(currentDate)
  };

  return (
    <View>
      <Text style={styles.label}>Date Tested Positive</Text>
      <Button
        color="rgba(147, 100, 174, 1)"
        onPress={showDatePicker}
        title={date ? date.toString() : "N O T   A P P L I C A B L E  (N A)"}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date || new Date(1598051730000)}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 10,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    marginBottom: 10,
  },
});
