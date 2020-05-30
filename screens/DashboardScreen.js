import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import ProgressBar from "../components/ProgressBar";

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  return <View style={styles.container}>{mounted && <Dashboard />}</View>;
}

const Dashboard = () => {
  return (
    <View>
      <ProgressBar />
      <View style={styles.status_board}>
        <Text>My Health Status</Text>
        <Text>
          Keep track of your health status and update it to keep those around
          you safe!
        </Text>
        <Text>Healthy</Text>
        <Button title={"Update Status"}></Button>
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
  status_board: {
    color: "#fff",
    backgroundColor: "red",
    width: "100%",
  },
});
