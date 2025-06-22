import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
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

export default function OtpScreen() {
  const { phone } = useLocalSearchParams();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef<TextInput[]>([]);

  const isOtpComplete = otp.every((digit) => digit !== "");

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (newOtp.every((d) => d !== "")) {
      Keyboard.dismiss();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              <Text style={{ fontWeight: "700" }}>{phone}</Text>
            </Text>
          </View>

          <View style={styled.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(el) => (inputs.current[index] = el!)}
                style={styled.otpInput}
                value={digit}
                onChangeText={(text) => handleChange(text.slice(-1), index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
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

        <View style={{ marginBottom: 75, opacity: isOtpComplete ? 1 : 0.5 }}>
          <TouchableOpacity
            onPress={() => {
              console.log("OTP Entered:", otp.join(""));
              router.navigate("/main/wallet");
            }}
            disabled={!isOtpComplete}
            style={{
              marginHorizontal: 40,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            activeOpacity={0.7}
          >
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

              <Text style={styled.loginText}>Verify</Text>
            </LinearGradient>{" "}
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
