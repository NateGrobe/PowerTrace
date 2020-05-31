import React, { useState } from "react";
import { Text, View, StyleSheet, Button, Image, TextInput } from "react-native";
import { useLinkProps } from "@react-navigation/native";


export default function SignupScreen(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const addUser = () => {
    if (password === repeatedPassword) {
      const user = {
        username: username,
        password: password,
        infected: false,
      } 
    props.handleSignUp(user)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={require("../assets/img/signupHeader.png")} />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder=" Username"
          value={username}
          onChangeText={(username) => setUsername(username)}
        />
        <TextInput
          style={styles.input}
          placeholder=" Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <TextInput
          style={styles.input}
          placeholder="Re-enter Password"
          value={repeatedPassword}
          secureTextEntry={true}
          onChangeText={(repeatedPassword) =>
            setRepeatedPassword(repeatedPassword)
          }
        />
        {password !== repeatedPassword && (
          <Text style={{ color: "red" }}>Passwords should be the same</Text>
        )}
        <View style={styles.btnRow}>
          <View>
            <Button
              color="#9364AE"
              title="  Back  "
              onPress={props.handleBack}
            />
          </View>
          <View>
            <Button
              color="#9364AE"
              title="  Sign Up  "
              onPress={addUser}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#d4bfff",
  },
  btn: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  imageView: {
    marginTop: 50,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    width: 300,
    borderRadius: 5,
    marginBottom: 15,
  },
  btnRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
