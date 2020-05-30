import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import ReportScreen from "../screens/Report";
import DashboardScreen from "../screens/DashboardScreen";
import NotifScreen from "../screens/NotifScreen";

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
      <BottomTab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: "Dashboard",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-medkit" />
          ),
        }}
      />
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
  }
};
