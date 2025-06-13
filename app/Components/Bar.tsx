import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

type BarType = "wallet" | "notification" | "profile";
const SCREEN_WIDTH = Dimensions.get("window").width;

const ICON_SETS: Record<BarType, any[]> = {
  wallet: [
    require("../../assets/images/Walletd.png"),
    require("../../assets/images/Notification.png"),
    require("../../assets/images/Homepage.png"),
  ],
  notification: [
    require("../../assets/images/Wallet.png"),
    require("../../assets/images/Notificationd.png"),
    require("../../assets/images/Homepage.png"),
  ],
  profile: [
    require("../../assets/images/Wallet.png"),
    require("../../assets/images/Notification.png"),
    require("../../assets/images/Homepaged.png"),
  ],
};

const ICON_STYLES: Record<BarType, ImageStyle[]> = {
  wallet: [
    { width: 26, height: 38 },
    { width: 19, height: 23 },
    { width: 21, height: 25 },
  ],
  notification: [
    { width: 26, height: 25 },
    { width: 19, height: 36 },
    { width: 21, height: 25 },
  ],
  profile: [
    { width: 26, height: 25 },
    { width: 19, height: 23 },
    { width: 21, height: 38 },
  ],
};

// Destinations for each icon (in order)
const ROUTES: string[] = ["/wallet", "/notification", "/profile"];

interface BarProps {
  type: BarType;
}

const styled = StyleSheet.create({
  main: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    width: SCREEN_WIDTH,
    height: 120,
    paddingHorizontal: 69,
    paddingVertical: 35,
    justifyContent: "space-between",
    alignItems: "flex-start",
    zIndex: 10,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 1,
    shadowRadius: 50,
    elevation: 20,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});

export default function Bar({ type }: BarProps) {
  return (
    <View style={styled.main}>
      {ICON_SETS[type].map((icon, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => router.push(ROUTES[index])}
          activeOpacity={0.7}
        >
          <Image
            source={icon}
            style={ICON_STYLES[type][index]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
