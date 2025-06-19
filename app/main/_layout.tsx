import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import Prof from "../Components/icons/Homepage";
import Notif from "../Components/icons/Notification";
import Wall from "../Components/icons/Wallet 1";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 108,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 20 },
          shadowOpacity: 0.15,
          shadowRadius: 50,
          elevation: 10,
        },
        tabBarIcon: ({ focused }) => {
          const color = focused ? "rgba(39, 67, 253, 1)" : "#3A3A3A";

          const icons = {
            wallet: Wall,
            notification: Notif,
            profile: Prof,
          };

          const Icon = icons[route.name];

          return (
            <View style={styles.iconContainer}>
              <Icon color={color} />
              <View
                style={[
                  styles.dot,
                  {
                    backgroundColor: focused
                      ? "rgba(39, 67, 253, 1)"
                      : "transparent",
                  },
                ]}
              />
            </View>
          );
        },
      })}
    >
      <Tabs.Screen name="wallet" />
      <Tabs.Screen name="notification" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 8,
  },
});
