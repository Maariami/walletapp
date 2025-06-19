import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";
const styled = StyleSheet.create({
  main: {
    position: "relative",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 56,
    paddingInline: 35,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },

  inputs: {
    marginTop: 40,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 23,
    marginBottom: 45,
  },
  input: {
    width: "100%",
    paddingInline: 5,
  },
  title: {
    color: "rgba(58, 58, 58, 1)",
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
    borderBottomColor: "rgba(222, 225, 239, 1)",
    borderBottomWidth: 1,
  },

  signup: {
    width: "100%",
    height: 72,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 38,
    paddingInline: 30,
    borderColor: "rgba(39, 67, 253, 1)",
    borderWidth: 1,
  },
  signupText: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 23,
    textTransform: "capitalize",
    color: "rgba(39, 67, 253, 1)",
  },
  header: {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 40,
    textTransform: "capitalize",
  },
  profile: {
    marginTop: 30,
    marginBottom: 40,
    display: "flex",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  names: {},
  fullname: {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 19,
    color: "rgba(39, 67, 253, 1)",
  },
  status: {
    fontFamily: "Montserrat",
    fontWeight: 300,
    fontSize: 18,
    color: "rgba(39, 67, 253, 1)",
  },
});
export default function profile() {
  return (
    <View style={styled.main}>
      <Image
        source={require("../../assets/images/sider.png")}
        style={{
          width: 329,
          height: 317,
          position: "absolute",
          right: 0,
          top: 0,
        }}
      />
      <Text style={styled.header}>Profile</Text>
      <View style={styled.profile}>
        <Image
          source={require("../../assets/images/someone.png")}
          style={{ width: 60, height: 60 }}
        />
        <View style={styled.names}>
          <Text style={styled.fullname}>Shasha Kolakola</Text>
          <Text style={styled.status}>Online</Text>
        </View>
      </View>
      <View style={styled.inputs}>
        <View style={styled.input}>
          <Text style={styled.title}>Username</Text>
          <View style={styled.inputbox}>
            <Text
              style={{
                color: "rgba(39, 67, 253, 1)",
              }}
            >
              chyaber02
            </Text>
          </View>
        </View>
        <View style={styled.input}>
          <Text style={styled.title}>First name</Text>
          <View style={styled.inputbox}>
            <Text
              style={{
                color: "rgba(39, 67, 253, 1)",
              }}
            >
              Shasha
            </Text>
          </View>
        </View>
        <View style={styled.input}>
          <Text style={styled.title}>Last name</Text>
          <View style={styled.inputbox}>
            <Text
              style={{
                color: "rgba(39, 67, 253, 1)",
              }}
            >
              Kolakola
            </Text>
          </View>
        </View>
        <View style={styled.input}>
          <Text style={styled.title}>Date of birth</Text>
          <View style={styled.inputbox}>
            <Text
              style={{
                color: "rgba(39, 67, 253, 1)",
              }}
            >
              20-03-1997
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styled.signup}
        onPress={() => {
          router.navigate("/");
        }}
      >
        <Text style={styled.signupText}>Sign Out</Text>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../../assets/images/exit.png")}
        />
      </TouchableOpacity>
      {/* <Bar type="profile"></Bar> */}
    </View>
  );
}
