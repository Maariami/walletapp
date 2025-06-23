import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 526;

const calculatedHeight = (DESIGN_HEIGHT / DESIGN_WIDTH) * screenWidth;

const styled = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    objectFit: "fill",
    width: screenWidth,
    height: calculatedHeight,
  },
  buttons: {
    width: "100%",
    paddingHorizontal: 42,
    gap: 26,
    marginBottom: 75,
  },
  login: {
    position: "relative",
    width: "100%",
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
  },
  signup: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    borderRadius: 28,
    height: 72,
    borderColor: "rgba(96, 117, 255, 1)",
    borderWidth: 1,
    shadowColor: "rgba(27, 57, 255, 0.2)", // same base color as CSS
    shadowOffset: { width: 0, height: 8 }, // 0px 8px
    shadowOpacity: 0.2, // matches rgba alpha
    shadowRadius: 16, // blur radius
    elevation: 8, // Android-only
  },
  loginText: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 20,
    textTransform: "capitalize",
    color: "white",
  },
  signupText: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 20,
    textTransform: "capitalize",
    color: "rgba(96, 117, 255, 1)",
  },
});

export default function Index() {
  return (
    <View style={styled.main}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styled.icon}
      />

      <View style={styled.buttons}>
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
          <TouchableOpacity
            onPress={() => {
              router.navigate("/login");
            }}
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            activeOpacity={0.7}
          >
            <Text style={styled.loginText}>Log in</Text>
            <Image
              style={{ width: 20, height: 17 }}
              source={require("../assets/images/arrowwhite.png")}
            />
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity
          style={styled.signup}
          onPress={() => {
            router.navigate("/signup");
          }}
        >
          <Image
            source={require("../assets/images/signupdes.png")}
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              overflow: "hidden",
            }}
          />
          <Text style={styled.signupText}>Sign up</Text>
          <Image
            style={{ width: 20, height: 17 }}
            source={require("../assets/images/arrowblue.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
