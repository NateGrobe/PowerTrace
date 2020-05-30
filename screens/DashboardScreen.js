import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

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
      <ProgressBar style={styles.progressBar} />
      <View style={styles.statusContainer}>
        <StatusBoard
          boxTitle="My Health Status"
          boxDescription="Keep track of your health status and update it to keep those around
          you safe!"
          boxIndicator="Current Status"
          boxContent="H E A L T H Y & V I R U S - F R E E 💪"
          btnText="Update Status"
          iconName="heartbeat"
        />
        <StatusBoard
          boxTitle="My Risk Levels"
          boxDescription="Stay informated of your possible exposure to the virus"
          boxIndicator="Current Risk"
          boxContent="S A F E ✔️"
          btnText="Check your Exposure"
          iconName="warning"
          complementaryText="Great! You’ve not been in contact with COVID-19 patients. "
        />
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
    minHeight: Dimensions.get("window").height,
  },
  statusContainer: {
    flex: 1,
    flexDirection: "column",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    minHeight: Dimensions.get("window").height,
  },
  progressBar: {
    paddingTop: 5,
    marginBottom: 10,
  },
});
