import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const styled = StyleSheet.create({
  sidebar: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding: 32,
    paddingTop: 68,
    paddingBottom: 120, // bump this from 80 to 120 to give space under tab bar
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
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
    marginTop: "auto",
  },
  signupText: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 23,
    textTransform: "capitalize",
    color: "rgba(39, 67, 253, 1)",
  },
  profile: {
    marginBottom: 50,
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
  },
  status: {
    fontFamily: "Montserrat",
    fontWeight: 300,
    fontSize: 18,
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width: "100%",
  },
  option: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  op: {
    color: "rgba(43, 71, 252, 1)",
    fontFamily: "Montserrat",
    fontSize: 18,
    fontWeight: 400,
    marginLeft: 8,
  },
});
const Sidebar = () => {
  return (
    <View style={styled.sidebar}>
      <View style={styled.profile}>
        <Image
          source={require("../../assets/images/someone.png")}
          style={{ width: 60, height: 60 }}
        />
        <View style={styled.names}>
          <Text style={styled.fullname}>Shasha Kolakola</Text>
          <Text style={styled.status}>@chyaber02</Text>
        </View>
      </View>
      <View style={styled.options}>
        <TouchableOpacity style={styled.option}>
          <Image
            source={require("../../assets/images/pay.png")}
            style={{ width: 18, height: 18 }}
          />
          <Text style={styled.op}>Payments</Text>
          <Image
            source={require("../../assets/images/arblue.png")}
            style={{ width: 7, height: 12, marginLeft: "auto" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styled.option}>
          <Image
            source={require("../../assets/images/tran.png")}
            style={{ width: 18, height: 18 }}
          />
          <Text style={styled.op}>transactions</Text>
          <Image
            source={require("../../assets/images/arblue.png")}
            style={{ width: 7, height: 12, marginLeft: "auto" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styled.option}>
          <Image
            source={require("../../assets/images/card.png")}
            style={{ width: 18, height: 18 }}
          />
          <Text style={styled.op}>My Cards</Text>
          <Image
            source={require("../../assets/images/arblue.png")}
            style={{ width: 7, height: 12, marginLeft: "auto" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styled.option}>
          <Image
            source={require("../../assets/images/prom.png")}
            style={{ width: 18, height: 18 }}
          />
          <Text style={styled.op}>Promotions</Text>
          <Image
            source={require("../../assets/images/arblue.png")}
            style={{ width: 7, height: 12, marginLeft: "auto" }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styled.option}>
          <Image
            source={require("../../assets/images/save.png")}
            style={{ width: 18, height: 18 }}
          />
          <Text style={styled.op}>Savings</Text>
          <Image
            source={require("../../assets/images/arblue.png")}
            style={{ width: 7, height: 12, marginLeft: "auto" }}
          />
        </TouchableOpacity>
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
    </View>
  );
};

export default Sidebar;
