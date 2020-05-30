import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import axios from "axios";

import ProgressBar from "../components/ProgressBar";
import StatusBoard from "../components/StatusBoard";
import PeopleIconsBar from "../components/PeopleIconsBar";

import userServices from "../services/user";

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  return <View style={styles.container}>{mounted && <Dashboard />}</View>;
}

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const tmpUsr = "5ed15e8c32b5edd94dcdd00b";

  useEffect(() => {
    userServices.getUser(tmpUsr).then((res) => {
      setUser(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 40 }}>
        <View>
          <ProgressBar style={styles.progressBar} />
        </View>
      </View>
      <PeopleIconsBar days="76" style={{ marginBottom: 5 }} />
      <View style={styles.statusContainer}>
        <View style={{ paddingTop: 50 }}>
          <StatusBoard
            style={styles.statusBoard}
            boxTitle="My Health Status"
            boxDescription="Keep track of your health status and update it to keep those around
            you safe!"
            boxIndicator="Current Status"
            // boxContent="H E A L T H Y  &  V I R U S - F R E E 💪"
            boxContent={
              user.infected
                ? "I N F E C T E D !"
                : "H E A L T H Y & V I R U S - F R E E 💪"
            }
            btnText="Update Status"
            iconName="heartbeat"
          />
        </View>
        <View>
          <View style={{ paddingTop: 40 }}>
            <StatusBoard
              style={styles.statusBoard}
              boxTitle="My Risk Levels"
              boxDescription="Stay informated of your possible exposure to the virus"
              boxIndicator="Current Risk"
              boxContent={user.infected ? "U N S A F E" : "S A F E ✔️"}
              btnText="Check your Exposure"
              iconName="warning"
              complementaryText={
                user.infected
                  ? "Oh no! You have likely been infected."
                  : "Great! You’ve not been in contact with COVID-19 patients. "
              }
            />
          </View>
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
