import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function ProgressBar(props) {
  return (
    <View>
      <Progress {...props} />
    </View>
  );
}

const DayCount = (props) => {
  return (
    <View style={styles.dayCount}>
      <Text style={styles.titleText}>76</Text>
      <Text style={styles.baseText}>Days of Staying Safe</Text>
    </View>
  );
};

const Progress = (props) => {
  return (
    <AnimatedCircularProgress
      // size={Dimensions.get("window").width - 100}
      size={250}
      width={25}
      fill={20}
      tintColor="#9365AE"
      onAnimationComplete={() => null}
      backgroundColor="#C592E0"
      rotation={140}
      children={DayCount}
    />
  );
};

const styles = StyleSheet.create({
  dayCount: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  titleText: {
    color: "#fff",
    fontSize: 100,
    margin: 0,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  baseText: {
    color: "#fff",
    margin: 0,
  },
});
