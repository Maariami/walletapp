import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
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
    color: "rgba(58, 58, 58, 1)",
  },
  title: {
    color: "rgba(58, 58, 58, 1)",
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
    textTransform: "capitalize",
  },
  body: {
    width: "100%",
    paddingHorizontal: 70,
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

  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  otpInput: {
    width: 40,
    height: 50,
    fontSize: 24,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(39, 67, 253, 1)",
    color: "black",
  },
});

export default function otp() {
  return (
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
            Enter the OTP sent to{" "}
            <Text style={{ fontWeight: "700" }}>+995 555 551 452</Text>
          </Text>
        </View>

        {/* ✅ OTP INPUT BOXES */}
        <View style={styled.otpContainer}>
          {[0, 1, 2, 3].map((_, index) => (
            <TextInput
              key={index}
              style={styled.otpInput}
              maxLength={1}
              keyboardType="number-pad"
              returnKeyType="done"
            />
          ))}
        </View>
      </View>

      <View style={styled.body}>
        <Text style={styled.parag}>
          Didn’t you receive the OTP?{" "}
          <Text style={{ color: "rgba(39, 67, 253, 1)" }}>Resend OTP</Text>
        </Text>
      </View>

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
          <TouchableOpacity
            onPress={() => {
              router.navigate("/otp");
            }}
            style={{
              marginHorizontal: 40,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            activeOpacity={0.7}
          >
            <Text style={styled.loginText}>Get OTP</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}
