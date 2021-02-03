import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { StackActions } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Icon from "../components/shared/Icon";
import ItemSeperator from "../components/shared/ItemSeperator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Screen from "./../components/shared/Screen";
import ToplearnText from "../components/shared/ToplearnText";

const AccountScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("userId");
    navigation.dispatch(StackActions.replace("Welcome"));
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <View style={styles.details}>
          <Text style={styles.title}>{user.fullname}</Text>
          <Text style={styles.subTitle}>{user.email}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={{ alignSelf: "center", marginLeft: 20 }}
        >
          <Icon name="settings" backgroundColor="tomato" />
        </TouchableOpacity>
      </View>
      <ItemSeperator height={5} />
      <TouchableHighlight underlayColor="#f8f4f4" onPress={handleLogout}>
        <View style={styles.container}>
          <Icon name="logout" backgroundColor="tomato" />
          <View style={styles.details}>
            <ToplearnText fontFamily="ih" size="2">
              خروج از حساب کاربری
            </ToplearnText>
          </View>
        </View>
      </TouchableHighlight>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 20,
    padding: 15,
  },
  screen: {
    backgroundColor: "#f8f4f4",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 40,
  },
  details: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontFamily: "ih",
    fontSize: 20,
  },
  subTitle: {
    color: "#6e6969",
  },
});
