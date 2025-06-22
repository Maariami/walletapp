import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";

const { width: screenWidth } = Dimensions.get("window");

const styled = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 28,
    textAlign: "center",
    textTransform: "capitalize",
  },
  parag: {
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
    textTransform: "capitalize",
  },
  title: {
    color: "rgba(185, 185, 185, 1)",
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
    textTransform: "capitalize",
  },
  body: {
    width: "100%",
    paddingInline: 70,
    display: "flex",
    flexDirection: "column",
    gap: 28,
    marginBottom: 28,
    marginTop: 50,
  },
  login: {
    width: 315,
    position: "relative",
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    borderRadius: 28,
    height: 72,
    shadowColor: "rgba(27, 57, 255, 1)",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  loginText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    textTransform: "capitalize",
    color: "white",
  },
  button: {
    marginBottom: 75,
  },

  input: {
    width: screenWidth,
    paddingInline: 35,
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  inputbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 8,
    borderBottomColor: "rgba(39, 67, 253, 1)",
    borderBottomWidth: 1,
  },
});

export default function verification() {
  return (
    <Formik
      initialValues={{ phone: "" }}
      validationSchema={Yup.object({
        phone: Yup.string()
          .matches(/^\+?\d+$/, "Only digits allowed, optional '+' at start")
          .min(9, "Too short")
          .max(15, "Too long")
          .required("Required"),
      })}
      onSubmit={(values) => {
        router.navigate({ pathname: "/otp", params: { phone: values.phone } });
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styled.main}>
          <View>
            <Image
              style={{
                width: 257,
                height: 249,
                marginTop: 56,
                alignSelf: "center",
              }}
              source={require("../assets/images/OTP.png")}
            />
            <View style={styled.body}>
              <Text style={styled.header}>OTP Verification</Text>
              <Text></Text>
              <Text style={styled.parag}>
                We will send you a one-time password to this mobile number.
              </Text>
              <Text style={styled.title}>Enter mobile number</Text>
            </View>

            <View style={styled.input}>
              <View style={styled.inputbox}>
                <TextInput
                  style={{ outline: "none", textAlign: "center" }}
                  keyboardType="phone-pad"
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                  maxLength={15}
                />
              </View>
              {touched.phone && errors.phone && (
                <Text style={{ color: "red", fontSize: 12, marginTop: 4 }}>
                  {errors.phone}
                </Text>
              )}
            </View>
          </View>

          <View style={styled.button}>
            <TouchableOpacity onPress={handleSubmit as any} activeOpacity={0.7}>
              <LinearGradient
                colors={["#6075FF", "#1433FF"]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1.2, y: 1 }}
                style={styled.login}
              >
                <Image
                  source={require("../assets/images/logindes.png")}
                  style={{ position: "absolute", right: 0, top: 0 }}
                />
                <Image
                  source={require("../assets/images/lefty.png")}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 142,
                    height: 52,
                  }}
                />
                <Text style={styled.loginText}>Get OTP</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
}
