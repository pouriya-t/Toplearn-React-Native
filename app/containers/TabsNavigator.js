import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AccountScreen from "../screens/AccountScreen";
import CoursesScreen from "../screens/CoursesScreen";
import MyCoursesScreen from "../screens/MyCoursesScreen";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator>
        
      <Tab.Screen
        name="MyCourses"
        component={MyCoursesScreen}
        options={{
          tabBarLabel: "دوره های من",
        }}
      />
      <Tab.Screen
        name="Courses"
        component={CoursesScreen}
        options={{
          tabBarLabel: "دورها",
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "اکانت من",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
