import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Formik } from "formik";
import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";

const { width: screenWidth } = Dimensions.get("window");
const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 320;
const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

const styled = StyleSheet.create({
  main: {
    flex: 1,
    width: screenWidth,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    paddingHorizontal: 35,
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 28,
    textTransform: "capitalize",
    marginBottom: 47,
  },
  inputs: {
    width: screenWidth,
    paddingHorizontal: 35,
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  input: {
    width: "100%",
  },
  title: {
    color: "rgba(185, 185, 185, 1)",
    paddingLeft: 5,
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 14,
    textTransform: "capitalize",
  },
  inputbox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 5,
    marginTop: 12,
    borderBottomColor: "rgba(39, 67, 253, 1)",
    borderBottomWidth: 1,
  },
  errorText: {
    color: "red",
    paddingLeft: 5,
    marginTop: 4,
    fontSize: 13,
  },
  forgot: {
    color: "rgba(43, 71, 252, 1)",
    paddingLeft: 5,
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 16,
    textTransform: "uppercase",
    marginHorizontal: 40,
    marginTop: 25,
    marginBottom: 30,
  },
  login: {
    position: "relative",
    flexDirection: "row",
    overflow: "hidden",
    marginHorizontal: 40,
    justifyContent: "space-between",
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
});

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("The email address is incomplete.")
    .required("The email address is incomplete."),
  password: Yup.string()
    .matches(/[!@*]/, "Must contain special characters - !, @, *")
    .required("Must contain special characters - !, @, *"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const shiftStyle = {
    transform: [{ translateY: isInputFocused ? -200 : 0 }],
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Animated.View style={[styled.main, shiftStyle]}>
        <Image
          style={{ width: screenWidth, height: calculatedHeight }}
          source={require("../assets/images/logosmaller.png")}
        />
        <Text style={styled.header}>log In</Text>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          validateOnChange
          validateOnBlur
          onSubmit={() => {
            router.navigate("/first");
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styled.inputs}>
                {/* Email Field */}
                <View style={styled.input}>
                  <Text style={styled.title}>Email Address</Text>
                  <View
                    style={[
                      styled.inputbox,
                      touched.email &&
                        errors.email && {
                          borderBottomColor: "red",
                        },
                    ]}
                  >
                    <TextInput
                      placeholder="email"
                      autoCapitalize="none"
                      style={{ width: "100%", outline: "none" }}
                      onChangeText={handleChange("email")}
                      onBlur={() => {
                        handleBlur("email");
                        setIsInputFocused(false);
                      }}
                      onFocus={() => setIsInputFocused(true)}
                      value={values.email}
                    />
                    <Image
                      style={{
                        width: 18,
                        height: 13,
                        opacity: !errors.email && values.email ? 1 : 0.2,
                      }}
                      source={require("../assets/images/checkmark.png")}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styled.errorText}>{errors.email}</Text>
                  )}
                </View>

                {/* Password Field */}
                <View style={styled.input}>
                  <Text style={styled.title}>Password</Text>
                  <View
                    style={[
                      styled.inputbox,
                      touched.password &&
                        errors.password && {
                          borderBottomColor: "red",
                        },
                    ]}
                  >
                    <TextInput
                      placeholder="password"
                      secureTextEntry={!showPassword}
                      style={{ width: "100%", outline: "none" }}
                      onChangeText={handleChange("password")}
                      onBlur={() => {
                        handleBlur("password");
                        setIsInputFocused(false);
                      }}
                      onFocus={() => setIsInputFocused(true)}
                      value={values.password}
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword((prev) => !prev)}
                    >
                      <Image
                        style={{ width: 18, height: 13 }}
                        source={require("../assets/images/eye.png")}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styled.errorText}>{errors.password}</Text>
                  )}
                </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  router.navigate({ pathname: "/verification" });
                }}
              >
                <Text style={styled.forgot}>Forgot Password?</Text>
              </TouchableOpacity>

              {/* Spacer view disappears when input is focused */}
              {!isInputFocused && <View style={{ flex: 1 }} />}

              <View style={styled.button}>
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
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    activeOpacity={0.7}
                  >
                    <Text style={styled.loginText}>log In</Text>
                    <Image
                      style={{ width: 20, height: 17 }}
                      source={require("../assets/images/arrowwhite.png")}
                    />
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </>
          )}
        </Formik>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
