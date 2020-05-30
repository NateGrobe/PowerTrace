import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import ProgressBar from "../components/ProgressBar";
import StatusBoard from "../components/StatusBoard";
import PeopleIconsBar from "../components/PeopleIconsBar";

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  return <View style={styles.container}>{mounted && <Dashboard />}</View>;
}

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View>
        <ProgressBar style={styles.progressBar} />
      </View>
      <PeopleIconsBar days="76" style={{ marginBottom: 5 }} />
      <View style={styles.statusContainer}>
        <View>
          <StatusBoard
            style={styles.statusBoard}
            boxTitle="My Health Status"
            boxDescription="Keep track of your health status and update it to keep those around
            you safe!"
            boxIndicator="Current Status"
            boxContent="H E A L T H Y & V I R U S - F R E E 💪"
            btnText="Update Status"
            iconName="heartbeat"
          />
        </View>
        <View>
          <StatusBoard
            style={styles.statusBoard}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4bfff",
    alignItems: "center",
    justifyContent: "flex-start",
    // width: Dimensions.get("window").width,
    // flexDirection: "column",
    width: "100%",
  },
  statusContainer: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "ce",
  },
  // content: {
  //   flex: 1,
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: "100%",
  // },
  progressBar: {
    marginTop: 5,
    marginBottom: 10,
  },
  statusBoard: {
    marginBottom: 5,
  },
});
