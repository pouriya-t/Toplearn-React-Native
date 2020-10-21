import React from "react";
import { View, StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import Constants from "expo-constants";
import {
  ToplearnForm,
  ToplearnFormField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/shared/Screen";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("نام و نام خانوادگی الزامی است"),
  email: Yup.string()
    .required("این فیلد الزامی می باشد")
    .email("ایمیل معتبر نمی باشد"),
  password: Yup.string()
    .required("این فیلد الزامی می باشد")
    .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد"),
  passwordConfirmation: Yup.string()
    .required("تکرار کلمه عبور الزامی است")
    .oneOf([Yup.ref("password"), null], "کلمه های عبور باید یکسان باشند"),
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <ToplearnForm
        initialValues={{
          fullname: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <ToplearnFormField
          placeholder="نام و نام خانوادگی"
          autoCorrect={false}
          icon="account-circle"
          name="fullname"
          placeholderTextColor="royalblue"
        />
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
          autoCorrect={false}
          icon="onepassword"
          name="password"
          placeholderTextColor="royalblue"
          secureTextEntry
        />

        <ToplearnFormField
          placeholder="تکرار کلمه عبور"
          autoCorrect={false}
          icon="onepassword"
          name="passwordConfirmation"
          placeholderTextColor="royalblue"
          secureTextEntry
        />
        <View style={{ width: "60%" }}>
          <SubmitButton title="ثبت نام" />
        </View>
      </ToplearnForm>
    </Screen>
  );
};

export default RegisterScreen;

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
