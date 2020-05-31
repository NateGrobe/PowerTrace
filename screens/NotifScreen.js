import React, { useState, useEffect } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

import ContactBoard from "../components/ContactBoard";

import userServices from '../services/user'
import reportServices from '../services/report'

export default function NotifScreen() {
  const [refresh, setRefresh] = useState(false)
  const [user, setUser] = useState()
  const [connections, setConnections] = useState([])
  const [reportDate, setReportDate] = useState(new Date())

  useEffect(() => {
    userServices
      .getUser(global.id)
      .then(u => {
        setUser(u)
        if (u.connections.length > 0) {
          u.connections.map(conn => {
            userServices
              .getUser(conn)
              .then(c => {
                setConnections(connections.concat(c))
              })
          });
        }
      })
      .catch(error => {
        console.log('noti refresh', error.message)
      })
    setRefresh(false)
  }, [refresh]);

  const refreshNoti = () => {
    setRefresh(true)
  };

  if (connections.length > 0) {
    const conn = connections[connections.length -1]
    reportServices
      .getReport(conn.reports[conn.reports.length -1])
      .then(r => {
        setReportDate(r.date)
      })
      .catch(error => {
        console.log('conn', error.message)
      })
  }

  if (connections.filter(conn => conn.infected == true).length) {
    return (
      <View style={styles.container}>
        <View style={styles.contactBoard}>
          <ContactBoard date={reportDate} />
        </View>
        <Button title='Refresh' onPress={refreshNoti} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No notifications at this time.</Text>
        <Button title='Refresh' onPress={refreshNoti} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4bfff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  contactBoard: {
    marginTop: 20,
  },
  // icons_flex: {
  //   display: "flex",
  //   width: "90%",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
  text : {
    color: 'white',
    marginTop: 100,
    fontSize: 20 
  }
});
