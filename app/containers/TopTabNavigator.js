import React, { useEffect } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen from "../components/shared/Screen";
import { useDispatch } from "react-redux";
import {
  NewCoursesScreen,
  TopCoursesScreen,
  CoursesScreen,
} from "./../screens";
import { fetchCourses } from "../api/courses";
import Toast from "react-native-tiny-toast";
import { loadingToast } from "../utils/toasts";
import { getCourses } from "../actions";

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const fetchData = async () => {
        loadingToast("در حال بارگذاری...");
        dispatch(getCourses());
        Toast.hide();
      };
      fetchData();
    } catch (error) {
      console.log(error);
      Toast.hide();
    }
  }, []);

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
