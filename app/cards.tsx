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
const ASPECT_RATIO = 278 / 393;
const ASPECT_HEIGHT = SCREEN_WIDTH * ASPECT_RATIO;

const CARD_WIDTH = 209;
const CARD_HEIGHT = 305;
const CARD_GAP = 25;
const BACK_CARD_WIDTH = 177;

const Cards = () => {
  const [frontCardIndex, setFrontCardIndex] = useState(0);

  const cardsData = [
    require("../assets/images/credit1.png"),
    require("../assets/images/credit2.png"),
  ];

  const getCardStyle = (index: number) => {
    const isFront = index === frontCardIndex;
    const scale = isFront ? 1 : BACK_CARD_WIDTH / CARD_WIDTH;
    const translateX = isFront ? 0 : CARD_WIDTH + CARD_GAP;
    const zIndex = isFront ? 2 : 1;

    return {
      zIndex,
      transform: [{ translateX }, { scale }],
      position: "absolute",
    };
  };

  return (
    <View style={styles.main}>
      <Image
        source={require("../assets/images/wback.png")}
        style={styles.background}
      />

      {/* 1. Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => router.navigate("/main/wallet")}
        >
          <Image
            source={require("../assets/images/backarrow.png")}
            style={{ width: 26, height: 21 }}
          />
        </TouchableOpacity>
        <Text style={styles.money}>You can check your cards here.</Text>
      </View>

      {/* 2. Cards Carousel */}
      <View style={styles.carouselContainer}>
        <View style={styles.carousel}>
          {[0, 1].map((i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setFrontCardIndex(i)}
              activeOpacity={0.9}
              style={[styles.cardWrapper, getCardStyle(i)]}
            >
              <Image
                source={cardsData[i]}
                style={styles.cardImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* 3. Recent Transactions */}
      <View style={styles.transactionSection}>
        <Text style={styles.total}>Recent Transactions</Text>
        {[1, 2, 3, 4].map((_, index) => (
          <TouchableOpacity style={styles.transactionContainer} key={index}>
            <Image
              source={require("../assets/images/shop.png")}
              style={styles.transactionImage}
            />
            <View style={styles.transactionTextContainer}>
              <Text style={styles.voucherText}>Shopping</Text>
              <Text style={styles.smallerText}>15 Mar 2025, 15:00 PM</Text>
            </View>
            <View style={styles.transactionAmountContainer}>
              <Text style={styles.voucherText}>-120$</Text>
              <Image
                source={require("../assets/images/grar.png")}
                style={styles.transactionArrow}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 56,
    flexDirection: "column",
    justifyContent: "space-between", // <-- space between arrow, cards, transactions
  },
  background: {
    width: SCREEN_WIDTH,
    height: ASPECT_HEIGHT,
    position: "absolute",
    top: 0,
    left: 0,
  },
  header: {
    // no padding top because main has paddingVertical
    alignItems: "flex-start",
  },
  back: {
    width: 26,
    height: 21,
  },
  carouselContainer: {
    // center horizontally
    alignItems: "flex-start",
    marginBottom: 32,
  },
  money: {
    marginTop: 32,
    maxWidth: 248,
    textAlign: "left",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 24,
    color: "rgba(255, 255, 255, 1)",
  },
  carousel: {
    height: CARD_HEIGHT,
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
    width: CARD_WIDTH + CARD_GAP + BACK_CARD_WIDTH,
  },
  cardWrapper: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  transactionSection: {
    flexDirection: "column",
    gap: 20,
  },
  transactionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  transactionImage: {
    width: 40,
    height: 40,
  },
  transactionTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  voucherText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: 0,
    color: "rgba(0, 0, 0, 1)",
  },
  smallerText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0,
    color: "rgba(185, 185, 185, 1)",
  },
  transactionAmountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  transactionArrow: {
    width: 7,
    height: 12,
    marginLeft: 20,
  },
  total: {
    alignSelf: "flex-start",
    textAlign: "left",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 22,
    color: "rgba(0, 0, 0, 1)",
  },
});

export default Cards;
