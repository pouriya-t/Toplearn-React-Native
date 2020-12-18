import React, { useState } from "react";
import { Alert, View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./../components/shared/Screen";
import ToplearnText from "../components/shared/ToplearnText";
import ItemSeperator from "./../components/shared/ItemSeperator";
import { FlatList } from "react-native-gesture-handler";
import Swipable from "react-native-gesture-handler/Swipeable";

const confirmationAlert = (course, onPress) => {
  return Alert.alert(
    course.title,
    `مطمئنی می خواهی ${course.title} را پاکی کنی ؟`,
    [
      {
        text: "انصراف",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "آره پاک کن",
        onPress: onPress,
      },
    ],
    { cancelable: false }
  );
};

const deleteAction = (course, onPress) => {
  return (
    <TouchableOpacity onPress={() => confirmationAlert(course,onPress)}>
      <View
        style={{
          backgroundColor: "tomato",
          width: 50,
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="trash-can" size={35} color="#fff" />
      </View>
    </TouchableOpacity>
  );
};

const MyCoursesScreen = () => {
  const [getMyCourses, setMyCourses] = useState([
    {
      id: 1,
      title: "دوره جامع NodeJs",
      master: "یونس قربانی",
    },
    {
      id: 2,
      title: "دوره جامع React Native",
      master: "یونس قربانی",
    },
    {
      id: 2,
      title: "دوره جامع ReactJs",
      master: "یونس قربانی",
    },
    {
      id: 4,
      title: "دوره جامع Python",
      master: "یونس قربانی",
    },
    {
      id: 5,
      title: "دوره جامع JavaScript",
      master: "یونس قربانی",
    },
  ]);

  const handleDelete = (course) => {
    setMyCourses(getMyCourses.filter((c) => c.id !== course.id));
  };

  return (
    <Screen style={{ alignItems: "center" }}>
      <View style={styles.title}>
        <ToplearnText fontFamily="yekan" size="3" color="#fff">
          لیست دوره های من
        </ToplearnText>
      </View>
      <ItemSeperator height={5} />
      <View style={{ width: "100%" }}>
        <FlatList
          data={getMyCourses}
          keyExtractor={(c) => c.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 7 }}>
              <ItemSeperator height={3} />
              <Swipable renderRightActions={() => deleteAction(item,() => handleDelete(item))}>
                <View style={styles.container}>
                  <View style={styles.details}>
                    <ToplearnText fontFamily="yekan" size="2.5">
                      {item.title}
                    </ToplearnText>
                    <ToplearnText fontFamily="yekan" size="1.5">
                      {`مدرس دوره : ${item.master}`}
                    </ToplearnText>
                  </View>
                </View>
              </Swipable>
              <ItemSeperator height={3} />
            </View>
          )}
        />
      </View>
    </Screen>
  );
};

export default MyCoursesScreen;

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
  },
  details: {
    marginLeft: 10,
    backgroundColor: "#f8f4f4",
    width: "100%",
    padding: 10,
    borderRadius: 14,
    alignItems: "center",
  },
});
