import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Button,
  Image,
  Text,
  Dimensions,
} from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";

const Stack = createStackNavigator();

export default function App() {
  const [started, setStarted] = useState(false);
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else if (!started) {
    return (
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
            </View>
          </View>
        </View>

        <Button
          color="#9364AE"
          title="Let's Get Started!"
          onPress={() => setStarted(true)}
        />
      </View>
    );
  } else {
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
    flex: 1,
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
    height: Dimensions.get("window").height - 300,
  },
});
