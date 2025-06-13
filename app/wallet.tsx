import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Bar from "./Components/Bar";
import Sidebar from "./Components/Sidebar"; // <- make sure this exists

const SCREEN_WIDTH = Dimensions.get("window").width;

const Wallet = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const translateX = useRef(new Animated.Value(0)).current;

  const openSidebar = () => {
    setIsSidebarVisible(true);
    Animated.timing(translateX, {
      toValue: SCREEN_WIDTH * 0.7,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeSidebar = () => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setIsSidebarVisible(false);
    });
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      {isSidebarVisible && (
        <TouchableWithoutFeedback onPress={closeSidebar}>
          <View style={styles.overlay}>
            <Sidebar />
          </View>
        </TouchableWithoutFeedback>
      )}

      <Animated.View
        style={[
          styles.main,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <Image
          source={require("../assets/images/wback.png")}
          style={styles.background}
        />
        <View style={styles.images}>
          <TouchableOpacity onPress={openSidebar}>
            <Image
              source={require("../assets/images/burger.png")}
              style={{ width: 30, height: 29 }}
            />
          </TouchableOpacity>

          <Image
            source={require("../assets/images/someone.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>

        <Text style={styles.title}>Good morning Emma,</Text>
        <View style={styles.balance}>
          <View style={styles.line}>
            <Text style={styles.total}>Your total balance</Text>
            <Image
              source={require("../assets/images/options.png")}
              style={{
                width: 15,
                height: 4,
                objectFit: "contain",
              }}
            />
          </View>
          <Text style={styles.money}>$850.00</Text>

          <Image
            source={require("../assets/images/graph.png")}
            style={{
              width: 250,
              height: 166,
              marginTop: 26,
            }}
          />
        </View>

        <LinearGradient
          colors={["#6075FF", "#1433FF"]}
          start={{ x: 0.2, y: 0 }}
          end={{ x: 1.2, y: 1 }}
          style={styles.login}
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
            <Text style={styles.loginText}>Check Your Bank Accounts</Text>
          </TouchableOpacity>
        </LinearGradient>

        <Bar type="wallet" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: SCREEN_WIDTH,
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 10,
    flexDirection: "row",
  },
  main: {
    flex: 1,
    paddingTop: 56,
    paddingInline: 40,
    backgroundColor: "white",
  },
  background: {
    width: SCREEN_WIDTH,
    height: 300,
    position: "absolute",
    top: 0,
    left: 0,
  },
  images: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    maxWidth: 244,
    marginLeft: 15,
    marginBottom: 40,
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 32,
    color: "white",
  },
  balance: {
    backgroundColor: "white",
    padding: 32,
    borderRadius: 40,
    marginBottom: 30,
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 10,
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  total: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 16,
  },
  money: {
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 30,
    color: "rgba(45, 153, 255, 1)",
    marginTop: 8,
  },
  login: {
    flexDirection: "row",
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
    overflow: "hidden",
  },
  loginText: {
    maxWidth: 152,
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    textTransform: "capitalize",
    color: "white",
  },
});

export default Wallet;
