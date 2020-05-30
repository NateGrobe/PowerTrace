import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function StatusBoard(props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  return <View>{mounted && <Status {...props} />}</View>;
}

const Status = (props) => {
  return (
    <View>
      <View style={styles.boardHeader}>
        <View style={styles.title}>
          <FontAwesome name={props.iconName} size={22} color="white" />
          <Text
            style={[
              styles.textShadow,
              {
                color: "#fff",
                lineHeight: 21,
                fontSize: 18,
                margin: 5,
              },
            ]}
          >
            {props.boxTitle}
          </Text>
          <FontAwesome name={props.iconName} size={22} color="white" />
        </View>
        <Text
          style={{
            color: "#fff",
            fontSize: 10.5,
            width: "90%",
            marginLeft: 5,
            padding: 2,
          }}
        >
          {props.boxDescription}
        </Text>
      </View>

      <View style={styles.boardContent}>
        <View style={styles.fixToText}>
          <Text
            style={[
              styles.textShadow,
              {
                fontSize: 11.5,
                color: "#fff",
                marginLeft: 5,
              },
            ]}
          >
            {props.boxIndicator}
          </Text>
          <TouchableOpacity
            style={styles.button}
            // color="rgba(255, 255, 255, .4)"
            // title="Update Status"
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 11.5,
              }}
            >
              {props.btnText}
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            color: "#fff",
            marginLeft: 5,
          }}
        >
          {props.boxContent}
        </Text>
        {props.complementaryText && (
          <Text
            style={{
              color: "#fff",
              fontSize: 10.5,
              marginLeft: 5,
            }}
          >
            {props.complementaryText}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boardHeader: {
    backgroundColor: "rgba(147, 100, 174, .5)",
    width: Dimensions.get("window").width - 20,
  },
  boardContent: {
    backgroundColor: "rgba(147, 100, 174, .3)",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    marginLeft: 5,
    paddingTop: 2,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, .4)",
    padding: 2,
    borderRadius: 5,
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});
