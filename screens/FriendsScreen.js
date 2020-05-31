import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";

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
    height: 40,
    width: 300,
    borderRadius: 5,
    marginBottom: 15,
  },
  inputContainer: {
    backgroundColor: "rgba(147, 100, 174, .3)",
    width: "100%",
  },
  inputComponent: {
    width: "90%",
  },
  label: { color: "#fff", padding: 10 },
  labelComponet: {
    backgroundColor: "rgba(147, 100, 174, .5)",
    marginTop: 40,
  },
  btn: {
    marginTop: 40,
    width: "90%",
  },
});
