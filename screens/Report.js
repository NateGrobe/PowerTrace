import React, { useState } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Picker,
} from "react-native";

import InputPicker from "../components/InputPicker";
import DatePicker from "../components/DatePicker";

import reportServices from '../services/report'

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <Report />
    </View>
  );
}

const Report = () => {
  const [status, setStatus] = useState('healthy')
  const [symptoms, setSymptoms] = useState('none')
  const [date, setDate] = useState(new Date())

  const submitReport = () => {
    let report = {
      status: status,
      symptoms: symptoms,
      date: date,
      person: global.id
    }

    reportServices
      .sendReport(report)
      .then(rep => {
        console.log(rep)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 10 }}>
        <Image source={require("../assets/img/healthreport.png")} />

        <View style={{ paddingTop: 18, paddingLeft: 60 }}>
          <Image source={require("../assets/img/firstaidkit.png")} />
        </View>
        <InputPicker 
          label="Change Status" 
          defaultChoice="healthy"
          returnInput={input => setStatus(input)}
        >
          <Picker.Item
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
        </InputPicker>
        <InputPicker 
          label="Exhibited Symptoms" 
          defaultChoice="none"
          returnInput={input => setSymptoms(input)}
        >
          <Picker.Item label="N O N E  ✔" value="none" />
          <Picker.Item label="F E V ER " value="fever" />
          <Picker.Item label="D R Y  C O U G H " value="cough" />
          <Picker.Item label="S O R E  T H R O A T " value="soreThroat" />
          <Picker.Item label="F A T I G U E " value="fatige" />
        </InputPicker>
        <DatePicker returnDate={returnedDate => setDate(returnedDate)} />
      </View>
      <Button title='Submit' onPress={submitReport} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4bfff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  icons_flex: {
    display: "flex",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  body_text: {
    fontSize: 40,
  },
});
