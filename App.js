import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import WelcomeView from "./views/WelcomeView";

const App = () => {
  return <WelcomeView />;
};

export default App;

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
