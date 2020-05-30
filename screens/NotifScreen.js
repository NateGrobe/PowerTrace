import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';

export default function GetStartedScreen() {
  return (
    <View style={styles.container}>
      <Report />
    </View>
  )
}

const Report = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>
        Notifications
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4bfff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  icons_flex: {
    display: "flex",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
