import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
// import Icon from "../components/shared/icon";
import ItemSeperator from "../components/shared/ItemSeperator";
import Screen from "./../components/shared/Screen";

const AccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <View style={styles.details}>
          <Text style={styles.title}>یونس قربانی</Text>
          <Text style={styles.subTitle}>younes.gh@gmail.com</Text>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={{ alignSelf: "center", marginLeft: 20 }}
        >
          {/* <Icon name="settings" backgroundColor="tomato" /> */}
        </TouchableOpacity>
      </View>
      <ItemSeperator height={5} />
      <TouchableHighlight underlayColor="#f8f4f4" onPress={() => {}}>
          <View style={styles.container}>
            {/* <Icon name="logout" backgroundColor="tomato" /> */}
            <View style={styles.details}>
              <Text style={styles.title}>خروج از حساب کاربری</Text>
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
