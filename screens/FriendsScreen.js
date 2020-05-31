import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FriendsScreen() {
  const [username, setUsername] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../assets/img/friends-header.png")} />
      <View style={styles.floatingText}>
        <Text
          style={{
            color: "#fff",
            fontSize: 12,
            padding: 10,
          }}
        >
          Easily keep track of your friends’ health status by adding them to
          your friend list!
        </Text>
      </View>
      <View style={styles.inputComponent}>
        <View style={styles.labelComponet}>
          <Ionicons name="md-person-add" size={30} color="#fff" />

          <Text style={styles.label}>Add to Friend List</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder=" Search Username"
            value={username}
            onChangeText={(username) => setUsername(username)}
          />
        </View>
      </View>
      <View style={styles.btn}>
        <Button
          title="Add Friend"
          color="rgba(147, 100, 174, 1)"
          onPress={() => console.log("Adding Friend " + username)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4bfff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  floatingText: {
    backgroundColor: "rgba(147, 100, 174, .5)",
    width: "90%",
  },
  input: {
    backgroundColor: "rgba(147, 100, 174, 0)",
    height: 45,
    width: 300,
    borderRadius: 5,
    marginBottom: 0,
  },
  inputContainer: {
    backgroundColor: "rgba(147, 100, 174, .3)",
    width: "100%",
  },
  inputComponent: {
    width: "90%",
  },
  label: {
    color: "#fff",
    padding: 10,
    fontSize: 22,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  labelComponet: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgba(147, 100, 174, .5)",
    marginTop: 30,
  },
  btn: {
    marginTop: 40,
    width: "90%",
  },
});
