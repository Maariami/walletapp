import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const transactions = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <>
      <View style={styles.main}>
        <Image
          source={require("../assets/images/wback.png")}
          style={styles.background}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              router.navigate("/main/wallet");
            }}
          >
            <Image
              source={require("../assets/images/backarrow.png")}
              style={{ width: 26, height: 21 }}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Transactions</Text>
        </View>
        <Text style={styles.exp}>Your total expenses</Text>

        <Text style={styles.money}>$14,053.06</Text>
        <Text style={styles.total}>Your total expenses</Text>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            rowGap: 20,
            marginBottom: 20,
          }}
        >
          {/* Travel */}
          <View style={styles.box}>
            <Image
              source={require("../assets/images/box1.png")}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.textWrap}>
              <Text style={styles.label}>Travel</Text>
              <Text style={styles.amount}>$1555.00</Text>
            </View>
          </View>

          {/* Shopping */}
          <View style={styles.box}>
            <Image
              source={require("../assets/images/box2.png")}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.textWrap}>
              <Text style={styles.label}>Shopping</Text>
              <Text style={styles.amount}>$120.00</Text>
            </View>
          </View>

          {/* Sport */}
          <View style={styles.box}>
            <Image
              source={require("../assets/images/box3.png")}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.textWrap}>
              <Text style={styles.label}>Sport</Text>
              <Text style={styles.amount}>$11,555.57</Text>
            </View>
          </View>

          {/* Medicine */}
          <View style={styles.box}>
            <Image
              source={require("../assets/images/box4.png")}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.textWrap}>
              <Text style={styles.label}>Medicine</Text>
              <Text style={styles.amount}>$15.99</Text>
            </View>
          </View>
        </View>

        {/* Gradient Button below the boxes */}
        <LinearGradient
          colors={["#6075FF", "#1433FF"]}
          start={{ x: 0.2, y: 0 }}
          end={{ x: 1.2, y: 1 }}
          style={styles.login}
        >
          <Image
            source={require("../assets/images/balls.png")}
            style={styles.ballImage}
          />
          <TouchableOpacity
            onPress={() => {}}
            style={styles.touchArea}
            activeOpacity={0.7}
          >
            <Text style={styles.loginText}>Check Your Bank Accounts</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Search Prompt */}

        {/* Search Modal */}
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsSearchVisible(true)}
        style={styles.visibleSearchPrompt}
      >
        <View style={styles.promptBar} />
        <View style={styles.promptSearchBar}>
          <Image
            source={require("../assets/images/transer.png")}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text style={{ color: "#A4C6FF" }}>Search</Text>
        </View>
      </TouchableOpacity>
      <Modal
        style={{ width: "100%" }}
        visible={isSearchVisible}
        animationType="slide"
        transparent
      >
        <TouchableWithoutFeedback onPress={() => setIsSearchVisible(false)}>
          <View style={styles.modalFullScreen}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <LinearGradient
                colors={["#4950F9", "#1937FE"]}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 1.2, y: 1 }}
                style={styles.modalContent}
              >
                <KeyboardAvoidingView
                  behavior={Platform.OS === "ios" ? "padding" : undefined}
                  style={{ flex: 1 }}
                >
                  <View style={styles.modalBar} />
                  <View style={styles.searchBar}>
                    <Image
                      source={require("../assets/images/transer.png")}
                      style={{ width: 20, height: 20, marginRight: 10 }}
                    />
                    <TextInput
                      placeholder="Search"
                      placeholderTextColor="rgba(128, 224, 255, 1)"
                      style={styles.searchInput}
                      onBlur={() => setIsSearchVisible(false)}
                    />
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingHorizontal: 30,
                      gap: 20,
                    }}
                  >
                    <TouchableOpacity style={styles.transactionContainer}>
                      <Image
                        source={require("../assets/images/shop.png")}
                        style={styles.transactionImage}
                      />
                      <View style={styles.transactionTextContainer}>
                        <Text style={styles.voucherText}>Shopping</Text>
                        <Text style={styles.smallerText}>
                          15 Mar 2025, 15:00 PM
                        </Text>
                      </View>
                      <View style={styles.transactionAmountContainer}>
                        <Text style={styles.voucherText}>-120$</Text>
                        <Image
                          source={require("../assets/images/bluear.png")}
                          style={styles.transactionArrow}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transactionContainer}>
                      <Image
                        source={require("../assets/images/shop.png")}
                        style={styles.transactionImage}
                      />
                      <View style={styles.transactionTextContainer}>
                        <Text style={styles.voucherText}>Shopping</Text>
                        <Text style={styles.smallerText}>
                          15 Mar 2025, 15:00 PM
                        </Text>
                      </View>
                      <View style={styles.transactionAmountContainer}>
                        <Text style={styles.voucherText}>-120$</Text>
                        <Image
                          source={require("../assets/images/bluear.png")}
                          style={styles.transactionArrow}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transactionContainer}>
                      <Image
                        source={require("../assets/images/shop.png")}
                        style={styles.transactionImage}
                      />
                      <View style={styles.transactionTextContainer}>
                        <Text style={styles.voucherText}>Shopping</Text>
                        <Text style={styles.smallerText}>
                          15 Mar 2025, 15:00 PM
                        </Text>
                      </View>
                      <View style={styles.transactionAmountContainer}>
                        <Text style={styles.voucherText}>-120$</Text>
                        <Image
                          source={require("../assets/images/bluear.png")}
                          style={styles.transactionArrow}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transactionContainer}>
                      <Image
                        source={require("../assets/images/shop.png")}
                        style={styles.transactionImage}
                      />
                      <View style={styles.transactionTextContainer}>
                        <Text style={styles.voucherText}>Shopping</Text>
                        <Text style={styles.smallerText}>
                          15 Mar 2025, 15:00 PM
                        </Text>
                      </View>
                      <View style={styles.transactionAmountContainer}>
                        <Text style={styles.voucherText}>-120$</Text>
                        <Image
                          source={require("../assets/images/bluear.png")}
                          style={styles.transactionArrow}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transactionContainer}>
                      <Image
                        source={require("../assets/images/shop.png")}
                        style={styles.transactionImage}
                      />
                      <View style={styles.transactionTextContainer}>
                        <Text style={styles.voucherText}>Shopping</Text>
                        <Text style={styles.smallerText}>
                          15 Mar 2025, 15:00 PM
                        </Text>
                      </View>
                      <View style={styles.transactionAmountContainer}>
                        <Text style={styles.voucherText}>-120$</Text>
                        <Image
                          source={require("../assets/images/bluear.png")}
                          style={styles.transactionArrow}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transactionContainer}>
                      <Image
                        source={require("../assets/images/shop.png")}
                        style={styles.transactionImage}
                      />
                      <View style={styles.transactionTextContainer}>
                        <Text style={styles.voucherText}>Shopping</Text>
                        <Text style={styles.smallerText}>
                          15 Mar 2025, 15:00 PM
                        </Text>
                      </View>
                      <View style={styles.transactionAmountContainer}>
                        <Text style={styles.voucherText}>-120$</Text>
                        <Image
                          source={require("../assets/images/bluear.png")}
                          style={styles.transactionArrow}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </KeyboardAvoidingView>
              </LinearGradient>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 56,
    backgroundColor: "white",
    paddingHorizontal: 30,
  },
  background: {
    width: SCREEN_WIDTH,
    height: 300,
    position: "absolute",
    top: 0,
    left: 0,
  },
  title: {
    width: "100%",
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 20,
    color: "white",
  },
  exp: {
    marginTop: 50,
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 22,
    color: "rgba(128, 224, 255, 1)",
  },
  money: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 26,
    color: "rgba(255, 255, 255, 1)",
    marginBottom: 120,
  },
  total: {
    textAlign: "left",
    fontFamily: "Montserrat",
    fontWeight: "700",
    fontSize: 22,
    color: "rgba(0, 0, 0, 1)",
    marginBottom: 30,
  },
  box: {
    width: 160,
    height: 100,
    borderRadius: 20,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  textWrap: {
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  label: {
    color: "white",
    fontWeight: "400",
    fontSize: 15,
  },
  amount: {
    marginTop: 10,
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  visibleSearchPrompt: {
    height: SCREEN_HEIGHT * 0.15,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    backgroundColor: "#4950F9",
    paddingHorizontal: 36,
  },

  promptBar: {
    width: 70,
    height: 3,
    backgroundColor: "white",
    borderRadius: 2,
    marginVertical: 6,
    marginBottom: 30,
  },
  promptSearchBar: {
    backgroundColor: "#051BAF",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 45,
    width: "100%",
  },
  modalFullScreen: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    height: SCREEN_HEIGHT * 0.65,
    width: "100%",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingTop: 20,
  },
  modalBar: {
    width: 70,
    height: 3,
    backgroundColor: "white",
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 30,
  },
  searchBar: {
    backgroundColor: "#051BAF",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 50,
    marginHorizontal: 36,
    marginBottom: 30,
  },
  searchInput: {
    flex: 1,
    color: "rgba(128, 224, 255, 1)",
    fontSize: 16,
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
    marginBottom: 20, // add spacing below button
    position: "relative",
    backgroundColor: "transparent", // gradient covers it
  },
  ballImage: {
    width: 128,
    height: 125,
    position: "absolute",
    right: 0,
    top: 0,
  },
  touchArea: {
    flex: 1,
    justifyContent: "center",
  },
  loginText: {
    maxWidth: 152,
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 20,
    textTransform: "capitalize",
    color: "white",
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
    color: "#FFFFFF",
  },
  smallerText: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0,
    color: "rgba(128, 224, 255, 1)",
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
});

export default transactions;
