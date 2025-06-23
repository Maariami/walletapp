import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ASPECT_RATIO = 147 / 383;
const ASPECT_HEIGHT = SCREEN_WIDTH * ASPECT_RATIO;

const Confirmation = () => {
  return (
    <View style={styles.main}>
      <Image
        source={require("../assets/images/wbacksmall.png")}
        style={styles.background}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.navigate("/main/wallet")}>
          <Image
            source={require("../assets/images/backarrow.png")}
            style={{ width: 26, height: 21 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Transaction</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Image
          source={require("../assets/images/bigcheck.png")}
          style={styles.checkIcon}
        />

        <Text style={styles.message}>
          You have successfully sent <Text style={styles.bold}>$19</Text> to{" "}
          <Text style={styles.bold}>Pedro Gonzales</Text>.
        </Text>

        <Image
          source={require("../assets/images/someone.png")}
          style={styles.avatar}
        />

        {/* Buttons */}
        <View style={{ display: "flex", gap: 20, width: "100%" }}>
          <TouchableOpacity
            style={styles.executeButton}
            activeOpacity={0.7}
            onPress={() => {
              router.navigate("/transfer");
            }}
          >
            <LinearGradient
              colors={["#6075FF", "#1433FF"]}
              start={{ x: 0.2, y: 0 }}
              end={{ x: 1.2, y: 1 }}
              style={styles.login}
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
              <Text style={styles.loginText}>Execute Again</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signup}
            onPress={() => {
              router.navigate("/main/wallet");
            }}
          >
            <Text style={styles.signupText}>Complete</Text>
            <Image
              style={{ width: 18, height: 13 }}
              source={require("../assets/images/checkblue.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const shadow = {
  shadowColor: "rgba(0, 0, 0, 0.2)",
  shadowOffset: { width: 0, height: 3.49 },
  shadowOpacity: 1,
  shadowRadius: 17.43,
  elevation: 8,
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
  },
  background: {
    width: SCREEN_WIDTH,
    height: ASPECT_HEIGHT,
    position: "absolute",
    top: 0,
    left: 0,
  },
  header: {
    paddingTop: 56,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 20,
    color: "white",
    marginRight: 26,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    paddingTop: ASPECT_HEIGHT,
    paddingHorizontal: 30,
    paddingBottom: 72,
  },
  checkIcon: {
    width: 123,
    height: 123,
  },
  message: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0,
    color: "#2641D1",
    paddingHorizontal: 20,
  },
  bold: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 20,
    color: "#2641D1",
  },
  avatar: {
    width: 91,
    height: 91,
    borderRadius: 45.5,
    ...shadow,
  },
  executeButton: {
    width: "100%",
  },
  login: {
    textAlign: "center",

    height: 72,
    borderRadius: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    overflow: "hidden",
    width: "100%",
    ...shadow,
  },
  loginText: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    color: "white",
    textTransform: "capitalize",
  },
  signup: {
    textAlign: "center",
    height: 72,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: "rgba(96, 117, 255, 1)",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  signupText: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    color: "rgba(39, 67, 253, 1)",
    textTransform: "capitalize",
  },
});

export default Confirmation;
