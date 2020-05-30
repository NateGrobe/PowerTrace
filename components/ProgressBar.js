import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function ProgressBar() {
  return (
    <View>
      <Progress />
    </View>
  );
}

const DayCount = () => {
  return (
    <View style={styles.day_count}>
      <Text style={styles.titleText}>76</Text>
      <Text style={styles.baseText}>Days of Staying Safe</Text>
    </View>
  );
};

const Progress = () => {
  return (
    <AnimatedCircularProgress
      size={Dimensions.get("window").width - 100}
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
  day_count: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  titleText: {
    color: "#fff",
    fontSize: 86,
  },
  baseText: {
    color: "#fff",
  },
});
