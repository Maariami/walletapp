import { router } from "expo-router";
import React, { useState } from "react";
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

const Payments = () => {
  const [amount, setAmount] = useState("0");

  const handleKeyPress = (value) => {
    if (value === "clear") {
      setAmount("0");
    } else if (value === ".") {
      if (!amount.includes(".")) setAmount(amount + value);
    } else if (amount === "0") {
      setAmount(value);
    } else {
      setAmount(amount + value);
    }
  };

  const keys = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [".", "0", "➡️"],
  ];

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
        <Text style={styles.title}>Transfer</Text>
      </View>

      {/* Content starts right below header */}
      <View style={styles.content}>
        <Text style={styles.label}>Enter Amount</Text>
        <Text style={styles.amountText}>${amount}</Text>

        <View style={styles.toContainer}>
          <Text style={styles.toLabel}>To</Text>
          <View style={styles.recipient}>
            <Image
              source={require("../assets/images/someone.png")}
              style={styles.recipientImage}
            />
            <Text style={styles.recipientName}>Pedro Gonzales</Text>
          </View>
        </View>

        <View style={styles.keypad}>
          {keys.map((row, rowIndex) => (
            <View style={styles.keyRow} key={rowIndex}>
              {row.map((key) => (
                <TouchableOpacity
                  key={key}
                  style={[styles.key, key === "➡️" && styles.arrowKey]}
                  onPress={() => {
                    if (key === "➡️") {
                      router.navigate("/complete");
                    } else {
                      handleKeyPress(key);
                    }
                  }}
                >
                  {key === "➡️" ? (
                    <Image
                      source={require("../assets/images/arrowwhite.png")}
                      style={styles.arrowIcon}
                    />
                  ) : (
                    <Text style={styles.keyText}>{key}</Text>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    paddingBottom: 72,
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
    marginBottom: 20,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 20,
    color: "white",
    marginRight: 26, // to center title between back icon and edge
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: ASPECT_HEIGHT,
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
  },
  label: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0,
    color: "#2641D1",
  },
  amountText: {
    marginTop: 8,
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 40,
    lineHeight: 40,
    letterSpacing: 0,
    color: "rgba(39, 67, 253, 1)",
    borderBottomWidth: 1,
    borderBottomColor: "#D3D3D3",
    paddingBottom: 8,
  },
  toContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  toLabel: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0,
    color: "#000000",
  },
  recipient: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  recipientImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  recipientName: {
    marginLeft: 12,
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 20,
    letterSpacing: 0,
    color: "#000000",
  },
  keypad: {
    marginTop: 40,
    marginBottom: 20,
  },
  keyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  key: {
    width: "30%",
    height: 60,
    backgroundColor: "#F0F0F0",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 32,
    lineHeight: 32,
    letterSpacing: 0,
    color: "rgba(39, 67, 253, 1)",
  },
  arrowKey: {
    backgroundColor: "rgba(39, 67, 253, 1)",
  },
  arrowIcon: {
    width: 24,
    height: 20,
    tintColor: "#fff",
  },
});

export default Payments;
