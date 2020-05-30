import React, { useState } from "react";
import { View, Text, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DatePicker() {
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const showDatePicker = () => {
    setShow(true);
  };

  const onChange = (event, selectedDate) => {
    const randomDate = new Date(1598051730000);
    const currentDate = selectedDate || randomDate;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <View>
      <Text>Date Tested Positive</Text>
      <Button
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
