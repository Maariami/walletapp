import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

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
    overflow: "scroll",
  },

  inputs: {
    marginTop: 40,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 23,
    marginBottom: 45,
  },
  input: {
    width: "100%",
    paddingInline: 5,
  },
  title: {
    color: "rgba(58, 58, 58, 1)",
    paddingLeft: 5,
    fontFamily: "Inter",
    fontWeight: 400,
    fontSize: 14,
    textTransform: "capitalize",
  },
  inputbox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 5,
    marginTop: 12,
    borderBottomColor: "rgba(222, 225, 239, 1)",
    borderBottomWidth: 1,
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
  },
  signupText: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 23,
    textTransform: "capitalize",
    color: "rgba(39, 67, 253, 1)",
  },
  header: {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 24,
    textTransform: "capitalize",
    paddingRight: 80,
    marginBottom: 20,
    marginTop: 40,
  },
  profile: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    borderBottomColor: "rgba(222, 225, 239, 1)",
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingTop: 20,
  },
  names: { marginRight: "auto" },
  fullname: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 16,
    color: "rgba(0, 0, 0, 1)",
  },
  status: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 16,
    color: "rgba(61, 86, 250, 1)",
  },
  search: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: 12,
    gap: 10,
    backgroundColor: "rgba(245, 246, 250, 1)",
    borderRadius: 10,
  },
});
export default function notification() {
  return (
    <View style={styled.main}>
      <View style={styled.search}>
        <Image
          source={require("../../assets/images/search.png")}
          style={{ width: 22, height: 21 }}
        />
        <TextInput
          placeholder="Search"
          style={{
            width: "100%",
            color: "rgba(61, 86, 250, 1)",
            outline: "none",
          }}
        ></TextInput>
      </View>

      <Text style={styled.header}>You can check your notifications here.</Text>
      <ScrollView>
        <View style={styled.profile}>
          <Image
            source={require("../../assets/images/someone.png")}
            style={{ width: 45, height: 45 }}
          />
          <View style={styled.names}>
            <Text style={styled.fullname}>Shasha Kolakola</Text>
            <Text style={styled.status}>Shasha Just sent you $15.</Text>
          </View>
          <Image
            source={require("../../assets/images/more.png")}
            style={{ width: 10, height: 18 }}
          />
        </View>
        <View style={styled.profile}>
          <Image
            source={require("../../assets/images/someone.png")}
            style={{ width: 45, height: 45 }}
          />
          <View style={styled.names}>
            <Text style={styled.fullname}>Shasha Kolakola</Text>
            <Text style={styled.status}>Shasha Just sent you $15.</Text>
          </View>
          <Image
            source={require("../../assets/images/more.png")}
            style={{ width: 10, height: 18 }}
          />
        </View>
        <View style={styled.profile}>
          <Image
            source={require("../../assets/images/someone.png")}
            style={{ width: 45, height: 45 }}
          />
          <View style={styled.names}>
            <Text style={styled.fullname}>Shasha Kolakola</Text>
            <Text style={styled.status}>Shasha Just sent you $15.</Text>
          </View>
          <Image
            source={require("../../assets/images/more.png")}
            style={{ width: 10, height: 18 }}
          />
        </View>
        <View style={styled.profile}>
          <Image
            source={require("../../assets/images/someone.png")}
            style={{ width: 45, height: 45 }}
          />
          <View style={styled.names}>
            <Text style={styled.fullname}>Shasha Kolakola</Text>
            <Text style={styled.status}>Shasha Just sent you $15.</Text>
          </View>
          <Image
            source={require("../../assets/images/more.png")}
            style={{ width: 10, height: 18 }}
          />
        </View>
        <View style={styled.profile}>
          <Image
            source={require("../../assets/images/someone.png")}
            style={{ width: 45, height: 45 }}
          />
          <View style={styled.names}>
            <Text style={styled.fullname}>Shasha Kolakola</Text>
            <Text style={styled.status}>Shasha Just sent you $15.</Text>
          </View>
          <Image
            source={require("../../assets/images/more.png")}
            style={{ width: 10, height: 18 }}
          />
        </View>
        <View style={styled.profile}>
          <Image
            source={require("../../assets/images/someone.png")}
            style={{ width: 45, height: 45 }}
          />
          <View style={styled.names}>
            <Text style={styled.fullname}>Shasha Kolakola</Text>
            <Text style={styled.status}>Shasha Just sent you $15.</Text>
          </View>
          <Image
            source={require("../../assets/images/more.png")}
            style={{ width: 10, height: 18 }}
          />
        </View>
        <View style={styled.profile}>
          <Image
            source={require("../../assets/images/someone.png")}
            style={{ width: 45, height: 45 }}
          />
          <View style={styled.names}>
            <Text style={styled.fullname}>Shasha Kolakola</Text>
            <Text style={styled.status}>Shasha Just sent you $15.</Text>
          </View>
          <Image
            source={require("../../assets/images/more.png")}
            style={{ width: 10, height: 18 }}
          />
        </View>
        <View style={styled.profile}>
          <Image
            source={require("../../assets/images/someone.png")}
            style={{ width: 45, height: 45 }}
          />
          <View style={styled.names}>
            <Text style={styled.fullname}>Shasha Kolakola</Text>
            <Text style={styled.status}>Shasha Just sent you $15.</Text>
          </View>
          <Image
            source={require("../../assets/images/more.png")}
            style={{ width: 10, height: 18 }}
          />
        </View>
        <View style={styled.profile}>
          <Image
            source={require("../../assets/images/someone.png")}
            style={{ width: 45, height: 45 }}
          />
          <View style={styled.names}>
            <Text style={styled.fullname}>Shasha Kolakola</Text>
            <Text style={styled.status}>Shasha Just sent you $15.</Text>
          </View>
          <Image
            source={require("../../assets/images/more.png")}
            style={{ width: 10, height: 18 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
