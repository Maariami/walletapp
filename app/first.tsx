import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const onboardingData = [
  {
    image: require("../assets/images/Saving.png"),
    background: require("../assets/images/ball1.png"),
    title: "Save your money conveniently.",
    subtitle: "Get 5% cash back for each transaction and spend it easily.",
    imageWidth: 280,
  },
  {
    image: require("../assets/images/Safe.png"),
    background: require("../assets/images/ball2.png"),
    title: "Secure your money for free and get rewards.",
    subtitle: "Get the most secure payment app ever and enjoy it.",
    imageWidth: 187,
  },
  {
    image: require("../assets/images/Trading.png"),
    background: require("../assets/images/ball3.png"),
    title: "Enjoy commission-free stock trading.",
    subtitle: "Online investing has never been easier than it is right now.",
    imageWidth: 187,
  },
];

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
  },
  slide: {
    width,
    alignItems: "center",
    paddingTop: 90,
    paddingHorizontal: 30,
    height: "100%",
  },
  texts: {
    width: "100%",
    gap: 26,
    flexDirection: "column",
    marginTop: "auto",
    alignItems: "flex-start",
    marginBottom: 120, // moved up to avoid overlapping the button
  },
  save: {
    color: "rgba(39, 67, 253, 1)",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 25,
    maxWidth: 291,
  },
  sale: {
    color: "rgba(124, 42, 255, 1)",
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 18,
    maxWidth: 291,
  },
  login: {
    width: 153,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    borderRadius: 28,
    height: 72,
    shadowColor: "rgba(27, 57, 255, 1)",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
    overflow: "hidden",
    position: "absolute",
    bottom: 30,
    right: 30,
    zIndex: 10,
  },
  loginText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    textTransform: "capitalize",
    color: "white",
  },
  backgroundBall: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 340,
    height: 370,
    zIndex: 0,
  },
});

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex((prev) => prev + 1);
    } else {
      router.navigate("/main/wallet");
    }
  };

  const renderItem = ({ item }: { item: (typeof onboardingData)[0] }) => (
    <View style={styles.slide}>
      <Image
        source={require("../assets/images/money.png")}
        style={{ width: 63, height: 61 }}
      />
      <Image
        source={item.image}
        style={{
          width: item.imageWidth,
          height: 202,
          marginTop: 80,
          marginBottom: 125,
        }}
        resizeMode="contain"
      />
      <View style={styles.texts}>
        <Text style={styles.save}>{item.title}</Text>
        <Text style={styles.sale}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.main}>
      {/* Background ball image changes with currentIndex */}
      <Image
        source={onboardingData[currentIndex].background}
        style={styles.backgroundBall}
      />

      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        extraData={currentIndex}
      />

      {/* Floating bottom-right button */}
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
        <TouchableOpacity
          onPress={handleNext}
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          activeOpacity={0.7}
        >
          <Text style={styles.loginText}>
            {currentIndex === onboardingData.length - 1
              ? "Get Started"
              : "Next"}
          </Text>
          {currentIndex !== onboardingData.length - 1 && (
            <Image
              style={{ width: 20, height: 17 }}
              source={require("../assets/images/arrowwhite.png")}
            />
          )}
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
