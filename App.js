import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Button,
  Image,
  Text,
  Dimensions,
  TextInput,
} from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import StartScreen from "./screens/StartScreen";
import SignupScreen from "./screens/SignupScreen";

import loginServices from "./services/login";
import userServices from "./services/user";

const Stack = createStackNavigator();

export default function App() {
  const [started, setStarted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const isLoadingComplete = useCachedResources();
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    loginServices
      .validateLogin(username, password)
      .then((u) => {
        setCurrentUser(u);
        setStarted(true);
      })
      .catch((err) => {
        setSubmitted(false);
      });
  }, [submitted]);

  const handleSignUp = (obj) => {
    userServices
      .createUser(obj)
      .then((u) => {
        console.log(u);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (!isLoadingComplete) {
    return <StartScreen />;
  } else if (signUp) {
    return (
      <SignupScreen
        handleBack={() => setSignUp(false)}
        handleSignUp={(obj) => handleSignUp(obj)}
      />
    );
  } else if (!started) {
    return (
      <View style={styles.container}>
        <View style={styles.getStarted}>
          {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
          <View style={{ marginLeft: 10, marginTop: 50 }}>
            <Image
              style={{ marginTop: 0 }}
              source={require("./assets/img/PT3.png")}
            />
            <View style={styles.icons_flex}>
              <View style={{ marginRight: 20 }}>
                <Image source={require("./assets/img/person.png")} />
                <View style={{ marginTop: 40 }}>
                  <Image source={require("./assets/img/person1.png")} />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder=" Username"
                  value={username}
                  onChangeText={(username) => setUsername(username)}
                />
                <TextInput
                  style={styles.input}
                  placeholder=" Password"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={(pass) => setPassword(pass)}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.btn}>
          <Button
            color="#9364AE"
            title="Let's Get Started!"
            onPress={() => setSubmitted(true)}
          />
        </View>
        <View style={styles.btnSignUp}>
          <Button
            color="rgba(147, 100, 174, .7)"
            title="Sign Up"
            onPress={() => {
              setSignUp(true);
            }}
          />
        </View>
      </View>
    );
  } else {
    global.id = currentUser.id;
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    backgroundColor: "#d4bfff",
  },
  getStarted: {
    flex: 1,
    backgroundColor: "#d4bfff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  text: {
    color: "white",
  },
  icons_flex: {
    display: "flex",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    bottom: 15,
  },
  btnSignUp: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    bottom: 75,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    width: 300,
    borderRadius: 5,
    marginBottom: 4,
  },
});
