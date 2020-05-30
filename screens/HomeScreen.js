//import * as WebBrowser from 'expo-web-browser';
import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
//import { ScrollView } from 'react-native-gesture-handler';

//import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/person.png")}
        style={{
          marginBottom: 25,
        }}
      />

      <Text style={{ color: "white" }}>
        Together, let’s stop the spread of COVID-19.
      </Text>

      <Image source={require("../assets/img/PT3.png")} />
      <Image source={require('../assets/img/PT3.png')}/>

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
    width: "100%",
  },
  icons_flex: {
    display: "flex",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
