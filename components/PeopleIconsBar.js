import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function PeopleIconsBar() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/img/person.png")} />
      <Image style={styles.img} source={require("../assets/img/person1.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
  },
  img: {
    width: 44,
    height: 44,
  },
});
