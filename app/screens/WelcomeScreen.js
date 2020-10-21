import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import CustomButton from "../components/shared/CustomButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/bg1.jpg")}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.firstText}>
          خود آموزی ، کسب تجربه ، ورود به بازار کار
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          color="royalblue"
          title="ورود"
          onPress={() => navigation.navigate("Login")}
        />
        <CustomButton
          title="ثبت نام"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  firstText: {
    fontFamily: "ih",
    fontSize: 25,
    top: 25,
    color: "tomato",
  },
  logo: {
    width: 260,
    height: 190,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
