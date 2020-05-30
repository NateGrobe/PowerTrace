import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <Report />
    </View>
  )
}

const Report = () => {

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 10}}>
        <Image source={require("../assets/img/healthreport.png")} />

        <View style={{ paddingTop: 18, paddingLeft: 60}}>
          <Image source={require("../assets/img/firstaidkit.png")}
          />

          <Text style={{ color:"white"}}>
            Change Status
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <Text style={styles.body_text}>
      <Text style={{ paddingLeft: 10}}>
          <Text>
            Change Status
          </Text>
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4bfff",
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
  },
  icons_flex: {
    display:"flex",
    width: "90%",
    flexDirection:"row",
    justifyContent: "space-between"
  },
  body_text:{
    fontSize: 40
  }
});
