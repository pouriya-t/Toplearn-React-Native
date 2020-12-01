import React from "react";
import {RFPercentage} from 'react-native-responsive-fontsize'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { CoursesScreen } from "../screens";
import Screen from "../components/shared/Screen";
import NewCoursesScreen from "../screens/NewCoursesScreen";
import TopCoursesScreen from "../screens/TopCoursesScreen";

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Screen>
      <TopTab.Navigator
        initialLayout="AllCourses"
        backBehavior="none"
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          labelStyle: {
            fontFamily: "ih",
            fontSize: RFPercentage(1.5),
          },
          style: { backgroundColor: "#f8f4f" },
        }}
      >
        <TopTab.Screen
          name="AllCourses"
          component={CoursesScreen}
          options={{ tabBarLabel: "همه دوره ها" }}
        />
        <TopTab.Screen
          name="NewCourses"
          component={NewCoursesScreen}
          options={{ tabBarLabel: "دوره های جدید" }}
        />
        <TopTab.Screen
          name="TopCourses"
          component={TopCoursesScreen}
          options={{ tabBarLabel: "دوره های محبوب" }}
        />
      </TopTab.Navigator>
    </Screen>
  );
};

export default TopTabNavigator;
