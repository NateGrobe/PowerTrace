import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Power Trace</Text>
      <Text>Welcome Back!</Text>

      <Image source={require("./assets/img/PT3.png")} />

      {/* <Button title="Bluetooth" />
      <Button title="Location Services" /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4bfff",
    alignItems: "center",
    justifyContent: "center",
  },
});
