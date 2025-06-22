import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const styled = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingTop: 24,
    paddingInline: 30,
  },
  inputs: {
    marginTop: 40,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 23,
  },
  input: {
    width: "100%",
    paddingInline: 5,
  },
  title: {
    color: "rgba(128, 224, 255, 1)",
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
    borderBottomColor: "rgba(255, 255, 255, 1)",
    borderBottomWidth: 1,
  },
  button: {
    marginBottom: 75, // the real fix
  },
  signup: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    height: 72,
    borderColor: "rgba(96, 117, 255, 1)",
    borderWidth: 1,
    shadowColor: "rgba(27, 57, 255, 1)", // solid color for iOS
    shadowOffset: { width: 0, height: 8 }, // 0px 8px
    shadowOpacity: 0.2, // matches 20% alpha
    shadowRadius: 16, // blur radius
    elevation: 8, // required for Android
  },
  signupText: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 20,
    textTransform: "capitalize",
    color: "rgba(200, 200, 200, 1)",
  },
});
export default function createprofile() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <LinearGradient
        colors={["#4950F9", "#1937FE"]}
        start={{ x: -0.1, y: 0 }} // simulate -12.49% offset
        end={{ x: 1.15, y: 1 }} // simulate 115.02% offset
        style={styled.main}
      >
        <Image
          source={require("../assets/images/backarrow.png")}
          style={{ width: 26, height: 21 }}
        />
        <Image
          source={require("../assets/images/profpic.png")}
          style={{ width: 143, height: 143, alignSelf: "center" }}
        />
        <View style={styled.inputs}>
          <View style={styled.input}>
            <Text style={styled.title}>Username</Text>
            <View style={styled.inputbox}>
              <TextInput
                style={{
                  outline: "none",
                  width: "100%",
                  color: "rgba(128, 224, 255, 1)",
                }}
                placeholder="Your username"
              ></TextInput>
            </View>
          </View>
          <View style={styled.input}>
            <Text style={styled.title}>First name</Text>
            <View style={styled.inputbox}>
              <TextInput
                style={{
                  outline: "none",
                  width: "100%",
                  color: "rgba(128, 224, 255, 1)",
                }}
                placeholder="Your name"
              ></TextInput>
            </View>
          </View>
          <View style={styled.input}>
            <Text style={styled.title}>Last name</Text>
            <View style={styled.inputbox}>
              <TextInput
                style={{
                  outline: "none",
                  width: "100%",
                  color: "rgba(128, 224, 255, 1)",
                }}
                placeholder="Your last name"
              ></TextInput>
            </View>
          </View>
          <View style={styled.input}>
            <Text style={styled.title}>Date of birth</Text>
            <View style={styled.inputbox}>
              <TextInput
                style={{
                  outline: "none",
                  width: "100%",
                  color: "rgba(128, 224, 255, 1)",
                }}
                placeholder="Your date of birth"
              ></TextInput>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }} />
        <View style={styled.button}>
          <TouchableOpacity
            style={styled.signup}
            onPress={() => {
              router.navigate("/main/wallet");
            }}
          >
            <Text style={styled.signupText}>complete</Text>
            <Image
              style={{ width: 18, height: 13 }}
              source={require("../assets/images/checkwhite.png")}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
