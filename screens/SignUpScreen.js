import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  )
}

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/confetti.png")}
        }}
      />
    </View>

  return (
    <View style={styles.container}>
      <Text> Name </Text>
      <Text> Email </Text>
      <Text> Password </Text>
      <Text> Re-enter Password </Text>
  )

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
