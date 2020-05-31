import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ReportScreen from "../screens/Report";
// import DashboardScreen from "../screens/HomeScreen";
import NotifScreen from "../screens/NotifScreen";
import FriendsScreen from "../screens/FriendsScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-home" />
          ),
        }}
      />
      {/* <BottomTab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: "Dashboard",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-medkit" />
          ),
        }}
      /> */}
      <BottomTab.Screen
        name="Report"
        component={ReportScreen}
        options={{
          title: "Report",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-call" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotifScreen}
        options={{
          title: "Notifications",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-notifications-outline" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          title: "Friends",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-person" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
const getHeaderTitle = (route) => {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "Home";
    case "Report":
      return "Report";
    case "Notifications":
      return "Notifications";
    case "Friends":
      return "Friends";
  }
};
