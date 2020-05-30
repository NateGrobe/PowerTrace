import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, Dimensions } from "react-native";

import ProgressBar from "../components/ProgressBar";
import StatusBoard from "../components/StatusBoard";

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  return <View style={styles.container}>{mounted && <Dashboard />}</View>;
}

const Dashboard = () => {
  return (
    <View style={styles.content}>
      <ProgressBar />
      <View style={styles.statusContainer}>
        <StatusBoard />
        <StatusBoard />
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
    width: Dimensions.get("window").width,
  },
  statusContainer: {
    flex: 1,
    flexDirection: "column",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
