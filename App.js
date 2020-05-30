import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react'
import { Platform, StatusBar, StyleSheet, View, Button, Image, Text, TextInput } from 'react-native';

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";

import loginServices from './services/login'
import user from './services/user';

const Stack = createStackNavigator();

export default function App() {
  const [started, setStarted] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [currentUser, setCurrentUser] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const isLoadingComplete = useCachedResources();

  useEffect(() => {
    loginServices
      .validateLogin(username, password)
      .then(u => {
        setCurrentUser(u)
        setStarted(true)
      })
      .catch(e => {
        setSubmitted(false)
      })
  }, [submitted])

  if (!isLoadingComplete) {
    return null;
  } else if (!started) {
    return (
      <View style={styles.getStarted}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <View style={{ paddingTop: 50, paddingLeft:10}}>
          <Image source={require("./assets/img/PT3.png")} />
          <View style={styles.icons_flex}>
            <View style={{ paddingRight:20}}>
              <Image source={require("./assets/img/person.png")} />
              <View style={{ paddingTop: 40 }}>
              </View>
              <View>
                <TextInput 
                  style={styles.input} 
                  placeholder=' Username' 
                  value={username}
                  onChangeText={username => setUsername(username)}
                /> 
                <TextInput 
                  style={styles.input} 
                  placeholder=' Password' 
                  secureTextEntry={true} 
                  value={password}
                  onChangeText={pass => setPassword(pass)}
                /> 
                <Button color='#9364AE' title="Let's Get Started!" onPress={() => setSubmitted(true)} />
              </View>
            </View>
          </View>
        </View>

      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
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
    justifyContent: "center",
    width: "100%",
  },
  text: {
    color: 'white',
  },
  icons_flex: {
    display: "flex",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 500
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    width: 300,
    borderRadius: 5,
    marginBottom: 4,
  },
});
