import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const WelcomeView = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/person.png")}
        style={{
          marginBottom: 15,
        }}
      />

      <Text
        style={{
          color: "white",
        }}
      >
        Together, let’s stop the spread of COVID-19.
      </Text>

      <Image source={require("../assets/img/PT3.png")} />

      <View style={styles.icons_flex}>
        <Image source={require("../assets/img/person.png")} />
        <View style={{ paddingTop: 40 }}>
          <Image source={require("../assets/img/person1.png")} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4bfff",
    alignItems: "center",
    justifyContent: "center",
  },
  icons_flex: {
    display: "flex",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default WelcomeView;
