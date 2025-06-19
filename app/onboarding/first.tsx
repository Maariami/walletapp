import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export const options = {
  animation: "none",
};

const styled = StyleSheet.create({
  main: {
    position: "relative",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 90,
    paddingInline: 30,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  texts: {
    width: "100%",
    gap: 26,
    display: "flex",
    flexDirection: "column",
    marginTop: "auto",
    alignItems: "flex-start",
    marginBottom: 56,
  },
  save: {
    color: "rgba(39, 67, 253, 1)",
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 25,
    maxWidth: 291,
  },
  sale: {
    color: "rgba(124, 42, 255, 1)",
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 18,
    maxWidth: 291,
  },
  login: {
    position: "relative",
    width: 153,
    flexDirection: "row",
    overflow: "hidden",
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
    marginBottom: 30,
    alignSelf: "flex-end",
  },
  loginText: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 20,
    textTransform: "capitalize",
    color: "white",
  },
});
export default function first() {
  return (
    <View style={styled.main}>
      <Image
        source={require("../../assets/images/money.png")}
        style={{ width: 63, height: 61 }}
      />

      <Image
        source={require("../../assets/images/Saving.png")}
        style={{ width: 280, height: 202, marginTop: 80, marginBottom: 125 }}
      />

      <Image
        source={require("../../assets/images/ball1.png")}
        style={{
          width: 340,
          height: 370,
          position: "absolute",
          left: 0,
          bottom: 0,
        }}
      />
      <View style={styled.texts}>
        <Text style={styled.save}>Save your money conveniently.</Text>
        <Text style={styled.sale}>
          Get 5% cash back for each transaction and spend it easily.
        </Text>
      </View>
      <LinearGradient
        colors={["#6075FF", "#1433FF"]}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 1.2, y: 1 }}
        style={styled.login}
      >
        <Image
          source={require("../../assets/images/logindes.png")}
          style={{ position: "absolute", right: 0, top: 0 }}
        />
        <TouchableOpacity
          onPress={() => {
            router.navigate("/onboarding/second");
          }}
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          activeOpacity={0.7}
        >
          <Text style={styled.loginText}>Next</Text>
          <Image
            style={{ width: 20, height: 17 }}
            source={require("../../assets/images/arrowwhite.png")}
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
