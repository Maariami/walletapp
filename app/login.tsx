import { LinearGradient } from "expo-linear-gradient";
import React from "react";

import { router } from "expo-router";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
    paddingInline: 35,
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 28,
    textTransform: "capitalize",
    marginBottom: 47,
  },
  inputs: {
    width: screenWidth,
    paddingInline: 35,
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
    fontWeight: 400,
    fontSize: 14,
    textTransform: "capitalize",
  },
  inputbox: {
    width: "100%",
    display: "flex",
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
  forgot: {
    color: "rgba(43, 71, 252, 1)",
    paddingLeft: 5,
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 16,
    textTransform: "uppercase",
    marginInline: 40,
    marginTop: 25,
  },
  login: {
    position: "relative",
    flexDirection: "row",
    overflow: "hidden",
    marginInline: 40,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    borderRadius: 28,
    height: 72,
    shadowColor: "rgba(27, 57, 255, 1)", // same base color as CSS
    shadowOffset: { width: 0, height: 8 }, // 0px 8px
    shadowOpacity: 0.2, // matches rgba alpha
    shadowRadius: 16, // blur radius
    elevation: 8, // Android-only
  },
  loginText: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 20,
    textTransform: "capitalize",
    color: "white",
  },
  button: {
    marginBottom: 75, // the real fix
  },
});

export default function login() {
  return (
    <View style={styled.main}>
      <Image
        style={{ width: screenWidth, height: calculatedHeight }}
        source={require("../assets/images/logosmaller.png")}
      />
      <Text style={styled.header}>Log In</Text>
      <View style={styled.inputs}>
        <View style={styled.input}>
          <Text style={styled.title}>Email Address</Text>
          <View style={styled.inputbox}>
            <TextInput
              style={{ outline: "none", width: "100%" }}
              placeholder="email"
            ></TextInput>
            <Image
              style={{ width: 18, height: 13 }}
              source={require("../assets/images/checkmark.png")}
            />
          </View>
        </View>
        <View style={styled.input}>
          <Text style={styled.title}>Password</Text>
          <View style={styled.inputbox}>
            <TextInput
              style={{ outline: "none", width: "100%" }}
              placeholder="password"
            ></TextInput>
            <Image
              style={{ width: 18, height: 13 }}
              source={require("../assets/images/eye.png")}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styled.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }} />
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
            onPress={() => {
              router.navigate("/login");
            }}
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            activeOpacity={0.7}
          >
            <Text style={styled.loginText}>Log in</Text>
            <Image
              style={{ width: 20, height: 17 }}
              source={require("../assets/images/arrowwhite.png")}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
