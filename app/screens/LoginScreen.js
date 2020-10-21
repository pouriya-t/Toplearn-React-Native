import React from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import {
  ToplearnForm,
  ToplearnFormField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/shared/Screen";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("این فیلد الزامی می باشد")
    .email("ایمیل معتبر نمی باشد"),
  password: Yup.string()
    .required("این فیلد الزامی می باشد")
    .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد"),
});

const LoginScreen = ({navigation}) => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <ToplearnForm
        initialValues={{ email: "", password: "" }}
        onSubmit={() => navigation.navigate("Home")}
        // validationSchema={validationSchema}
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
          <SubmitButton title="ورود کاربر" />
        </View>
      </ToplearnForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logo: {
    width: 270,
    height: 200,
    marginTop: 20,
    marginBottom: 40,
  },
});
