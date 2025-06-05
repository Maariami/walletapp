import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Bar from "./Components/Bar";
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
  login: {
    position: "relative",
    width: "100%",
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 36,
    borderRadius: 40,
    height: 125,
    shadowColor: "rgba(27, 57, 255, 0.2)",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 8,
  },
  loginText: {
    maxWidth: 152,
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 20,
    textTransform: "capitalize",
    color: "white",
  },
});
export default function wallet() {
  return (
    <View style={styled.main}>
      <LinearGradient
        colors={["#6075FF", "#1433FF"]}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 1.2, y: 1 }}
        style={styled.login}
      >
        <Image
          source={require("../assets/images/balls.png")}
          style={{
            width: 128,
            height: 125,
            position: "absolute",
            right: 0,
            top: 0,
          }}
        />
        <TouchableOpacity
          onPress={() => {}}
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          activeOpacity={0.7}
        >
          <Text style={styled.loginText}>Check Your Bank Accounts</Text>
        </TouchableOpacity>
      </LinearGradient>

      <Bar type="wallet"></Bar>
    </View>
  );
}
