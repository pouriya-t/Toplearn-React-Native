import React from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import Constants from "expo-constants";
import CustomButton from "../components/CustomButton";
import ToplearnFormField from "../components/forms/ToplearnFormField";
import ToplearnForm from "../components/forms/ToplearnForm";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("این فیلد الزامی می باشد")
    .email("ایمیل معتبر نمی باشد"),
  password: Yup.string()
    .required("این فیلد الزامی می باشد")
    .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد"),
});

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <ToplearnForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
            <ToplearnFormField
              placeholder="ایمیل کاربری"
              autoCompleteType="email"
              autoCorrect={false}
              keyboardType="email-address"
              icon="email"
              name="email"
              placeholderTextColor="royalblue"
            />
            <ToplearnFormField
              placeholder="کلمه عبور"
              autoCompleteType="password"
              autoCorrect={false}
              icon="onepassword"
              name="password"
              placeholderTextColor="royalblue"
              secureTextEntry
            />
            <View style={{ width: "60%" }}>
              <CustomButton title="ورود کاربر" onPress={() => {}} />
            </View>
      </ToplearnForm>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    alignItems: "center",
  },
  logo: {
    width: 270,
    height: 200,
    marginTop: 20,
    marginBottom: 40,
  },
});
